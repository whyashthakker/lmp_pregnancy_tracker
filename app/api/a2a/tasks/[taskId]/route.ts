import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory task store for demo purposes
// In production, you'd use a proper database
const taskStore = new Map<string, unknown>();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await params;
  
  const task = taskStore.get(taskId);
  
  if (!task) {
    return NextResponse.json(
      { error: { message: 'Task not found' } },
      { status: 404 }
    );
  }

  return NextResponse.json(task, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await params;
  
  const task = taskStore.get(taskId);
  
  if (!task) {
    return NextResponse.json(
      { error: { message: 'Task not found' } },
      { status: 404 }
    );
  }

  // Mark task as cancelled
  (task as Record<string, unknown>).status = {
    state: 'canceled',
    timestamp: new Date().toISOString()
  };
  
  taskStore.set(taskId, task);

  return NextResponse.json({ success: true }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}