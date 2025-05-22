import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to start your water adventure? Get in touch with our team.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Get In Touch</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:info@lakesidewatersportsandsailingacademy.com" 
                  className="flex items-start group hover:bg-blue-100 p-4 rounded-lg transition-colors"
                >
                  <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-900">Email</h4>
                    <p className="text-gray-600">info@lakesidewatersportsandsailingacademy.com</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+919876543210" 
                  className="flex items-start group hover:bg-blue-100 p-4 rounded-lg transition-colors"
                >
                  <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-900">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </a>
                
                <a 
                  href="https://maps.app.goo.gl/YduJwQxb8XsPZ4Lu8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start group hover:bg-blue-100 p-4 rounded-lg transition-colors"
                >
                  <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-900">Location</h4>
                    <p className="text-gray-600">

                      Lakeside watersport Pvt Ltd <br  />
                      Oorkadavu, Edavannapara Road, <br />
                      PO Kayalam, Mavoor<br />
                      Calicut - 673661, Kerala
                    </p>
                  </div>
                </a>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-lg text-blue-900 mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 h-[600px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.1507761305225!2d75.9235218116703!3d11.246235801266721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6452507dbf223%3A0xb696a29f0f1f018!2sLakeside%20Watersports%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1747898651643!5m2!1sen!2sin"s
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;