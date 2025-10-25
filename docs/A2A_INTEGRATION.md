# EGSpect A2A Integration Guide

This document explains how EGSpect's pregnancy and baby health tools are integrated with the Agent2Agent (A2A) protocol, allowing other AI agents and applications to programmatically access our tools.

## Overview

The EGSpect A2A Server exposes all our pregnancy and baby health calculators and tools as agent services that can be consumed by:
- Other A2A-compliant agents
- AI assistants and chatbots  
- Healthcare applications
- Developer integrations

## Available Tools

### 1. Due Date Calculator (`due-date-calculator`)
Calculate estimated delivery date based on last menstrual period or conception date.

**Input Parameters:**
```json
{
  "lastMenstrualPeriod": "2024-08-01",  // YYYY-MM-DD format
  "conceptionDate": "2024-08-15",       // Alternative to LMP
  "cycleLength": 28                     // Optional, defaults to 28 days
}
```

**Example Response:**
```json
{
  "dueDate": "2025-05-08",
  "currentWeek": 12,
  "currentDay": 3,
  "trimester": 1,
  "weeksRemaining": 28,
  "daysRemaining": 196
}
```

### 2. Pregnancy Week Calculator (`pregnancy-week-calculator`)
Determine current pregnancy week with development information.

**Input Parameters:**
```json
{
  "lastMenstrualPeriod": "2024-08-01",  // Or use dueDate
  "dueDate": "2025-05-08"               // Alternative to LMP
}
```

### 3. Baby Name Generator (`baby-name-generator`)
Generate personalized baby name suggestions.

**Input Parameters:**
```json
{
  "gender": "girl",           // "boy", "girl", or "unisex"
  "origin": "Greek",          // Cultural origin
  "style": "classic",         // "modern", "classic", "vintage", etc.
  "count": 10,               // Number of suggestions
  "popularity": "unique",     // "common", "unique", "trendy"
  "meaning": "wisdom"         // Desired meaning theme
}
```

### 4. Weight Gain Calculator (`weight-gain-calculator`)
Track healthy pregnancy weight gain.

**Input Parameters:**
```json
{
  "prePregnancyWeight": 65,    // kg or lbs
  "height": 165,               // cm or inches
  "currentWeek": 20,
  "currentWeight": 72,         // Optional
  "unit": "metric"            // "metric" or "imperial"
}
```

### 5. Symptom Checker (`symptom-checker`)
Analyze pregnancy symptoms and provide guidance.

**Input Parameters:**
```json
{
  "symptoms": ["nausea", "fatigue", "headache"],
  "pregnancyWeek": 8,
  "severity": "mild",          // "mild", "moderate", "severe"
  "duration": "3 days"         // Optional
}
```

### 6. Safe Foods Checker (`safe-foods-checker`)
Check if foods are safe during pregnancy.

**Input Parameters:**
```json
{
  "food": "salmon",
  "trimester": 2,              // Optional: 1, 2, or 3
  "category": "seafood"        // Optional
}
```

## Quick Start

### 1. Start the A2A Server

```bash
# Install dependencies
npm install

# Start the A2A server (default port 4000)
npm run a2a:dev
```

The server will be available at:
- Agent Card: `http://localhost:4000/.well-known/agent-card.json`
- Health Check: `http://localhost:4000/health`
- Documentation: `http://localhost:4000/`

### 2. Connect with A2A Client

```typescript
import { A2AClient } from "@a2a-js/sdk/client";
import { v4 as uuidv4 } from "uuid";

// Connect to the server
const client = await A2AClient.fromCardUrl(
  "http://localhost:4000/.well-known/agent-card.json"
);

// Send a structured request
const response = await client.sendMessage({
  message: {
    messageId: uuidv4(),
    role: "user",
    parts: [{
      kind: "text",
      text: JSON.stringify({
        tool: "due-date-calculator",
        params: {
          lastMenstrualPeriod: "2024-08-01"
        }
      })
    }],
    kind: "message"
  }
});

console.log(response);
```

### 3. Natural Language Support

The server also supports natural language queries:

```typescript
// Natural language example
const response = await client.sendMessage({
  message: {
    messageId: uuidv4(),
    role: "user", 
    parts: [{
      kind: "text",
      text: "Can I eat sushi during pregnancy?"
    }],
    kind: "message"
  }
});
```

