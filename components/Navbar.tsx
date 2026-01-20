import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { LogoIcon, FlagUS, FlagBR, FlagES } from './Icons';

interface NavbarProps {
  onNavigate?: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const threshold = heroHeight - 100;

      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleLinkClick = (e: React.MouseEvent, label: string) => {
    if (onNavigate) {
      if (label === 'Contemporâneo') {
        e.preventDefault();
        onNavigate('venue-8076');
        setActiveDropdown(null);
        window.scrollTo(0, 0);
      } else if (label === 'Fazenda Boa Esperança') {
        e.preventDefault();
        onNavigate('venue-fazenda');
        setActiveDropdown(null);
        window.scrollTo(0, 0);
      } else if (label === 'Vila Capão') {
        e.preventDefault();
        onNavigate('venue-vilacapao');
        setActiveDropdown(null);
        window.scrollTo(0, 0);
      } else if (label === 'Villa Relicário') {
        e.preventDefault();
        onNavigate('venue-relicario');
        setActiveDropdown(null);
        window.scrollTo(0, 0);
      } else if (label.toLowerCase() === 'home') {
        e.preventDefault();
        onNavigate('home');
        window.scrollTo(0, 0);
      }
    }
  };

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
      window.scrollTo(0, 0);
    }
  };

  const currentDropdownLinks = NAV_LINKS.find(link => link.label === activeDropdown)?.dropdownLinks || [];

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-[100] flex flex-col w-full text-white transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-brand-green shadow-xl' 
          : 'bg-gradient-to-b from-brand-green/90 via-brand-green/40 to-transparent'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      
      <div className="absolute top-4 right-8 flex items-center space-x-3 opacity-90 z-10">
        <button className="hover:opacity-100 hover:scale-105 transition-transform"><FlagUS /></button>
        <button className="hover:opacity-100 hover:scale-105 transition-transform"><FlagBR /></button>
        <button className="hover:opacity-100 hover:scale-105 transition-transform"><FlagES /></button>
      </div>

      <div className={`w-full flex flex-col items-center justify-center transition-all duration-500 backdrop-blur-[2px] ${isScrolled ? 'bg-black/10 pt-2 pb-2' : 'pt-6 pb-4'}`}>
        <button 
          onClick={handleLogoClick}
          className={`flex items-center space-x-4 transition-all duration-500 hover:opacity-80 ${isScrolled ? 'mb-2 scale-75' : 'mb-6 scale-100'}`}
        >
          <LogoIcon className="w-14 h-14 text-brand-gold" />
          <div className="flex flex-col items-start leading-none justify-center">
            <span className="text-xs tracking-[0.3em] font-light text-white mb-1 ml-[1px]">GRUPO</span>
            <span className="text-3xl tracking-[0.1em] font-serif text-brand-gold">LOBATO</span>
          </div>
        </button>
      </div>

      <div className={`w-full border-t border-white/20 border-b border-white/10 backdrop-blur-[2px] transition-all duration-500 ${isScrolled ? 'bg-black/10' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          
          <button className="lg:hidden text-white">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>

          <nav className="hidden lg:flex flex-1 justify-center items-center space-x-8 h-full">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.label}
                className="h-full flex items-center relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
              >
                <a 
                  href={link.href} 
                  onClick={(e) => handleLinkClick(e, link.label)}
                  className={`group/navitem flex items-center text-xs xl:text-sm font-medium tracking-wide transition-colors lowercase px-2 ${activeDropdown === link.label ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}
                >
                  <span className="uppercase">{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown 
                      className={`ml-1 w-3 h-3 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180 text-brand-gold' : 'group-hover/navitem:rotate-180 group-hover/navitem:text-brand-gold'}`}
                      strokeWidth={3}
                    />
                  )}
                </a>
              </div>
            ))}
          </nav>

          <div className="hidden lg:block ml-8">
            <button className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white bg-transparent text-xs font-semibold px-6 py-2 rounded-sm uppercase tracking-wider transition-all duration-300 shadow-lg">
              orçamento
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`absolute top-full left-0 w-full bg-[#0f3b2e] shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          activeDropdown && currentDropdownLinks.length > 0 ? 'max-h-[500px] opacity-100 py-12' : 'max-h-0 opacity-0 py-0'
        }`}
        onMouseEnter={() => setActiveDropdown(activeDropdown)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="grid grid-cols-4 gap-x-8 gap-y-4">
             {currentDropdownLinks.map((subLink, idx) => (
               <a 
                 key={idx} 
                 href={subLink.href} 
                 onClick={(e) => handleLinkClick(e, subLink.label)}
                 className="text-white text-[11px] font-medium tracking-widest uppercase hover:text-white/70 transition-colors block"
               >
                 {subLink.label}
               </a>
             ))}
           </div>
        </div>
      </div>

    </div>
  );
};