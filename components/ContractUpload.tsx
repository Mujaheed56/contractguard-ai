'use client';

import { useState, useCallback } from 'react';
import { Upload, FileText, Loader2 } from 'lucide-react';

interface ContractUploadProps {
  onAnalysisComplete: (data: any) => void;
  isAnalyzing: boolean;
  setIsAnalyzing: (val: boolean) => void;
}

export default function ContractUpload({ onAnalysisComplete, isAnalyzing, setIsAnalyzing }: ContractUploadProps) {
  const [contractText, setContractText] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [uploadMethod, setUploadMethod] = useState<'file' | 'text'>('file');

  // handle file drop
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type === 'application/pdf') {
      handleFileUpload(file);
    }
  }, []);

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  // handle file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  // process the uploaded file
  const handleFileUpload = async (file: File) => {
    // for now, just simulate pdf text extraction
    // in production, you'd use pdf-parse or similar
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = `Sample contract text from ${file.name}. This is a simulated extraction for demo purposes.`;
      setContractText(text);
      await analyzeContract(text);
    };
    reader.readAsText(file);
  };

  // analyze the contract
  const analyzeContract = async (text: string) => {
    setIsAnalyzing(true);
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contractText: text }),
      });

      const data = await response.json();
      onAnalysisComplete(data);
    } catch (error) {
      console.error('analysis failed:', error);
      // show error to user
      alert('Analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleTextAnalysis = () => {
    if (contractText.trim()) {
      analyzeContract(contractText);
    }
  };

  return (
    <div className="space-y-6">
      {/* upload method toggle */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setUploadMethod('file')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            uploadMethod === 'file'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Upload PDF
        </button>
        <button
          onClick={() => setUploadMethod('text')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            uploadMethod === 'text'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Paste Text
        </button>
      </div>

      {uploadMethod === 'file' ? (
        // file upload area
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
            dragActive
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 bg-white hover:border-gray-400'
          }`}
        >
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
            disabled={isAnalyzing}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center space-y-4"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
                <p className="text-lg font-medium text-gray-900">Analyzing your contract...</p>
                <p className="text-sm text-gray-500">This may take 20-30 seconds</p>
              </>
            ) : (
              <>
                <Upload className="w-16 h-16 text-gray-400" />
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    Drop your contract PDF here
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    or click to browse files
                  </p>
                </div>
                <p className="text-xs text-gray-400">PDF files only • Max 10MB</p>
              </>
            )}
          </label>
        </div>
      ) : (
        // text paste area
        <div className="bg-white rounded-xl border-2 border-gray-300 p-6 space-y-4">
          <div className="flex items-center space-x-2 text-gray-700 mb-2">
            <FileText className="w-5 h-5" />
            <label className="font-medium">Paste your contract text</label>
          </div>
          <textarea
            value={contractText}
            onChange={(e) => setContractText(e.target.value)}
            placeholder="Paste the full contract text here..."
            className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            disabled={isAnalyzing}
          />
          <button
            onClick={handleTextAnalysis}
            disabled={!contractText.trim() || isAnalyzing}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <Shield className="w-5 h-5" />
                <span>Analyze Contract</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
