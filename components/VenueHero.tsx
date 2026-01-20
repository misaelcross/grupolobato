import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Navbar } from './Navbar';

interface VenueHeroProps {
  onNavigate?: (page: string) => void;
}

export const VenueHero: React.FC<VenueHeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-brand-dark">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=2400" 
          alt="Bisutti Contemporâneo 8076" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Dark Gradient Overlay for Header Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent h-[40vh] z-30 pointer-events-none" />
        
        {/* Subtle full overlay */}
        <div className="absolute inset-0 bg-black/10 z-30 pointer-events-none" />
      </div>

      <Navbar onNavigate={onNavigate} />

      {/* Main Content Area - Intentionally Empty for aesthetic view */}
      <div className="relative z-40 h-full flex flex-col justify-center items-center text-white pointer-events-none">
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50">
        <button 
          className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};