import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
  "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200", 
  "https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=1200", 
  "https://images.pexels.com/photos/6405626/pexels-photo-6405626.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200", 
  "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/580613/pexels-photo-580613.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

export const Gallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(GALLERY_IMAGES.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 py-24 md:py-32 overflow-hidden">
      <h3 className="text-center text-brand-gold font-serif italic text-3xl md:text-4xl mb-16">
        Galeria de Fotos
      </h3>
      
      <div className="relative group">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {/* We group images into "Pages" to ensure 2 columns per transition */}
            {Array.from({ length: totalPages }).map((_, pageIdx) => (
              <div key={pageIdx} className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {GALLERY_IMAGES.slice(pageIdx * itemsPerPage, (pageIdx + 1) * itemsPerPage).map((src, imgIdx) => (
                  <div key={imgIdx} className="h-[300px] md:h-[550px] overflow-hidden">
                    <img 
                      src={src} 
                      alt={`Galeria ${pageIdx * itemsPerPage + imgIdx + 1}`} 
                      className="w-full h-full object-cover rounded-sm hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white bg-black/30 hover:bg-black/60 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white bg-black/30 hover:bg-black/60 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Page Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-2 h-2 rounded-full transition-all ${currentPage === idx ? 'bg-brand-gold w-6' : 'bg-neutral-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};