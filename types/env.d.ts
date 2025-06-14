declare namespace NodeJS {
  interface ProcessEnv {
    LYZR_API_KEY: string;
    LYZR_USER_ID: string;
    LYZR_BASE_URL: string;
    
    // Agent configurations
    LYZR_CLASSIC_SUMMARIZER_AGENT_ID: string;
    LYZR_CLASSIC_SUMMARIZER_SESSION_ID: string;
    
    LYZR_QUANT_ANALYST_AGENT_ID: string;
    LYZR_QUANT_ANALYST_SESSION_ID: string;
    
    LYZR_SENTIMENT_ANALYST_AGENT_ID: string;
    LYZR_SENTIMENT_ANALYST_SESSION_ID: string;
    
    LYZR_KEY_TAKEAWAYS_AGENT_ID: string;
    LYZR_KEY_TAKEAWAYS_SESSION_ID: string;
  }
}
