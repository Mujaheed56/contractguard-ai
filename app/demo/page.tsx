import Link from 'next/link';
import { ArrowLeft, Download, FileText } from 'lucide-react';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Demo Contracts
          </h1>
          <p className="text-xl text-gray-600">
            Try ContractGuard with these sample contracts
          </p>
        </div>

        {/* sample contracts */}
        <div className="space-y-6">
          {/* unfair contract */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <FileText className="w-12 h-12 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Unfair Freelance Contract
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Example of a contract with multiple red flags and unfair terms
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                      Unlimited Liability
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                      Unfair IP Rights
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                      Net-90 Payment
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/analyze"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Analyze This Contract
              </Link>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Sample
              </button>
            </div>
          </div>

          {/* fair contract */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <FileText className="w-12 h-12 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Fair Freelance Contract
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Example of a well-balanced contract with fair terms
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      Limited Liability
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      Fair IP Terms
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      Net-30 Payment
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/analyze"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Analyze This Contract
              </Link>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Sample
              </button>
            </div>
          </div>

          {/* mixed contract */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <FileText className="w-12 h-12 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Mixed Terms Contract
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Example of a contract with both fair and questionable terms
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      Fair Payment
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                      Broad Non-Compete
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                      No Termination Clause
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/analyze"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Analyze This Contract
              </Link>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Sample
              </button>
            </div>
          </div>
        </div>

        {/* info box */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            📚 For Demo Purposes
          </h3>
          <p className="text-gray-700">
            These are fictional sample contracts created for demonstration. They showcase 
            different types of clauses and terms you might encounter in real freelance agreements. 
            Use them to test the analysis features.
          </p>
        </div>
      </div>
    </div>
  );
}
