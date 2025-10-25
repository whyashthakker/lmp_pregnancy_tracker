import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { RequestContext } from '@a2a-js/sdk/server';
import { EGSpectAgentExecutor } from '@/lib/a2a/agent-executor';

// Create a mock execution context for Next.js API routes
class NextJSExecutionEventBus {
  private events: unknown[] = [];
  private finished_status = false;

  publish(event: unknown) {
    this.events.push(event);
  }

  finished() {
    this.finished_status = true;
  }

  getEvents() {
    return this.events;
  }

  isFinished() {
    return this.finished_status;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message || !message.parts || message.parts.length === 0) {
      return NextResponse.json(
        { error: { message: 'Invalid message format' } },
        { status: 400 }
      );
    }

    // Create execution context
    const taskId = uuidv4();
    const contextId = message.contextId || uuidv4();
    const eventBus = new NextJSExecutionEventBus();

    const requestContext = new RequestContext(
      message,
      taskId,
      contextId
    );

    // Execute the request
    const executor = new EGSpectAgentExecutor();
    await executor.execute(requestContext, eventBus as never);

    // Get the final result from events
    const events = eventBus.getEvents();
    const finalMessage = events.find((e) => (e as Record<string, unknown>)?.kind === 'message' && (e as Record<string, unknown>)?.role === 'agent');
    const task = events.find((e) => (e as Record<string, unknown>)?.kind === 'task');

    if (finalMessage) {
      return NextResponse.json({
        result: finalMessage
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    } else if (task) {
      return NextResponse.json({
        result: task
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    } else {
      return NextResponse.json(
        { error: { message: 'No result generated' } },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('A2A execution error:', error);
    return NextResponse.json(
      { 
        error: { 
          message: error instanceof Error ? error.message : 'Internal server error' 
        } 
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}