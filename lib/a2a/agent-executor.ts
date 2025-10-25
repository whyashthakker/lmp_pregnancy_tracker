import { v4 as uuidv4 } from 'uuid';
import type { 
  AgentExecutor, 
  RequestContext, 
  ExecutionEventBus
} from '@a2a-js/sdk/server';
import type {
  Message, 
  Task,
  TaskArtifactUpdateEvent,
  TaskStatusUpdateEvent
} from '@a2a-js/sdk';
import { EGSPECT_SKILLS } from './types';

interface ToolRequest {
  tool?: string;
  parameters?: Record<string, unknown>;
  [key: string]: unknown;
}

// Import all calculator functions
import { calculateDueDate } from './calculators/due-date';
import { calculatePregnancyWeek } from './calculators/pregnancy-week';
import { generateBabyNames } from './calculators/baby-names';
import { calculateWeightGain } from './calculators/weight-gain';
import { checkSymptoms } from './calculators/symptom-checker';
import { checkFoodSafety } from './calculators/safe-foods';

export class EGSpectAgentExecutor implements AgentExecutor {
  async execute(
    requestContext: RequestContext,
    eventBus: ExecutionEventBus
  ): Promise<void> {
    const { taskId, contextId, userMessage, task } = requestContext;
    
    try {
      // Create initial task if it doesn't exist
      if (!task) {
        const initialTask: Task = {
          kind: "task",
          id: taskId,
          contextId: contextId,
          status: {
            state: "submitted",
            timestamp: new Date().toISOString(),
          },
          history: [userMessage]
        };
        eventBus.publish(initialTask);
      }

      // Update status to working
      const workingUpdate: TaskStatusUpdateEvent = {
        kind: "status-update",
        taskId,
        contextId,
        status: { state: "working", timestamp: new Date().toISOString() },
        final: false
      };
      eventBus.publish(workingUpdate);

      // Parse the user message to extract tool request and parameters
      const result = await this.processToolRequest(userMessage);

      // Create artifact with the result
      const artifactUpdate: TaskArtifactUpdateEvent = {
        kind: "artifact-update",
        taskId,
        contextId,
        artifact: {
          artifactId: uuidv4(),
          name: `${(result as Record<string, unknown>).toolUsed}_result.json`,
          parts: [{ 
            kind: "text", 
            text: JSON.stringify(result, null, 2)
          }],
        },
      };
      eventBus.publish(artifactUpdate);

      // Send a human-readable response message
      const responseMessage: Message = {
        kind: "message",
        messageId: uuidv4(),
        role: "agent",
        parts: [{ 
          kind: "text", 
          text: this.formatResponse(result as Record<string, unknown>)
        }],
        contextId: contextId,
      };
      eventBus.publish(responseMessage);

      // Mark task as completed
      const completedUpdate: TaskStatusUpdateEvent = {
        kind: "status-update",
        taskId,
        contextId,
        status: { state: "completed", timestamp: new Date().toISOString() },
        final: true,
      };
      eventBus.publish(completedUpdate);
      eventBus.finished();

    } catch (error) {
      // Handle errors
      const errorMessage: Message = {
        kind: "message",
        messageId: uuidv4(),
        role: "agent",
        parts: [{ 
          kind: "text", 
          text: `I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}. Please check your input parameters and try again.`
        }],
        contextId: contextId,
      };
      eventBus.publish(errorMessage);

      const errorUpdate: TaskStatusUpdateEvent = {
        kind: "status-update",
        taskId,
        contextId,
        status: { state: "failed", timestamp: new Date().toISOString() },
        final: true,
      };
      eventBus.publish(errorUpdate);
      eventBus.finished();
    }
  }

  private async processToolRequest(userMessage: Message): Promise<unknown> {
    // Extract tool and parameters from message
    const firstPart = userMessage.parts[0];
    const messageText = (firstPart?.kind === 'text' ? firstPart.text : '') || '';
    
    // Try to parse as JSON first (for structured requests)
    let toolRequest: ToolRequest;
    try {
      toolRequest = JSON.parse(messageText);
    } catch {
      // If not JSON, try to parse natural language
      toolRequest = this.parseNaturalLanguage(messageText);
    }

    const { tool, params } = toolRequest;

    switch (tool) {
      case EGSPECT_SKILLS.DUE_DATE_CALCULATOR:
        return {
          toolUsed: 'due-date-calculator',
          result: calculateDueDate(params as Record<string, unknown>),
          success: true
        };

      case EGSPECT_SKILLS.PREGNANCY_WEEK_CALCULATOR:
        return {
          toolUsed: 'pregnancy-week-calculator',
          result: calculatePregnancyWeek(params as Record<string, unknown>),
          success: true
        };

      case EGSPECT_SKILLS.BABY_NAME_GENERATOR:
        return {
          toolUsed: 'baby-name-generator',
          result: generateBabyNames(params as Record<string, unknown>),
          success: true
        };

      case EGSPECT_SKILLS.WEIGHT_GAIN_CALCULATOR:
        return {
          toolUsed: 'weight-gain-calculator',
          result: calculateWeightGain(params as never),
          success: true
        };

      case EGSPECT_SKILLS.SYMPTOM_CHECKER:
        return {
          toolUsed: 'symptom-checker',
          result: checkSymptoms(params as never),
          success: true
        };

      case EGSPECT_SKILLS.SAFE_FOODS_CHECKER:
        return {
          toolUsed: 'safe-foods-checker',
          result: checkFoodSafety(params as never),
          success: true
        };

      // Add other tools here...

      default:
        throw new Error(`Unknown tool: ${tool}. Available tools: ${Object.values(EGSPECT_SKILLS).join(', ')}`);
    }
  }

