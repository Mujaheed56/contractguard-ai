import Link from 'next/link';
import { Upload, Brain, Shield, Mail, ArrowLeft } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How ContractGuard Works
          </h1>
          <p className="text-xl text-gray-600">
            Your contract bodyguard in 4 simple steps
          </p>
        </div>

        {/* steps */}
        <div className="space-y-12">
          {/* step 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Upload Your Contract</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Simply drag and drop your freelance contract PDF or click to browse. 
                We support all standard contract formats. Your document is processed 
                securely and never stored permanently.
              </p>
            </div>
          </div>

          {/* step 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">2. AI Analysis</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our advanced AI scans every clause, comparing against thousands of 
                standard contracts. It identifies red flags, unfair terms, hidden risks, 
                and problematic language that could hurt you later.
              </p>
            </div>
          </div>

          {/* step 3 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Get Your Report</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Receive a detailed fairness score (0-100) and plain English explanations 
                of every issue. No legal jargon - just clear, actionable insights about 
                what each clause means for you and your money.
              </p>
            </div>
          </div>

          {/* step 4 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Negotiate with Confidence</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Get AI-generated negotiation emails and suggested fair alternatives for 
                problematic clauses. Copy, customize, and send to your client. Stand up 
                for your rights without sounding difficult.
              </p>
            </div>
          </div>
        </div>

        {/* cta section */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to protect yourself?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Don't sign away your rights. Get your contract analyzed now.
          </p>
          <Link
            href="/analyze"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Analyze Your Contract
          </Link>
        </div>

        {/* faq section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Is my contract data secure?
              </h3>
              <p className="text-gray-600">
                Yes! Your contract is processed in real-time and never permanently stored. 
                We take your privacy seriously and use enterprise-grade encryption.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How accurate is the AI analysis?
              </h3>
              <p className="text-gray-600">
                Our AI is trained on thousands of freelance contracts and legal documents. 
                While it's highly accurate, we always recommend consulting a lawyer for 
                final advice on complex situations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What types of contracts can I analyze?
              </h3>
              <p className="text-gray-600">
                We specialize in freelance and independent contractor agreements, but our 
                AI can analyze most service contracts, consulting agreements, and work-for-hire documents.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Is this legal advice?
              </h3>
              <p className="text-gray-600">
                No. ContractGuard provides educational information and analysis to help you 
                understand your contracts. For legal advice specific to your situation, 
                please consult a licensed attorney.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
