// utility functions for contract analysis

// calculate fairness score based on red flags
export function calculateFairnessScore(redFlags: any[]): number {
  if (!redFlags || redFlags.length === 0) return 95;
  
  // base score starts at 100
  let score = 100;
  
  // deduct points based on severity
  redFlags.forEach(flag => {
    score -= flag.severity * 2; // each severity point reduces score by 2
  });
  
  // ensure score doesn't go below 0
  return Math.max(0, Math.min(100, score));
}

// extract text from pdf buffer (placeholder for actual implementation)
export async function extractTextFromPDF(buffer: ArrayBuffer): Promise<string> {
  // todo: implement actual pdf parsing with pdf-parse or similar
  // for now, return placeholder
  return "Contract text extraction not yet implemented. This is a demo.";
}

// analyze contract text with ai (placeholder for actual implementation)
export async function analyzeContractWithAI(contractText: string) {
  // todo: implement actual openai/claude api call
  // this is where you'd call gpt-4 or claude with the contract text
  
  const prompt = `You are a contract lawyer protecting freelancers.

Analyze this freelance contract and identify:

1. RED FLAGS (deal-breakers):
   - Unlimited liability
   - No payment guarantees
   - Unfair IP ownership
   - Extreme non-compete clauses
   - One-sided termination rights

2. For each issue found:
   - Explain in simple English (8th grade level)
   - Rate severity (1-10)
   - Provide fair alternative clause
   - Suggest negotiation approach

3. Calculate Fairness Score (0-100):
   - 80-100: Great contract
   - 60-79: Acceptable with minor changes
   - 40-59: Needs serious negotiation
   - 0-39: Walk away

Contract text:
${contractText}

Format output as JSON with sections: redFlags, warnings, score, negotiationEmail`;

  // placeholder response
  return {
    score: 45,
    redFlags: [],
    warnings: [],
    negotiationEmail: ""
  };
}

// format currency
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

// truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}
