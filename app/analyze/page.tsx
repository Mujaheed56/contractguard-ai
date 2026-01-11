'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, FileText, Shield, AlertCircle, CheckCircle, Zap } from 'lucide-react';

export default function AnalyzePage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    setError('');

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      // only accept pdf or txt files
      if (droppedFile.type === 'application/pdf' || droppedFile.type === 'text/plain') {
        setFile(droppedFile);
      } else {
        setError('please upload a pdf or text file');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('failed to analyze contract');
      }

      const data = await response.json();
      
      // store results in session storage
      sessionStorage.setItem('contractAnalysis', JSON.stringify(data));
      
      // navigate to results page
      router.push('/results');
    } catch (err) {
      setError('something went wrong. please try again.');
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // load sample contract
  const loadSample = () => {
    // create a sample text file
    const sampleText = `FREELANCE CONTRACT AGREEMENT

This Agreement is entered into as of [Date] between [Client Name] ("Client") and [Contractor Name] ("Contractor").

1. SCOPE OF WORK
Contractor agrees to develop a mobile application according to specifications provided by Client.

2. COMPENSATION
Client agrees to pay Contractor $5,000 for the project, payable Net-90 after invoice submission.

3. INTELLECTUAL PROPERTY
All work product created by Contractor during the term of this agreement, including but not limited to code, designs, documentation, and any derivative works, shall be the exclusive property of Client. This includes all personal projects and side work created during the contract period.

4. TERMINATION
Client may terminate this agreement at any time without cause and without obligation to pay for work in progress. Contractor must provide 30 days written notice to terminate.

5. LIABILITY
Contractor agrees to indemnify and hold harmless Client from any and all claims, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or resulting from Contractor's performance under this Agreement, without limitation.

6. NON-COMPETE
Contractor agrees not to work for any competitor of Client for a period of 24 months following the termination of this Agreement.

7. PAYMENT TERMS
All invoices are subject to Client approval. Client reserves the right to withhold payment for unsatisfactory work at Client's sole discretion.

8. WARRANTIES
Contractor warrants that all work will be error-free and will function perfectly in all circumstances.

9. CONFIDENTIALITY
Contractor shall not disclose any information related to this project to any third party.

10. ENTIRE AGREEMENT
This Agreement constitutes the entire agreement between the parties.`;

    const blob = new Blob([sampleText], { type: 'text/plain' });
    const file = new File([blob], 'sample-predatory-contract.txt', { type: 'text/plain' });
    setFile(file);
  };

  // load fair sample contract
  const loadFairSample = () => {
    const fairContractText = `FAIR FREELANCE DEVELOPMENT AGREEMENT

This Agreement is entered into as of January 9, 2026, between TechStartup Inc. ("Client") and Alex Johnson ("Contractor").

1. SCOPE OF WORK
Contractor agrees to develop a mobile application for iOS and Android platforms according to specifications outlined in Exhibit A. The project includes:
- User authentication system
- Payment integration
- Admin dashboard
- Push notifications
Any work outside this scope requires a separate written agreement and additional compensation.

2. COMPENSATION AND PAYMENT TERMS
Client agrees to pay Contractor a total of $15,000 for the completed project, structured as follows:
- $5,000 upon signing (milestone 1)
- $5,000 upon completion of authentication and payment systems (milestone 2)
- $5,000 upon final delivery and acceptance (milestone 3)

Payment is due within 15 business days of invoice submission. Late payments will incur interest at 1.5% per month. If payment is more than 30 days overdue, Contractor may suspend work until payment is received.

3. INTELLECTUAL PROPERTY RIGHTS
Client shall own all intellectual property rights to the work product specifically created for this project during billable hours, upon receipt of full payment.

Contractor retains ownership of:
- Pre-existing code, libraries, and tools brought into the project
- Personal projects and work created outside billable hours
- General skills and knowledge gained during the project

Contractor grants Client a perpetual license to use any pre-existing materials incorporated into the deliverables.

4. REVISIONS AND CHANGES
The contract includes up to two rounds of revisions per milestone. Additional revisions beyond this scope will be billed at $100 per hour.

Major scope changes require a written change order and may result in adjusted timeline and compensation.

5. TIMELINE
Estimated project completion: 8 weeks from start date. Timeline may be extended due to:
- Client delays in providing feedback or materials
- Scope changes
- Force majeure events

6. TERMINATION
Either party may terminate this agreement with 14 days written notice. Upon termination:
- Client must pay for all completed milestones
- Client must pay for work-in-progress at the hourly rate of $100/hour
- Contractor will deliver all completed work
- Both parties return any confidential materials

7. LIABILITY AND INDEMNIFICATION
Contractor's liability is limited to the total amount paid under this agreement. Contractor is not liable for:
- Issues arising from Client-provided specifications or materials
- Third-party service failures (hosting, APIs, etc.)
- Damages exceeding the contract value

Client indemnifies Contractor against claims arising from Client's use of the deliverables.

8. WARRANTIES
Contractor warrants that:
- Work will be performed in a professional manner
- Deliverables will substantially conform to specifications
- Work does not infringe on third-party intellectual property rights

Contractor will fix bugs in the delivered code for 30 days after final delivery at no charge. After 30 days, bug fixes are billed at standard hourly rates.

9. CONFIDENTIALITY
Both parties agree not to disclose confidential information shared during this project. Confidential information does not include:
- Information already public
- Information independently developed
- Information required to be disclosed by law

Contractor may include this project in their portfolio with Client's prior written consent.

10. INDEPENDENT CONTRACTOR STATUS
Contractor is an independent contractor, not an employee. Contractor is responsible for their own taxes, insurance, and benefits.

11. NON-COMPETE
During the project term only, Contractor agrees not to work on directly competing products (defined as mobile apps in the same market category with substantially similar core features). This restriction expires immediately upon project completion.

12. DISPUTE RESOLUTION
Any disputes will first be addressed through good-faith negotiation. If unresolved, disputes will be settled through binding arbitration in accordance with the rules of the American Arbitration Association.

13. ENTIRE AGREEMENT
This agreement constitutes the entire agreement between the parties and supersedes all prior negotiations and agreements. Modifications must be in writing and signed by both parties.

14. GOVERNING LAW
This agreement is governed by the laws of the State of California.`;

    const blob = new Blob([fairContractText], { type: 'text/plain' });
    const file = new File([blob], 'sample-fair-contract.txt', { type: 'text/plain' });
    setFile(file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push('/')}>
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ContractGuard AI</span>
            </div>
            <p className="text-sm text-gray-600 hidden sm:block">Protect your freelance career</p>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Analyze Your Contract
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Upload your freelance contract and get instant AI-powered analysis.<br />
            We'll find hidden traps and protect your rights.
          </p>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-8">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div className="ml-3">
              <p className="text-sm text-yellow-800">
                <span className="font-semibold">Privacy First:</span> Your contract is analyzed in real-time and never stored on our servers.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
              isDragging
                ? 'border-blue-500 bg-blue-50'
                : file
                ? 'border-green-500 bg-green-50'
                : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".pdf,.txt"
              onChange={handleFileChange}
            />
            
            {!file ? (
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  Drop your contract here or click to browse
                </p>
                <p className="text-sm text-gray-500">PDF or TXT files supported</p>
              </label>
            ) : (
              <div>
                <FileText className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-900 mb-2">{file.name}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
                <button
                  onClick={() => setFile(null)}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Remove file
                </button>
              </div>
            )}
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAnalyze}
              disabled={!file || isAnalyzing}
              className="flex-1 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all text-lg font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  <span>Analyze Contract</span>
                </>
              )}
            </button>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={loadSample}
              disabled={isAnalyzing}
              className="flex-1 px-6 py-3 bg-red-50 text-red-700 border border-red-200 rounded-xl hover:bg-red-100 disabled:opacity-50 transition-all font-semibold"
            >
              Try Predatory Contract
            </button>
            <button
              onClick={loadFairSample}
              disabled={isAnalyzing}
              className="flex-1 px-6 py-3 bg-green-50 text-green-700 border border-green-200 rounded-xl hover:bg-green-100 disabled:opacity-50 transition-all font-semibold"
            >
              Try Fair Contract
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Upload</h3>
              <p className="text-sm text-gray-600">
                Drag and drop your contract PDF or text file
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Analyze</h3>
              <p className="text-sm text-gray-600">
                AI scans for red flags, unfair clauses, and hidden traps
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Protect</h3>
              <p className="text-sm text-gray-600">
                Get negotiation emails and fair alternatives
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

