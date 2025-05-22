import React from 'react';
import { Anchor, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Anchor className="h-8 w-8 text-white mr-2" />
              <span className="text-white font-bold text-xl">Lakeside Academy</span>
            </div>
            <p className="text-blue-200 mb-6">
              Your gateway to the world of adventure and aquatic skill in the serene backwaters of Kerala.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Quick Links
              <span className="block w-12 h-1 bg-orange-500 mt-2"></span>
            </h3>
            <ul className="space-y-2">
              {['home', 'about', 'courses', 'gallery', 'why-us', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-blue-200 hover:text-white transition-colors capitalize"
                  >
                    {item.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Courses
              <span className="block w-12 h-1 bg-orange-500 mt-2"></span>
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Basic Sailing</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Advanced Sailing</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Kayaking Adventures</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Stand-Up Paddleboarding</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Youth Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Contact Info
              <span className="block w-12 h-1 bg-orange-500 mt-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={22} className="mr-2 mt-1 text-orange-400" />
                <span>Lakeside watersport Pvt Ltd, Edavannapara Road, Calicut, Kerala</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-orange-400" />
                <span>+91 790 711 9952</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-orange-400" />
                <span>info@lakesidewatersportsandsailingacademy.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 mt-8 text-center">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Lakeside Watersports and Sailing Academy. All rights reserved.
          </p>
          <p className="text-blue-300 mt-2 text-sm italic">
            "Catch the Wind. Ride the Wave."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;