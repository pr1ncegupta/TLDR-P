import { lyzrConfig, validateConfig } from './lyzr-config';

interface LyzrAgent {
  id: string;
  name: string;
  agentId: string;
  sessionId: string;
  specialization: 'summary' | 'quantitative' | 'sentiment' | 'insights';
  description: string;
}

interface LyzrResponse {
  success: boolean;
  data?: any;
  error?: string;
  processingTime: number;
}

export const LYZR_AGENTS: LyzrAgent[] = [
  {
    id: 'classic-summarizer',
    name: 'Classic Summarizer Agent',
    agentId: lyzrConfig.agents.classicSummarizer.agentId,
    sessionId: lyzrConfig.agents.classicSummarizer.sessionId,
    specialization: 'summary',
    description: 'Generates comprehensive summaries highlighting main points and key themes'
  },
  {
    id: 'quant-analyst',
    name: 'Quantitative Analyst Agent',
    agentId: lyzrConfig.agents.quantAnalyst.agentId,
    sessionId: lyzrConfig.agents.quantAnalyst.sessionId,
    specialization: 'quantitative',
    description: 'Extracts numerical data, statistics, and quantitative insights'
  },
  {
    id: 'sentiment-analyst',
    name: 'Sentiment Analyst Agent',
    agentId: lyzrConfig.agents.sentimentAnalyst.agentId,
    sessionId: lyzrConfig.agents.sentimentAnalyst.sessionId,
    specialization: 'sentiment',
    description: 'Analyzes emotional tone and identifies positive/negative aspects'
  },
  {
    id: 'key-takeaways',
    name: 'Key Takeaways Agent',
    agentId: lyzrConfig.agents.keyTakeaways.agentId,
    sessionId: lyzrConfig.agents.keyTakeaways.sessionId,
    specialization: 'insights',
    description: 'Provides actionable insights and strategic recommendations'
  }
];

class LyzrService {
  private get apiKey(): string {
    return lyzrConfig.apiKey;
  }
  
  private get userId(): string {
    return lyzrConfig.userId;
  }
  
  private get baseUrl(): string {
    return lyzrConfig.baseUrl;
  }

