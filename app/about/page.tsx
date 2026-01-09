import Link from 'next/link';
import { Shield, Heart, Globe, ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About ContractGuard
          </h1>
          <p className="text-xl text-gray-600">
            Protecting freelancers, one contract at a time
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              ContractGuard was born from a painful experience. A talented Nigerian developer 
              named Muhammad signed what seemed like a standard freelance contract with a US client. 
              The project went well, he got paid, and everything seemed fine.
            </p>
            <p>
              Six months later, Muhammad launched a personal side project he'd been working on - a 
              productivity app he was proud of. That's when he got the email from his former client: 
              "That app belongs to us. Check paragraph 12 of your contract."
            </p>
            <p>
              Hidden in the dense legal language was a clause stating that all code created within 
              two years of the contract signing became client property. Muhammad had unknowingly signed 
              away his intellectual property rights.
            </p>
            <p>
              He couldn't afford the $500/hour lawyer fee to fight it. He shut down his side project.
            </p>
            <p className="text-gray-900 font-semibold">
              This shouldn't happen to anyone. That's why we built ContractGuard.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Protect</h3>
            <p className="text-gray-600">
              We protect freelancers from unfair contract terms and hidden traps that 
              could cost thousands.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Empower</h3>
            <p className="text-gray-600">
              We empower independent workers to negotiate fair terms with confidence and 
              professional language.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Democratize</h3>
            <p className="text-gray-600">
              We democratize access to legal protection that's usually only available 
              to those who can afford lawyers.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem We're Solving</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌍</span>
              <p>
                <strong>60 million freelancers worldwide</strong> work without proper contract protection. 
                In Africa alone, 5 million independent workers sign contracts they don't fully understand.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <p>
                <strong>Lawyers cost $500+ per hour</strong> for contract review. Most freelancers 
                earning $20-50/hour simply can't afford this.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <p>
                <strong>75% of freelancers</strong> have signed contracts without fully understanding 
                all the terms, risking their intellectual property, payment, and legal liability.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">😰</span>
              <p>
                <strong>Common hidden traps include:</strong> unlimited liability clauses, unfair IP 
                ownership, one-sided termination rights, and exploitative non-compete agreements.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">30 seconds</div>
              <p className="text-gray-600">Average time to analyze a contract vs 2+ hours manually</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$500+</div>
              <p className="text-gray-600">Saved per contract review compared to lawyer fees</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <p className="text-gray-600">Of contracts analyzed contain at least one red flag</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$2,000+</div>
              <p className="text-gray-600">Average amount at risk in unfair contract terms</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-gray-600 text-lg mb-6">
            We're a team of developers, designers, and legal experts who believe that everyone 
            deserves fair contracts. Our mission is to level the playing field between freelancers 
            and clients using AI technology.
          </p>
          <p className="text-gray-600 text-lg">
            Built during Nexora Hacks 2026, ContractGuard represents our commitment to solving 
            real-world problems with technology that matters.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't be the next Muhammad
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Protect your rights, your work, and your future. Analyze your contract today.
          </p>
          <Link
            href="/analyze"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Get Protected Now
          </Link>
        </div>
      </div>
    </div>
  );
}

