"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },    // Anchors to ID on home page
  { name: 'Services', href: '/services' }, // Separate page
  { name: 'Find Us', href: '/#findus' },   // Anchors to ID on home page
  { name: 'Book Now', href: '/#booking' }, // Anchors to ID on home page
];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/weighted-squat-exercise.jpg"
          alt="Physiotherapy hands treatment"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Header / Logo Area */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white">PH REHAB</h1>
            <p className="text-sm text-orange-500 font-medium">MSK Physio Health Specialist</p>
          </div>

          {/* Hamburger Button */}
          <button 
            onClick={toggleMenu}
            className="group z-50 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col justify-between w-8 h-6 transform transition-all duration-300">
              {/* Top Line */}
              <span className={`bg-white h-[3px] w-full rounded-full transition-all duration-300 origin-left ${isOpen ? 'rotate-[42deg] bg-orange-500' : ''}`}></span>
              {/* Middle Line */}
              <span className={`bg-white h-[3px] w-full rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              {/* Bottom Line */}
              <span className={`bg-white h-[3px] w-full rounded-full transition-all duration-300 origin-left ${isOpen ? '-rotate-[42deg] bg-orange-500' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
   <nav className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
    isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
  }`}>
    
    <ul className="text-center space-y-4">
      {navLinks.map((item, index) => (
        <li 
          key={item.name}
          className="overflow-hidden py-2"
        >
          <Link 
            href={item.href} 
            onClick={() => setIsOpen(false)} // Closes menu to show the scroll/navigation
            className={`block text-5xl md:text-8xl font-black text-white hover:text-orange-500 transition-all duration-700 transform ${
              isOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ transitionDelay: `${index * 75}ms` }}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>


</nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          PH Rehab
        </h2>
        <p className="text-2xl md:text-3xl text-white mb-12 font-light tracking-wide">
          Restoring Strength and Reducing Pain
        </p>
      </div>
    </section>
  );
}