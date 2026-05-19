'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setAnswer(data.answer || '');
    setReport(data.report || null);
    setLoading(false);
  }

  return (
    <main className="container">
      <div className="card">
        <h1>Assignment Generator</h1>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Paste your assignment question here..."
        />
        <div style={{ marginTop: 16 }}>
          <button onClick={generate}>
            {loading ? 'Generating...' : 'Generate Answer'}
          </button>
        </div>

        {report && (
          <p style={{ marginTop: 16 }}>
            AI Probability: {report.aiProbability}% | Human Probability: {report.humanProbability}%
          </p>
        )}

        {answer && (
          <div style={{ marginTop: 24, whiteSpace: 'pre-wrap' }}>
            {answer}
          </div>
        )}
      </div>
    </main>
  );
}
