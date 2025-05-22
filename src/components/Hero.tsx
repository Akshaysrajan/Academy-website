import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  useEffect(() => {
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    const cta = document.querySelector('.hero-cta');
    
    if (title) title.classList.add('animate-fade-in');
    if (subtitle) setTimeout(() => subtitle.classList.add('animate-fade-in'), 300);
    if (cta) setTimeout(() => cta.classList.add('animate-fade-in'), 600);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-900/60 to-blue-900/80"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="hero-title text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 transition-opacity duration-1000">
          Lakeside Watersports and Sailing Academy
        </h1>
        <p className="hero-subtitle text-blue-100 text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-0 transition-opacity duration-1000 delay-300">
          Master the waves. Discover the thrill of sailing with Kerala's finest water sports academy.
        </p>
        <button 
          onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
          className="hero-cta bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 opacity-0 transition-opacity duration-1000 delay-600"
        >
          Explore Courses
        </button>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-10 h-10 flex items-center justify-center">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;