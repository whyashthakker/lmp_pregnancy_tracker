import { NextResponse } from 'next/server';
import { egspectAgentCard } from '@/lib/a2a/agent-card';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'EGSpect A2A API',
    version: egspectAgentCard.version,
    timestamp: new Date().toISOString(),
    endpoints: {
      agentCard: '/.well-known/agent-card.json',
      sendMessage: '/api/a2a/send-message',
      streamMessage: '/api/a2a/send-message-stream',
      tasks: '/api/a2a/tasks/{taskId}',
      health: '/api/a2a/health'
    },
    availableTools: egspectAgentCard.skills.map(skill => ({
      id: skill.id,
      name: skill.name,
      description: skill.description
    }))
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}