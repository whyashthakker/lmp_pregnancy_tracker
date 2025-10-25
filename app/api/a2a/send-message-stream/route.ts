import { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { RequestContext } from '@a2a-js/sdk/server';
import { EGSpectAgentExecutor } from '@/lib/a2a/agent-executor';

// Server-Sent Events for streaming
class StreamingEventBus {
  private encoder = new TextEncoder();
  private controller: ReadableStreamDefaultController<Uint8Array> | null = null;

  setController(controller: ReadableStreamDefaultController<Uint8Array>) {
    this.controller = controller;
  }

  publish(event: unknown) {
    if (this.controller) {
      const eventString = `data: ${JSON.stringify(event)}\n\n`;
      this.controller.enqueue(this.encoder.encode(eventString));
    }
  }

  finished() {
    if (this.controller) {
      this.controller.close();
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message || !message.parts || message.parts.length === 0) {
      return new Response(
        JSON.stringify({ error: { message: 'Invalid message format' } }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const stream = new ReadableStream({
      async start(controller) {
        const eventBus = new StreamingEventBus();
        eventBus.setController(controller);

        try {
          // Create execution context
          const taskId = uuidv4();
          const contextId = message.contextId || uuidv4();

          const requestContext = new RequestContext(
            message,
            taskId,
            contextId
          );

          // Execute the request
          const executor = new EGSpectAgentExecutor();
          await executor.execute(requestContext, eventBus as never);

        } catch (error) {
          console.error('Streaming execution error:', error);
          const errorEvent = {
            kind: 'error',
            error: {
              message: error instanceof Error ? error.message : 'Internal server error'
            }
          };
          eventBus.publish(errorEvent);
          eventBus.finished();
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

  } catch (error) {
    console.error('Stream setup error:', error);
    return new Response(
      JSON.stringify({ 
        error: { 
          message: error instanceof Error ? error.message : 'Internal server error' 
        } 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}