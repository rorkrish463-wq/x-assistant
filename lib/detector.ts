export function analyzeText(text: string) {
  const sentences = text.split(/[.!?]+/).filter(Boolean);
  const lengths = sentences.map(s => s.trim().split(/\s+/).length);
  const avg = lengths.reduce((a, b) => a + b, 0) / (lengths.length || 1);
  const variance = lengths.reduce((sum, n) => sum + Math.pow(n - avg, 2), 0) / (lengths.length || 1);
  const aiProbability = Math.max(5, Math.min(95, Math.round(70 - variance)));
  return {
    aiProbability,
    humanProbability: 100 - aiProbability
  };
}
