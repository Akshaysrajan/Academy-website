import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 animate-on-scroll opacity-0 transition-opacity duration-1000">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Instructor teaching sailing" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-5 -right-5 bg-blue-500 p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-white font-bold text-xl">10+ Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 relative">
              About Us
              <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Welcome to Lakeside Watersports and Sailing Academy, your gateway to the world of adventure and aquatic skill. Nestled by the serene backwaters of Kerala, our academy offers professional training in sailing, kayaking, canoeing, and more — led by certified instructors with a passion for the water.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Whether you're a beginner or a seasoned enthusiast, our safe, scenic environment is the perfect place to learn, compete, and grow. With state-of-the-art equipment and individualized attention, we ensure each student develops confidence and competence on the water.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 p-3 rounded-lg flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <p className="font-medium text-blue-800">Certified Instructors</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <p className="font-medium text-blue-800">Modern Equipment</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <p className="font-medium text-blue-800">Scenic Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;