  private parseNaturalLanguage(text: string): { tool: string, params: Record<string, unknown> } {
    const lowerText = text.toLowerCase();

    // Due date calculator patterns
    if (lowerText.includes('due date') || lowerText.includes('delivery date')) {
      return {
        tool: EGSPECT_SKILLS.DUE_DATE_CALCULATOR,
        params: this.extractDateParams(text)
      };
    }

    // Pregnancy week calculator patterns
    if (lowerText.includes('how many weeks') || lowerText.includes('pregnancy week')) {
      return {
        tool: EGSPECT_SKILLS.PREGNANCY_WEEK_CALCULATOR,
        params: this.extractDateParams(text)
      };
    }

    // Baby names patterns
    if (lowerText.includes('baby name') || lowerText.includes('name suggestion')) {
      return {
        tool: EGSPECT_SKILLS.BABY_NAME_GENERATOR,
        params: this.extractNameParams(text)
      };
    }

    // Weight gain patterns
    if (lowerText.includes('weight gain') || lowerText.includes('weight track')) {
      return {
        tool: EGSPECT_SKILLS.WEIGHT_GAIN_CALCULATOR,
        params: this.extractWeightParams(text)
      };
    }

    // Symptom checker patterns
    if (lowerText.includes('symptom') || lowerText.includes('feeling')) {
      return {
        tool: EGSPECT_SKILLS.SYMPTOM_CHECKER,
        params: this.extractSymptomParams(text)
      };
    }

    // Safe foods patterns
    if (lowerText.includes('safe to eat') || lowerText.includes('food safe')) {
      return {
        tool: EGSPECT_SKILLS.SAFE_FOODS_CHECKER,
        params: this.extractFoodParams(text)
      };
    }

    throw new Error('Could not understand your request. Please specify which tool you want to use and provide the necessary parameters.');
  }

  private extractDateParams(text: string): Record<string, string> {
    // Simple date extraction - in a real implementation, use more sophisticated NLP
    const dateMatch = text.match(/(\d{4}-\d{2}-\d{2})/);
    if (dateMatch) {
      if (text.toLowerCase().includes('last period') || text.toLowerCase().includes('lmp')) {
        return { lastMenstrualPeriod: dateMatch[1] };
      } else {
        return { conceptionDate: dateMatch[1] };
      }
    }
    return {};
  }

  private extractNameParams(text: string): Record<string, unknown> {
    const params: Record<string, unknown> = {};
    
    if (text.toLowerCase().includes('boy')) params.gender = 'boy';
    if (text.toLowerCase().includes('girl')) params.gender = 'girl';
    if (text.toLowerCase().includes('unisex')) params.gender = 'unisex';
    
    const countMatch = text.match(/(\d+)\s*names?/);
    if (countMatch) params.count = parseInt(countMatch[1]);
    
    return params;
  }

  private extractWeightParams(text: string): Record<string, unknown> {
    const params: Record<string, unknown> = {};
    
    const weightMatch = text.match(/(\d+(?:\.\d+)?)\s*(kg|lbs?|pounds?)/i);
    if (weightMatch) {
      params.prePregnancyWeight = parseFloat(weightMatch[1]);
      params.unit = weightMatch[2].toLowerCase().includes('kg') ? 'metric' : 'imperial';
    }
    
    const heightMatch = text.match(/(\d+(?:\.\d+)?)\s*(cm|feet?|ft|inches?|in)/i);
    if (heightMatch) {
      params.height = parseFloat(heightMatch[1]);
    }
    
    const weekMatch = text.match(/(\d+)\s*weeks?/);
    if (weekMatch) {
      params.currentWeek = parseInt(weekMatch[1]);
    }
    
    return params;
  }

  private extractSymptomParams(text: string): Record<string, unknown> {
    // Extract symptoms mentioned in text
    const symptoms: string[] = [];
    const commonSymptoms = ['nausea', 'fatigue', 'headache', 'back pain', 'heartburn', 'constipation'];
    
    for (const symptom of commonSymptoms) {
      if (text.toLowerCase().includes(symptom)) {
        symptoms.push(symptom);
      }
    }
    
    const weekMatch = text.match(/(\d+)\s*weeks?/);
    const pregnancyWeek = weekMatch ? parseInt(weekMatch[1]) : 20; // Default to 20 weeks
    
    return { symptoms, pregnancyWeek };
  }

