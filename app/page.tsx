import Link from 'next/link';
import { Shield, FileCheck, AlertTriangle, Mail, Brain, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ContractGuard AI</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                href="/how-it-works"
                className="hidden md:inline-block text-gray-700 hover:text-blue-600 transition-colors"
              >
                How It Works
              </Link>
              <Link 
                href="/about"
                className="hidden md:inline-block text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link 
                href="/analyze" 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium"
              >
                Try Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
              🚨 Don't Sign Your Rights Away
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Your Freelance Contract<br />
              <span className="text-blue-600">Bodyguard</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Upload any contract. Get instant AI analysis. Find hidden traps before they cost you thousands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link 
                href="/analyze"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                Analyze Contract Free
              </Link>
              <Link 
                href="#story"
                className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-all text-lg font-semibold"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="story" className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  This Could Be You
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    <strong>Meet Muhammad</strong>, a talented Nigerian developer. Last year, he signed a $3,000 contract with a US startup. He was excited. His first international client.
                  </p>
                  <p>
                    Hidden in <strong>paragraph 12, clause 7.2</strong>:
                  </p>
                  <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-600 my-6">
                    "All intellectual property created during contract term and within 24 months after, including personal projects, becomes exclusive property of Client."
                  </blockquote>
                  <p>
                    Six months later, Emeka built a side project on weekends. It went viral. The client claimed ownership. Emeka lost everything.
                  </p>
                  <p className="text-xl font-semibold text-red-600">
                    He didn't know. He couldn't afford a $500/hour lawyer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Protect Yourself in 30 Seconds
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Red Flag Detection</h3>
              <p className="text-gray-600">
                AI scans for hidden traps: unlimited liability, unfair IP clauses, payment risks
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plain English</h3>
              <p className="text-gray-600">
                No legal jargon. We explain what each clause actually means for you
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fairness Score</h3>
              <p className="text-gray-600">
                Get instant 0-100 rating compared to thousands of standard contracts
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Auto Negotiation</h3>
              <p className="text-gray-600">
                AI writes professional emails to negotiate better terms with your client
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">75%</div>
              <div className="text-blue-100">of freelancers sign contracts they don't fully understand</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$500+</div>
              <div className="text-blue-100">average cost for lawyer contract review</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30 sec</div>
              <div className="text-blue-100">to get complete AI analysis with ContractGuard</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Don't Be The Next Muhammad
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Protect your work. Protect your rights. Protect your future.
          </p>
          <Link 
            href="/analyze"
            className="inline-block px-12 py-5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-xl font-semibold shadow-xl hover:shadow-2xl"
          >
            Analyze Your Contract Now
          </Link>
          <p className="text-sm text-gray-500 mt-4">Free • No credit card • 30 seconds</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

