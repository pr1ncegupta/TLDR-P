// Lyzr configuration with environment variable support

export interface LyzrConfig {
  apiKey: string;
  userId: string;
  baseUrl: string;
  agents: {
    classicSummarizer: {
      agentId: string;
      sessionId: string;
    };
    quantAnalyst: {
      agentId: string;
      sessionId: string;
    };
    sentimentAnalyst: {
      agentId: string;
      sessionId: string;
    };
    keyTakeaways: {
      agentId: string;
      sessionId: string;
    };
  };
}

function getConfig(): LyzrConfig {
  const config: LyzrConfig = {
    apiKey: process.env.LYZR_API_KEY || '',
    userId: process.env.LYZR_USER_ID || '',
    baseUrl: process.env.LYZR_BASE_URL || 'https://agent-prod.studio.lyzr.ai/v3/inference/chat/',
    agents: {
      classicSummarizer: {
        agentId: process.env.LYZR_CLASSIC_SUMMARIZER_AGENT_ID || '',
        sessionId: process.env.LYZR_CLASSIC_SUMMARIZER_SESSION_ID || '',
      },
      quantAnalyst: {
        agentId: process.env.LYZR_QUANT_ANALYST_AGENT_ID || '',
        sessionId: process.env.LYZR_QUANT_ANALYST_SESSION_ID || '',
      },
      sentimentAnalyst: {
        agentId: process.env.LYZR_SENTIMENT_ANALYST_AGENT_ID || '',
        sessionId: process.env.LYZR_SENTIMENT_ANALYST_SESSION_ID || '',
      },
      keyTakeaways: {
        agentId: process.env.LYZR_KEY_TAKEAWAYS_AGENT_ID || '',
        sessionId: process.env.LYZR_KEY_TAKEAWAYS_SESSION_ID || '',
      },
    },
  };

  return config;
}

export const lyzrConfig = getConfig();

// Validation function
export function validateConfig(): string[] {
  const errors: string[] = [];
  
  if (!lyzrConfig.apiKey) errors.push('LYZR_API_KEY is required');
  if (!lyzrConfig.userId) errors.push('LYZR_USER_ID is required');
  if (!lyzrConfig.agents.classicSummarizer.agentId) errors.push('LYZR_CLASSIC_SUMMARIZER_AGENT_ID is required');
  if (!lyzrConfig.agents.classicSummarizer.sessionId) errors.push('LYZR_CLASSIC_SUMMARIZER_SESSION_ID is required');
  if (!lyzrConfig.agents.quantAnalyst.agentId) errors.push('LYZR_QUANT_ANALYST_AGENT_ID is required');
  if (!lyzrConfig.agents.quantAnalyst.sessionId) errors.push('LYZR_QUANT_ANALYST_SESSION_ID is required');
  if (!lyzrConfig.agents.sentimentAnalyst.agentId) errors.push('LYZR_SENTIMENT_ANALYST_AGENT_ID is required');
  if (!lyzrConfig.agents.sentimentAnalyst.sessionId) errors.push('LYZR_SENTIMENT_ANALYST_SESSION_ID is required');
  if (!lyzrConfig.agents.keyTakeaways.agentId) errors.push('LYZR_KEY_TAKEAWAYS_AGENT_ID is required');
  if (!lyzrConfig.agents.keyTakeaways.sessionId) errors.push('LYZR_KEY_TAKEAWAYS_SESSION_ID is required');
  
  return errors;
}
