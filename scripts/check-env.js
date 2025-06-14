#!/usr/bin/env node

// Environment validation script
const requiredEnvVars = [
  'LYZR_API_KEY',
  'LYZR_USER_ID',
  'LYZR_BASE_URL',
  'LYZR_CLASSIC_SUMMARIZER_AGENT_ID',
  'LYZR_CLASSIC_SUMMARIZER_SESSION_ID',
  'LYZR_QUANT_ANALYST_AGENT_ID',
  'LYZR_QUANT_ANALYST_SESSION_ID',
  'LYZR_SENTIMENT_ANALYST_AGENT_ID',
  'LYZR_SENTIMENT_ANALYST_SESSION_ID',
  'LYZR_KEY_TAKEAWAYS_AGENT_ID',
  'LYZR_KEY_TAKEAWAYS_SESSION_ID'
];

console.log('Checking environment variables...\n');

let allValid = true;

for (const envVar of requiredEnvVars) {
  const value = process.env[envVar];
  if (!value) {
    console.log(`❌ ${envVar}: Missing`);
    allValid = false;
  } else {
    console.log(`✅ ${envVar}: Set (${value.length} characters)`);
  }
}

console.log('\n' + (allValid ? '✅ All environment variables are set!' : '❌ Some environment variables are missing.'));

if (!allValid) {
  console.log('\nPlease check your .env.local file and ensure all required variables are set.');
  process.exit(1);
}
