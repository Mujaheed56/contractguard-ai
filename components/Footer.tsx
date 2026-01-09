import { Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-bold text-white">ContractGuard AI</span>
          </div>
          <p className="text-gray-400 text-center max-w-md">
            Protecting freelancers from unfair contracts with AI-powered analysis. 
            Don't sign away your rights.
          </p>
          <p className="text-gray-500 text-sm">
            © {currentYear} ContractGuard AI. Built for Nexora Hacks 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
