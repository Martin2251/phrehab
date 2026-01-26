import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        {/* Heading & Intro */}
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 text-lg text-gray-600 italic">
          "I aim to get back in touch as soon as I can."
        </p>

        {/* Contact Links */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          
          {/* Email */}
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Email
            </span>
            <a 
              href="mailto:prince@phsports.rehab" 
              className="text-xl font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              prince@phsports.rehab
            </a>
          </div>

          {/* Divider for desktop */}
          <div className="hidden sm:block h-12 w-px bg-gray-200"></div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Phone
            </span>
            <a 
              href="tel:07846246843" 
              className="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              07846 246 843
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;