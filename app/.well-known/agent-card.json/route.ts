import { NextResponse } from 'next/server';
import { egspectAgentCard } from '@/lib/a2a/agent-card';

export async function GET() {
  return NextResponse.json(egspectAgentCard, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}