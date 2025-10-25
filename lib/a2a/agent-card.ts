import type { AgentCard } from '@a2a-js/sdk';
import { EGSPECT_SKILLS } from './types';

export const egspectAgentCard: AgentCard = {
  name: 'EGSpect Pregnancy & Baby Health Assistant',
  description: 'Comprehensive pregnancy and baby health tools powered by AI. Calculate due dates, track development, check symptoms, and get personalized recommendations.',
  protocolVersion: '0.3.0',
  version: '1.0.0',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  skills: [
    {
      id: EGSPECT_SKILLS.DUE_DATE_CALCULATOR,
      name: 'Due Date Calculator',
      description: 'Calculate estimated delivery date based on last menstrual period or conception date',
      tags: ['pregnancy', 'calculator', 'planning', 'due-date']
    },
    {
      id: EGSPECT_SKILLS.PREGNANCY_WEEK_CALCULATOR,
      name: 'Pregnancy Week Calculator',
      description: 'Determine current pregnancy week with detailed trimester information and development milestones',
      tags: ['pregnancy', 'calculator', 'tracking', 'development']
    },
    {
      id: EGSPECT_SKILLS.BABY_NAME_GENERATOR,
      name: 'Baby Name Generator',
      description: 'Generate personalized baby name suggestions based on preferences, origin, style, and meaning',
      tags: ['baby', 'names', 'generator', 'planning']
    },
    {
      id: EGSPECT_SKILLS.WEIGHT_GAIN_CALCULATOR,
      name: 'Pregnancy Weight Gain Calculator',
      description: 'Track healthy pregnancy weight gain based on pre-pregnancy BMI and current week',
      tags: ['pregnancy', 'health', 'weight', 'tracking']
    },
    {
      id: EGSPECT_SKILLS.OVULATION_CALCULATOR,
      name: 'Ovulation Calculator',
      description: 'Calculate fertile window and ovulation date for conception planning',
      tags: ['fertility', 'calculator', 'conception', 'planning']
    },
    {
      id: EGSPECT_SKILLS.BABY_COST_CALCULATOR,
      name: 'Baby Cost Calculator',
      description: 'Calculate comprehensive costs of having a baby by country including delivery, supplies, and first year expenses',
      tags: ['baby', 'cost', 'planning', 'budget']
    },
    {
      id: EGSPECT_SKILLS.GENDER_PREDICTOR,
      name: 'Baby Gender Predictor',
      description: 'Fun gender prediction using traditional methods, symptoms, and cravings analysis',
      tags: ['baby', 'gender', 'prediction', 'fun']
    },
    {
      id: EGSPECT_SKILLS.BABY_SIZE_COMPARISON,
      name: 'Baby Size Comparison',
      description: 'Track baby\'s growth with fruit/vegetable size comparisons and development information',
      tags: ['baby', 'development', 'growth', 'tracking']
    },
    {
      id: EGSPECT_SKILLS.SYMPTOM_CHECKER,
      name: 'Pregnancy Symptom Checker',
      description: 'Analyze pregnancy symptoms and provide guidance on when to seek medical attention',
      tags: ['pregnancy', 'health', 'symptoms', 'medical']
    },
    {
      id: EGSPECT_SKILLS.SAFE_FOODS_CHECKER,
      name: 'Pregnancy Safe Foods Checker',
      description: 'Check if specific foods are safe to eat during pregnancy with detailed explanations',
      tags: ['pregnancy', 'food', 'safety', 'nutrition']
    }
  ],
  capabilities: {
    streaming: true,
    pushNotifications: true,
    stateTransitionHistory: true
  },
  defaultInputModes: ['text/plain'],
  defaultOutputModes: ['text/plain', 'application/json']
};