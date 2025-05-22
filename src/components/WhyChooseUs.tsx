import React, { useEffect, useRef } from 'react';
import { Award, Shield, Map, Users, Calendar, AlignCenterVertical as Certificate } from 'lucide-react';

const reasons = [
  {
    icon: <Award className="w-10 h-10 text-blue-500" />,
    title: 'Certified & Experienced Instructors',
    description: 'Learn from professionals with international certifications and years of teaching experience.'
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-500" />,
    title: 'Safe, Well-Maintained Equipment',
    description: 'Our fleet of boats and equipment is regularly inspected and maintained to ensure your safety.'
  },
  {
    icon: <Map className="w-10 h-10 text-blue-500" />,
    title: 'Breathtaking Training Location',
    description: 'Practice in the picturesque backwaters of Kerala with ideal conditions for learning.'
  },
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    title: 'Community & Competitive Events',
    description: 'Join our vibrant community and participate in regattas and friendly competitions.'
  },
  {
    icon: <Calendar className="w-10 h-10 text-blue-500" />,
    title: 'Flexible Scheduling',
    description: 'Choose from weekend, weekday, or intensive courses to fit your availability.'
  },
  {
    icon: <Certificate className="w-10 h-10 text-blue-500" />,
    title: 'Internationally Recognized Certification',
    description: 'Earn credentials respected worldwide, opening doors to sailing opportunities globally.'
  }
];

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reason-card');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Decorative wave element */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            There are many reasons to choose Lakeside Watersports and Sailing Academy for your water adventure journey.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="reason-card bg-blue-800/70 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700/90 opacity-0"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-blue-100">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative wave element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
        clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)'
      }}></div>
    </section>
  );
};

export default WhyChooseUs;