  private extractFoodParams(text: string): Record<string, string> {
    // Extract food name from text
    const food = text.replace(/is\s+|safe\s+to\s+eat|food\s+safe|can\s+i\s+eat/gi, '').trim();
    
    const weekMatch = text.match(/(\d+)\s*weeks?/);
    let trimester = 1; // Default to first trimester
    if (weekMatch) {
      const week = parseInt(weekMatch[1]);
      if (week <= 12) trimester = 1;
      else if (week <= 27) trimester = 2;
      else trimester = 3;
    }
    
    return { food, trimester: trimester.toString() };
  }

  private formatResponse(result: Record<string, unknown>): string {
    switch (result.toolUsed) {
      case 'due-date-calculator':
        const dueDate = result.result as Record<string, unknown>;
        return `🗓️ **Due Date Calculation**\n\n` +
               `📅 Estimated Due Date: ${dueDate.dueDate}\n` +
               `📊 Current Progress: ${dueDate.currentWeek} weeks, ${dueDate.currentDay} days\n` +
               `🔄 Trimester: ${dueDate.trimester}\n` +
               `⏰ Weeks Remaining: ${dueDate.weeksRemaining}\n` +
               `📍 Conception Date: ${dueDate.conceptionDate}`;

      case 'pregnancy-week-calculator':
        const weekData = result.result as Record<string, unknown>;
        return `📊 **Pregnancy Week Calculation**\n\n` +
               `📅 Current Week: ${weekData.currentWeek} weeks, ${weekData.currentDay} days\n` +
               `🔄 Trimester: ${weekData.trimester}\n` +
               `📖 This Week: ${weekData.weekDescription}\n` +
               `🎯 Milestones: ${(weekData.milestones as string[])?.join(', ') || 'None'}\n` +
               `💡 Development Info: ${weekData.developmentInfo}`;

      case 'baby-name-generator':
        const names = result.result as Record<string, unknown>;
        const nameList = (names.names as Record<string, unknown>[])?.map((n: Record<string, unknown>) => 
          `• **${n.name}** (${n.origin}) - ${n.meaning}`
        )?.join('\n') || 'No names found';
        return `👶 **Baby Name Suggestions**\n\n` +
               `Found ${names.totalSuggestions} suggestions:\n\n${nameList}`;

      case 'weight-gain-calculator':
        const weight = result.result as Record<string, unknown>;
        return `⚖️ **Weight Gain Analysis**\n\n` +
               `📊 Pre-pregnancy BMI: ${weight.preBMI} (${weight.bmiCategory})\n` +
               `🎯 Recommended Gain: ${weight.recommendedGainMin}-${weight.recommendedGainMax} kg\n` +
               `📈 Weekly Target: ${weight.weeklyRecommendation} kg\n` +
               `${weight.currentGain ? `Current Gain: ${weight.currentGain} kg ${weight.isOnTrack ? '✅' : '⚠️'}\n` : ''}` +
               `💡 ${weight.advice}`;

      case 'symptom-checker':
        const symptoms = result.result as Record<string, unknown>;
        const urgencyEmoji = symptoms.urgencyLevel === 'emergency' ? '🚨' : 
                           symptoms.urgencyLevel === 'high' ? '⚠️' : 
                           symptoms.urgencyLevel === 'medium' ? '💛' : '✅';
        return `🩺 **Symptom Analysis** ${urgencyEmoji}\n\n` +
               `✅ Normal Symptoms: ${(symptoms.normalSymptoms as string[])?.join(', ') || 'None identified'}\n` +
               `⚠️ Concerning Symptoms: ${(symptoms.concerningSymptoms as string[])?.join(', ') || 'None identified'}\n` +
               `🏥 See Doctor: ${symptoms.shouldSeeDoctor ? 'Yes' : 'No'}\n` +
               `📋 Recommendations:\n${(symptoms.recommendations as string[])?.map((r: string) => `• ${r}`)?.join('\n') || 'None available'}`;

      case 'safe-foods-checker':
        const food = result.result as Record<string, unknown>;
        const safetyEmoji = food.safetyLevel === 'safe' ? '✅' : 
                           food.safetyLevel === 'moderate' ? '💛' : 
                           food.safetyLevel === 'avoid' ? '⚠️' : '🚫';
        return `🍎 **Food Safety Check** ${safetyEmoji}\n\n` +
               `🥘 Food: ${food.food}\n` +
               `${food.isSafe ? '✅' : '❌'} Safe: ${food.isSafe ? 'Yes' : 'No'}\n` +
               `📊 Safety Level: ${(food.safetyLevel as string)?.toUpperCase() || 'UNKNOWN'}\n` +
               `📝 Explanation: ${food.explanation}\n` +
               `${food.alternatives ? `🔄 Alternatives: ${(food.alternatives as string[])?.join(', ')}\n` : ''}` +
               `${food.recommendations ? `💡 Recommendations:\n${(food.recommendations as string[])?.map((r: string) => `• ${r}`)?.join('\n')}` : ''}`;

      default:
        return `Result: ${JSON.stringify(result.result, null, 2)}`;
    }
  }

  async cancelTask(): Promise<void> {
    // Implementation for task cancellation if needed
    // For these quick calculations, cancellation is not typically needed
  }
}