import React from 'react';

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Grupo Lobato Geometric Logo: A square composition */}
    {/* Left vertical bar */}
    <rect x="5" y="5" width="15" height="90" />
    
    {/* Top Right large square */}
    <rect x="25" y="5" width="70" height="70" />
    
    {/* Bottom Right horizontal bar */}
    <rect x="25" y="80" width="70" height="15" />
  </svg>
);

export const FlagUS: React.FC = () => (
  <svg className="w-6 h-4" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" fill="#B22234"/>
    <path d="M0,2H24M0,4H24M0,6H24M0,8H24M0,10H24M0,12H24M0,14H24" stroke="white" strokeWidth="1.5"/>
    <rect width="10" height="8" fill="#3C3B6E"/>
  </svg>
);

export const FlagBR: React.FC = () => (
  <svg className="w-6 h-4" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" fill="#009c3b"/>
    <path d="M2,8 L12,2 L22,8 L12,14 Z" fill="#ffdf00"/>
    <circle cx="12" cy="8" r="3.5" fill="#002776"/>
  </svg>
);

export const FlagES: React.FC = () => (
  <svg className="w-6 h-4" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" fill="#AA151B"/>
    <rect y="4" width="24" height="8" fill="#F1BF00"/>
  </svg>
);