  async analyzeWithAgent(agent: LyzrAgent, text: string): Promise<LyzrResponse> {
    const startTime = Date.now();
    
    try {
      // Validate configuration before making API call
      const configErrors = validateConfig();
      if (configErrors.length > 0) {
        throw new Error(`Configuration errors: ${configErrors.join(', ')}. Please check your .env.local file.`);
      }
      
      // Enhanced prompts based on accuracy issues
      const enhancedPrompt = this.enhancePromptForAgent(agent, text);
      
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey
        },
        body: JSON.stringify({
          user_id: this.userId,
          agent_id: agent.agentId,
          session_id: agent.sessionId,
          message: enhancedPrompt
        })
      });

      if (!response.ok) {
        throw new Error(`Lyzr API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const processingTime = Date.now() - startTime;

      // Enhanced parsing with fallback mechanisms
      const parsedData = this.parseAgentResponseEnhanced(data, agent.specialization, text);

      return {
        success: true,
        data: parsedData,
        processingTime
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        processingTime: Date.now() - startTime
      };
    }
  }

  private enhancePromptForAgent(agent: LyzrAgent, text: string): string {
    const basePrompt = text;
    
    switch (agent.specialization) {
      case 'summary':
        return `Please provide a comprehensive summary of the following text. Focus on:
1. Main themes and key points
2. Important conclusions or findings
3. Critical information that readers must know
4. Context and background when relevant

Aim for 2-4 sentences that capture the essence while being informative and accurate.

Text to summarize:
${basePrompt}

Summary:`;

      case 'quantitative':
        return `Analyze the following text and extract ALL numerical data, statistics, percentages, financial figures, measurements, and quantitative information. For each number found, provide context about what it represents.

Format your response as a list where each item contains:
- The specific number/statistic
- Clear context explaining what this number means

Text to analyze:
${basePrompt}

Quantitative insights:`;

      case 'sentiment':
        return `Analyze the sentiment and tone of the following text. Identify:

POSITIVE ASPECTS (things that are good, successful, beneficial, or optimistic):
- List specific positive elements, achievements, or strengths mentioned

NEGATIVE ASPECTS (challenges, problems, concerns, or areas needing improvement):
- List specific issues, weaknesses, or concerning elements mentioned

Be thorough and specific in your analysis.

Text to analyze:
${basePrompt}

Sentiment analysis:`;

      case 'insights':
        return `Based on the following text, provide actionable insights and key takeaways. Focus on:
1. Strategic recommendations
2. Important lessons learned
3. Next steps or actions to consider
4. Implications for decision-making
5. Critical insights for stakeholders

Provide 3-6 specific, actionable takeaways that someone could act upon.

Text to analyze:
${basePrompt}

Key takeaways:`;

      default:
        return basePrompt;
    }
  }

  async analyzeText(text: string): Promise<{
    metadata: any;
    classic_summary: any;
    quantitative_analysis: any;
    sentiment_analysis: any;
    actionable_insights: any;
  }> {
    const startTime = Date.now();
    
    // Run all agents in parallel with retry mechanism
    const analysisPromises = LYZR_AGENTS.map(agent => 
      this.analyzeWithAgentRetry(agent, text, 2) // 2 retries
    );

    const results = await Promise.all(analysisPromises);
    const processingTime = Date.now() - startTime;

    // Compile results with enhanced fallbacks
    const compiledResults = {
      metadata: {
        source: "User-provided text content",
        processed_at: new Date().toISOString(),
        text_length: text.length,
        processing_time_ms: processingTime
      },
      classic_summary: {
        summary: ""
      },
      quantitative_analysis: {
        numerical_insights: []
      },
      sentiment_analysis: {
        positives: [],
        negatives: []
      },
      actionable_insights: {
        key_takeaways: []
      }
    };

    // Process results from each agent with enhanced error handling
    results.forEach((result, index) => {
      const agent = LYZR_AGENTS[index];
      
      if (result.success && result.data) {
        switch (agent.specialization) {
          case 'summary':
            compiledResults.classic_summary = result.data;
            break;
          case 'quantitative':
            compiledResults.quantitative_analysis = result.data;
            break;
          case 'sentiment':
            compiledResults.sentiment_analysis = result.data;
            break;
          case 'insights':
            compiledResults.actionable_insights = result.data;
            break;
        }
      } else {
        // Provide fallback content for failed agents
        this.provideFallbackContent(compiledResults, agent.specialization, text);
      }
    });

    // Post-process to ensure minimum quality standards
    this.ensureMinimumQuality(compiledResults, text);

    return compiledResults;
  }

  private async analyzeWithAgentRetry(agent: LyzrAgent, text: string, retries: number): Promise<LyzrResponse> {
    for (let attempt = 0; attempt <= retries; attempt++) {
      const result = await this.analyzeWithAgent(agent, text);
      if (result.success) {
        return result;
      }
      
      if (attempt < retries) {
        // Wait before retry (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
      }
    }
    
    // Return the last failed attempt
    return await this.analyzeWithAgent(agent, text);
  }

  private parseAgentResponseEnhanced(response: any, specialization: string, originalText: string): any {
    // Extract the actual message content from Lyzr response
    const content = response?.response || response?.message || response?.content || '';
    
    if (!content || content.trim().length === 0) {
      return this.generateFallbackResponse(specialization, originalText);
    }
    
    // Try to parse JSON if present
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        return this.validateAndEnhanceParsedData(parsed, specialization, originalText);
      }
    } catch (error) {
      // Continue with text parsing
    }

    // Enhanced parsing based on specialization
    switch (specialization) {
      case 'summary':
        return this.parseSummaryResponseEnhanced(content, originalText);
      
      case 'quantitative':
        return this.parseQuantitativeResponseEnhanced(content, originalText);
      
      case 'sentiment':
        return this.parseSentimentResponseEnhanced(content, originalText);
      
      case 'insights':
        return this.parseInsightsResponseEnhanced(content, originalText);
      
      default:
        return { content: content.trim() };
    }
  }

  private parseSummaryResponseEnhanced(text: string, originalText: string) {
    // Clean and extract summary
    let summary = text.trim();
    
    // Remove common prefixes
    summary = summary.replace(/^(summary|summary:|here's a summary|the summary is|in summary):\s*/i, '');
    summary = summary.replace(/^(here is|this is|the following is)\s+.*?summary.*?:\s*/i, '');
    
    // If summary is too short, try to extract from longer response
    if (summary.length < 50) {
      const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 20);
      if (sentences.length > 0) {
        summary = sentences.slice(0, 3).join('. ').trim() + '.';
      }
    }
    
    // Ensure minimum quality
    if (summary.length < 30) {
      summary = this.generateBasicSummary(originalText);
    }
    
    return { summary: summary };
  }

  private parseQuantitativeResponseEnhanced(text: string, originalText: string) {
    const numerical_insights: Array<{ statistic: string; context: string }> = [];
    const lines = text.split('\n').filter(line => line.trim());
    
    // Enhanced number detection patterns
    const numberPatterns = [
      /(\d+(?:,\d{3})*(?:\.\d+)?%)/g,  // Percentages
      /(\$\d+(?:,\d{3})*(?:\.\d+)?(?:[MBK])?)/g,  // Currency
      /(\d+(?:,\d{3})*(?:\.\d+)?\s*(?:million|billion|thousand|M|B|K))/gi,  // Large numbers
      /(\d+(?:,\d{3})*(?:\.\d+)?)/g,  // Regular numbers
    ];
    
    // Extract from structured lines first
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.match(/^[-•*]\s*/) || trimmed.match(/^\d+\.\s*/)) {
        for (const pattern of numberPatterns) {
          const matches = trimmed.match(pattern);
          if (matches) {
            matches.forEach(match => {
              const context = trimmed.replace(match, '').replace(/^[-•*\d.]\s*/, '').trim();
              if (context.length > 5) {
                numerical_insights.push({
                  statistic: match,
                  context: context
                });
              }
            });
          }
        }
      }
    }
    
    // If no structured data found, scan entire text
    if (numerical_insights.length === 0) {
      this.extractNumbersFromText(originalText, numerical_insights);
    }
    
    return { numerical_insights };
  }

  private parseSentimentResponseEnhanced(text: string, originalText: string) {
    const lines = text.split('\n').filter(line => line.trim());
    const positives: string[] = [];
    const negatives: string[] = [];
    
    let currentSection = '';
    let foundStructuredContent = false;
    
    for (const line of lines) {
      const trimmed = line.trim();
      const lowerLine = trimmed.toLowerCase();
      
      // Detect section headers
      if (lowerLine.includes('positive') || lowerLine.includes('strength') || lowerLine.includes('advantage') || lowerLine.includes('good')) {
        currentSection = 'positive';
        foundStructuredContent = true;
      } else if (lowerLine.includes('negative') || lowerLine.includes('concern') || lowerLine.includes('improvement') || lowerLine.includes('challenge') || lowerLine.includes('problem')) {
        currentSection = 'negative';
        foundStructuredContent = true;
      } else if (trimmed.match(/^[-•*]\s*/) || trimmed.match(/^\d+\.\s*/)) {
        const content = trimmed.replace(/^[-•*\d.]\s*/, '').trim();
        if (content.length > 10) {
          if (currentSection === 'positive') {
            positives.push(content);
          } else if (currentSection === 'negative') {
            negatives.push(content);
          }
        }
      }
    }
    
    // If no structured content found, use basic sentiment analysis
    if (!foundStructuredContent) {
      this.performBasicSentimentAnalysis(originalText, positives, negatives);
    }
    
    return { positives, negatives };
  }

  private parseInsightsResponseEnhanced(text: string, originalText: string) {
    const lines = text.split('\n').filter(line => line.trim());
    const key_takeaways: string[] = [];
    
    // Look for structured takeaways
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.match(/^[-•*]\s*/) || trimmed.match(/^\d+\.\s*/)) {
        const content = trimmed.replace(/^[-•*\d.]\s*/, '').trim();
        if (content.length > 15) {
          key_takeaways.push(content);
        }
      } else if (trimmed.length > 20 && 
                 !trimmed.toLowerCase().includes('takeaway') && 
                 !trimmed.toLowerCase().includes('insight') &&
                 !trimmed.toLowerCase().includes('analysis')) {
        // Add standalone insights
        if (key_takeaways.length < 6) {
          key_takeaways.push(trimmed);
        }
      }
    }
    
    // If no takeaways found, generate basic ones
    if (key_takeaways.length === 0) {
      this.generateBasicTakeaways(originalText, key_takeaways);
    }
    
    return { key_takeaways };
  }

  private generateFallbackResponse(specialization: string, originalText: string): any {
    switch (specialization) {
      case 'summary':
        return { summary: this.generateBasicSummary(originalText) };
      case 'quantitative':
        const insights: Array<{ statistic: string; context: string }> = [];
        this.extractNumbersFromText(originalText, insights);
        return { numerical_insights: insights };
      case 'sentiment':
        const positives: string[] = [];
        const negatives: string[] = [];
        this.performBasicSentimentAnalysis(originalText, positives, negatives);
        return { positives, negatives };
      case 'insights':
        const takeaways: string[] = [];
        this.generateBasicTakeaways(originalText, takeaways);
        return { key_takeaways: takeaways };
      default:
        return { content: "Analysis unavailable" };
    }
  }

  private generateBasicSummary(text: string): string {
    // Extract first few sentences as basic summary
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 20);
    if (sentences.length >= 2) {
      return sentences.slice(0, 2).join('. ').trim() + '.';
    } else if (sentences.length === 1) {
      return sentences[0].trim() + '.';
    }
    return "Summary of the provided text content.";
  }

  private extractNumbersFromText(text: string, insights: Array<{ statistic: string; context: string }>) {
    const numberRegex = /(\d+(?:,\d{3})*(?:\.\d+)?(?:%|\$|M|B|K)?)/g;
    const sentences = text.split(/[.!?]+/);
    
    sentences.forEach(sentence => {
      const matches = sentence.match(numberRegex);
      if (matches) {
        matches.forEach(match => {
          const context = sentence.replace(match, '').trim();
          if (context.length > 10) {
            insights.push({
              statistic: match,
              context: context.substring(0, 100) + (context.length > 100 ? '...' : '')
            });
          }
        });
      }
    });
  }

  private performBasicSentimentAnalysis(text: string, positives: string[], negatives: string[]) {
    const positiveWords = ['good', 'great', 'excellent', 'success', 'growth', 'increase', 'improve', 'strong', 'positive', 'benefit'];
    const negativeWords = ['bad', 'poor', 'decline', 'decrease', 'problem', 'issue', 'concern', 'challenge', 'negative', 'risk'];
    
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 20);
    
    sentences.forEach(sentence => {
      const lowerSentence = sentence.toLowerCase();
      const hasPositive = positiveWords.some(word => lowerSentence.includes(word));
      const hasNegative = negativeWords.some(word => lowerSentence.includes(word));
      
      if (hasPositive && !hasNegative) {
        positives.push(sentence.trim());
      } else if (hasNegative && !hasPositive) {
        negatives.push(sentence.trim());
      }
    });
  }

  private generateBasicTakeaways(text: string, takeaways: string[]) {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 30);
    
    // Look for sentences that might contain insights
    const insightKeywords = ['should', 'must', 'need', 'important', 'key', 'critical', 'recommend', 'suggest'];
    
    sentences.forEach(sentence => {
      const lowerSentence = sentence.toLowerCase();
      if (insightKeywords.some(keyword => lowerSentence.includes(keyword))) {
        takeaways.push(sentence.trim());
      }
    });
    
    // If still no takeaways, add generic ones
    if (takeaways.length === 0) {
      takeaways.push("Review the key points mentioned in the analysis");
      takeaways.push("Consider the implications for your specific context");
      takeaways.push("Monitor relevant metrics and trends discussed");
    }
  }

  private validateAndEnhanceParsedData(data: any, specialization: string, originalText: string): any {
    // Validate and enhance parsed JSON data
    switch (specialization) {
      case 'summary':
        if (!data.summary || data.summary.length < 30) {
          data.summary = this.generateBasicSummary(originalText);
        }
        break;
      case 'quantitative':
        if (!data.numerical_insights || data.numerical_insights.length === 0) {
          data.numerical_insights = [];
          this.extractNumbersFromText(originalText, data.numerical_insights);
        }
        break;
      case 'sentiment':
        if (!data.positives) data.positives = [];
        if (!data.negatives) data.negatives = [];
        if (data.positives.length === 0 && data.negatives.length === 0) {
          this.performBasicSentimentAnalysis(originalText, data.positives, data.negatives);
        }
        break;
      case 'insights':
        if (!data.key_takeaways || data.key_takeaways.length === 0) {
          data.key_takeaways = [];
          this.generateBasicTakeaways(originalText, data.key_takeaways);
        }
        break;
    }
    return data;
  }

  private provideFallbackContent(compiledResults: any, specialization: string, text: string) {
    switch (specialization) {
      case 'summary':
        compiledResults.classic_summary.summary = this.generateBasicSummary(text);
        break;
      case 'quantitative':
        this.extractNumbersFromText(text, compiledResults.quantitative_analysis.numerical_insights);
        break;
      case 'sentiment':
        this.performBasicSentimentAnalysis(text, compiledResults.sentiment_analysis.positives, compiledResults.sentiment_analysis.negatives);
        break;
      case 'insights':
        this.generateBasicTakeaways(text, compiledResults.actionable_insights.key_takeaways);
        break;
    }
  }

  private ensureMinimumQuality(results: any, originalText: string) {
    // Ensure summary exists and has minimum length
    if (!results.classic_summary.summary || results.classic_summary.summary.length < 30) {
      results.classic_summary.summary = this.generateBasicSummary(originalText);
    }
    
    // Ensure at least some quantitative data if numbers exist in text
    if (results.quantitative_analysis.numerical_insights.length === 0) {
      this.extractNumbersFromText(originalText, results.quantitative_analysis.numerical_insights);
    }
    
    // Ensure sentiment analysis has some content
    if (results.sentiment_analysis.positives.length === 0 && results.sentiment_analysis.negatives.length === 0) {
      this.performBasicSentimentAnalysis(originalText, results.sentiment_analysis.positives, results.sentiment_analysis.negatives);
    }
    
    // Ensure takeaways exist
    if (results.actionable_insights.key_takeaways.length === 0) {
      this.generateBasicTakeaways(originalText, results.actionable_insights.key_takeaways);
    }
  }
}

export const lyzrService = new LyzrService();
export type { LyzrAgent, LyzrResponse };