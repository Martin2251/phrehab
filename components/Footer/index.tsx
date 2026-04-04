import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
          
          {/* Practice Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">PH Sports Rehab</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Expert physiotherapy services provided by Prince Haastrup. 
              Registered with the HCPC and a member of the Chartered Society of Physiotherapy.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Location & Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Mem's Weightlifting Club</li>
              <li>Arch 22 & 25, 22 Bondway</li>
              <li>London SW8 1SQ</li>
              <li className="pt-2">
                <a href="mailto:prince@phsports.rehab" className="text-blue-600 hover:underline font-medium">
                  prince@phsports.rehab
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal & Privacy</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center">
                  Privacy Policy & GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} PH Rehab. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-400">
            <span>HCPC Registered</span>
            <span>CSP Member</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;