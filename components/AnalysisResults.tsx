'use client';

import { AlertTriangle, CheckCircle, XCircle, Mail, FileText, ArrowLeft } from 'lucide-react';

interface AnalysisResultsProps {
  data: any;
  onReset: () => void;
}

export default function AnalysisResults({ data, onReset }: AnalysisResultsProps) {
  // determine color based on score
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    if (score >= 40) return 'bg-orange-100';
    return 'bg-red-100';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Great Contract';
    if (score >= 60) return 'Acceptable';
    if (score >= 40) return 'Needs Negotiation';
    return 'High Risk - Walk Away';
  };

  return (
    <div className="space-y-8">
      {/* back button */}
      <button
        onClick={onReset}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Analyze Another Contract</span>
      </button>

      {/* score card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contract Analysis Complete
          </h1>
          
          {/* big score display */}
          <div className="flex flex-col items-center space-y-4">
            <div className={`w-40 h-40 rounded-full ${getScoreBgColor(data.score)} flex items-center justify-center`}>
              <div className="text-center">
                <div className={`text-5xl font-bold ${getScoreColor(data.score)}`}>
                  {data.score}
                </div>
                <div className="text-sm text-gray-600 mt-1">out of 100</div>
              </div>
            </div>
            <div className={`text-2xl font-bold ${getScoreColor(data.score)}`}>
              {getScoreLabel(data.score)}
            </div>
          </div>

          {/* quick summary */}
          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{data.redFlags?.length || 0}</div>
              <div className="text-sm text-gray-600 mt-1">Critical Issues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">{data.warnings?.length || 0}</div>
              <div className="text-sm text-gray-600 mt-1">Warnings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{data.goodPoints?.length || 0}</div>
              <div className="text-sm text-gray-600 mt-1">Fair Terms</div>
            </div>
          </div>
        </div>
      </div>

      {/* red flags section */}
      {data.redFlags && data.redFlags.length > 0 && (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 md:p-8">
          <div className="flex items-center space-x-3 mb-6">
            <XCircle className="w-8 h-8 text-red-600" />
            <h2 className="text-2xl font-bold text-red-900">Critical Red Flags</h2>
          </div>
          <div className="space-y-6">
            {data.redFlags.map((flag: any, index: number) => (
              <div key={index} className="bg-white rounded-lg p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg text-gray-900">{flag.title}</h3>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    Severity: {flag.severity}/10
                  </span>
                </div>
                <p className="text-gray-700">{flag.explanation}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">What this means for you:</p>
                  <p className="text-sm text-gray-600">{flag.impact}</p>
                </div>
                {flag.suggestion && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-green-900 mb-2">Better alternative:</p>
                    <p className="text-sm text-green-800">{flag.suggestion}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* warnings section */}
      {data.warnings && data.warnings.length > 0 && (
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 md:p-8">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-yellow-600" />
            <h2 className="text-2xl font-bold text-yellow-900">Warnings</h2>
          </div>
          <div className="space-y-4">
            {data.warnings.map((warning: any, index: number) => (
              <div key={index} className="bg-white rounded-lg p-6 space-y-2">
                <h3 className="font-bold text-gray-900">{warning.title}</h3>
                <p className="text-gray-700">{warning.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* good points section */}
      {data.goodPoints && data.goodPoints.length > 0 && (
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 md:p-8">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-green-900">Fair Terms Found</h2>
          </div>
          <div className="space-y-3">
            {data.goodPoints.map((point: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* negotiation email section */}
      {data.negotiationEmail && (
        <div className="bg-white rounded-xl border-2 border-gray-200 p-6 md:p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Mail className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Negotiation Email Template</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="whitespace-pre-wrap text-gray-700 font-mono text-sm">
              {data.negotiationEmail}
            </div>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(data.negotiationEmail);
              alert('Email copied to clipboard!');
            }}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Copy Email
          </button>
        </div>
      )}

      {/* download report button */}
      <div className="flex justify-center">
        <button
          onClick={() => {
            // in production, generate pdf report
            alert('Report download would happen here');
          }}
          className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold flex items-center space-x-2"
        >
          <FileText className="w-5 h-5" />
          <span>Download Full Report</span>
        </button>
      </div>
    </div>
  );
}
