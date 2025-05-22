import React, { useState, useEffect, useRef } from 'react';
import { galleryImages } from '../data/gallery';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const galleryItems = document.querySelectorAll('.gallery-item');
          galleryItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('opacity-100');
              item.classList.remove('translate-y-8');
            }, index * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };
  
  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore moments captured during our training sessions, events, and adventures on the water.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>
        
        <div 
          ref={scrollRef}
          className="overflow-x-auto cursor-grab pb-8 select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div 
            ref={galleryRef}
            className="grid grid-flow-col auto-cols-max gap-4 min-w-max"
          >
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                onClick={() => openLightbox(image.src)}
                className="gallery-item cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-500 opacity-0 translate-y-8 w-72 h-72"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery large view" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;