## Streaming Support

For real-time updates, use the streaming API:

```typescript
const stream = client.sendMessageStream({
  message: {
    messageId: uuidv4(),
    role: "user",
    parts: [{
      kind: "text", 
      text: JSON.stringify({
        tool: "pregnancy-week-calculator",
        params: { lastMenstrualPeriod: "2024-06-01" }
      })
    }],
    kind: "message"
  }
});

for await (const event of stream) {
  if (event.kind === "task") {
    console.log(`Task created: ${event.id}`);
  } else if (event.kind === "message") {
    console.log(`Response: ${event.parts[0].text}`);
  }
}
```

## Authentication & Security

Currently, the server runs without authentication for development. For production:

1. Add API key authentication
2. Rate limiting 
3. HTTPS enforcement
4. CORS configuration

## Integration Examples

### Healthcare Chatbot
```typescript
// Integrate with AI assistant
const pregnancyBot = async (userQuery: string) => {
  const client = await A2AClient.fromCardUrl("https://api.egspect.com/.well-known/agent-card.json");
  
  // Parse user intent and route to appropriate tool
  if (userQuery.includes("due date")) {
    return await client.sendMessage(/* due date params */);
  } else if (userQuery.includes("safe to eat")) {
    return await client.sendMessage(/* food safety params */);
  }
  // ... more routing logic
};
```

### Mobile App Integration
```typescript
// React Native or mobile app
class PregnancyToolsAPI {
  private client: A2AClient;
  
  async initialize() {
    this.client = await A2AClient.fromCardUrl("https://api.egspect.com/.well-known/agent-card.json");
  }
  
  async calculateDueDate(lmp: string) {
    return await this.client.sendMessage({
      message: {
        messageId: uuidv4(),
        role: "user",
        parts: [{
          kind: "text",
          text: JSON.stringify({
            tool: "due-date-calculator", 
            params: { lastMenstrualPeriod: lmp }
          })
        }],
        kind: "message"
      }
    });
  }
}
```

## Error Handling

The server provides detailed error messages:

```typescript
const response = await client.sendMessage(params);

if ("error" in response) {
  console.error("Tool error:", response.error.message);
  // Handle specific error types
  if (response.error.message.includes("Unknown tool")) {
    // Tool not found
  } else if (response.error.message.includes("parameter")) {
    // Invalid parameters
  }
} else {
  // Success - process result
  const result = response.result;
}
```

## Extending the Server

To add new tools:

1. **Define types** in `lib/a2a/types.ts`
2. **Add calculator** in `lib/a2a/calculators/`
3. **Update agent card** in `lib/a2a/agent-card.ts`
4. **Extend executor** in `lib/a2a/agent-executor.ts`

Example new calculator:
```typescript
// lib/a2a/calculators/my-new-tool.ts
export function calculateMyTool(params: MyToolParams): MyToolResult {
  // Implementation
  return {
    result: "calculated value",
    advice: "helpful advice"
  };
}
```

## Production Deployment

### Environment Variables
```bash
A2A_PORT=4000
NEXT_PUBLIC_APP_URL=https://egspect.com
A2A_DEBUG=false
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 4000
CMD ["npm", "run", "a2a:start"]
```

### Load Balancing
For high availability, deploy multiple instances behind a load balancer:
```yaml
# docker-compose.yml
version: '3.8'
services:
  a2a-server-1:
    build: .
    environment:
      - A2A_PORT=4000
  a2a-server-2: 
    build: .
    environment:
      - A2A_PORT=4001
  nginx:
    image: nginx
    ports:
      - "80:80"
    depends_on:
      - a2a-server-1
      - a2a-server-2
```

## Testing

Run the example client:
```bash
# Terminal 1: Start server
npm run a2a:dev

# Terminal 2: Run examples  
tsx examples/a2a-client-example.ts
```

## Support

- 📧 Email: support@egspect.com
- 📚 Documentation: https://egspect.com/docs
- 🐛 Issues: https://github.com/egspect/issues
- 💬 Discord: https://discord.gg/egspect

## Medical Disclaimer

⚠️ **Important**: All tools provide informational guidance only and should not replace professional medical advice. Always consult with your healthcare provider for medical decisions.