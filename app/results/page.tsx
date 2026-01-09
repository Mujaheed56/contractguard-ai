'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, AlertTriangle, Copy, CheckCircle } from 'lucide-react';

interface RedFlag {
  issue: string;
  severity: number;
  explanation: string;
  alternative: string;
}

interface Warning {
  issue: string;
  severity: number;
  explanation: string;
  suggestion: string;
}

interface AnalysisResult {
  score: number;
  redFlags: RedFlag[];
  warnings: Warning[];
  negotiationEmail: string;
}

export default function ResultsPage() {
  const router = useRouter();
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('contractAnalysis');
    if (!stored) {
      router.push('/analyze');
      return;
    }
    setAnalysis(JSON.parse(stored));
  }, [router]);

  const copyEmail = async () => {
    if (!analysis?.negotiationEmail) return;
    
    try {
      await navigator.clipboard.writeText(analysis.negotiationEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // fallback for older browsers or if clipboard api fails
      const textArea = document.createElement('textarea');
      textArea.value = analysis.negotiationEmail;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.error('Failed to copy:', e);
        alert('Failed to copy. Please select and copy the text manually.');
      }
      document.body.removeChild(textArea);
    }
  };

  if (!analysis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading analysis...</p>
        </div>
      </div>
    );
  }

  // determine score color
  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 70) return 'bg-green-100';
    if (score >= 40) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Contract Analysis Complete
          </h1>
          <p className="text-gray-600">
            Here's what we found in your contract
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Fairness Score
            </h2>
            <div className={`inline-flex items-center justify-center w-48 h-48 rounded-full ${getScoreBg(analysis.score)} mb-4`}>
              <div className={`text-6xl font-bold ${getScoreColor(analysis.score)}`}>
                {analysis.score}
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              {analysis.score >= 70 && "This contract looks fairly balanced"}
              {analysis.score >= 40 && analysis.score < 70 && "This contract has some concerning clauses"}
              {analysis.score < 40 && "⚠️ This contract is heavily biased against you"}
            </p>
          </div>
        </div>
        {analysis.redFlags.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
              Red Flags Found
            </h2>
            <div className="space-y-4">
              {analysis.redFlags.map((flag, idx) => (
                <div key={idx} className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{flag.issue}</h3>
                    <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                      Severity: {flag.severity}/10
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{flag.explanation}</p>
                  <div className="bg-green-50 border-l-2 border-green-500 p-3 rounded">
                    <p className="text-sm text-gray-700"><span className="font-semibold text-green-700">Better Alternative:</span> {flag.alternative}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {analysis.warnings.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Warnings
            </h2>
            <div className="space-y-4">
              {analysis.warnings.map((warning, idx) => (
                <div key={idx} className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{warning.issue}</h3>
                    <span className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-full">
                      Severity: {warning.severity}/10
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{warning.explanation}</p>
                  <p className="text-sm text-gray-600"><span className="font-semibold">Suggestion:</span> {warning.suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Negotiation Email Template
            </h2>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copy
                </>
              )}
            </button>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700">
              {analysis.negotiationEmail}
            </pre>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => router.push('/analyze')}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Analyze Another Contract
          </button>
          <button
            onClick={() => window.print()}
            className="flex-1 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition font-semibold"
          >
            Print/Save Results
          </button>
        </div>
      </div>
    </div>
  );
}

