import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from './Navbar';

const CAROUSEL_IMAGES = [
  "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=2400", // Wedding Hall
  "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=2400", // Couple/Toast
  "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=2400", // Table Setting
  "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=2400", // Party/Lights
  "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=2400"  // Outdoor/Details
];

interface HeroProps {
    onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset timer whenever the slide changes (manually or auto)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  // Helper to determine the class for each slide based on its position relative to current
  const getSlideClass = (index: number) => {
    const isCurrent = index === currentImageIndex;
    // Calculate the index of the image that just passed (to animate it out to the left)
    const prevIndex = currentImageIndex === 0 ? CAROUSEL_IMAGES.length - 1 : currentImageIndex - 1;
    const isPrev = index === prevIndex;

    const baseClass = "absolute inset-0 w-full h-full object-cover object-center will-change-transform";

    if (isCurrent) {
      // Active slide: In center, z-index higher to stay on top if needed, smooth entry
      return `${baseClass} z-20 translate-x-0 transition-transform duration-1000 ease-in-out`;
    } else if (isPrev) {
      // Previous slide: Move to left (exit), smooth exit
      return `${baseClass} z-10 -translate-x-full transition-transform duration-1000 ease-in-out`;
    } else {
      // All other slides: Wait on the right side, no transition (teleport) so they are ready to enter
      return `${baseClass} z-0 translate-x-full`;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-brand-dark">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {CAROUSEL_IMAGES.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt={`Slide ${index + 1}`} 
            className={getSlideClass(index)}
          />
        ))}
        
        {/* Dark Gradient Overlay for Header Readability - Stays static above images */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent h-[40vh] z-30 pointer-events-none" />
        
        {/* Subtle full overlay to harmonize tone */}
        <div className="absolute inset-0 bg-black/10 z-30 pointer-events-none" />
      </div>

      <Navbar onNavigate={onNavigate} />

      {/* Main Content Area */}
      <div className="relative z-40 h-full flex flex-col justify-center items-center text-white pointer-events-none">
         {/* Center content is sparse to show off images */}
      </div>

      {/* Carousel Controls */}
      <div className="absolute top-1/2 left-1 md:left-2 z-50 transform -translate-y-1/2">
        <button 
          onClick={prevSlide} 
          className="bg-transparent p-2 focus:outline-none hover:scale-110 transition-transform"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-8 h-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
        </button>
      </div>

      <div className="absolute top-1/2 right-1 md:right-2 z-50 transform -translate-y-1/2">
        <button 
          onClick={nextSlide} 
          className="bg-transparent p-2 focus:outline-none hover:scale-110 transition-transform"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-8 h-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
        </button>
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

export default Hero;