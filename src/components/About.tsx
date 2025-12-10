import React, { useEffect, useRef, useState } from 'react';
import { Users, Award, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, label: 'Active Members', value: '150+' },
    { icon: Award, label: 'Projects Completed', value: '75+' },
    { icon: Lightbulb, label: 'Ideas Generated', value: '500+' },
    { icon: Globe, label: 'Global Reach', value: '25+' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Innovation Cell</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a dynamic community of innovators, entrepreneurs, and creative thinkers dedicated to fostering breakthrough ideas and transforming them into reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To create an ecosystem where students can explore their creative potential, develop innovative solutions to real-world problems, and gain the skills necessary to become tomorrow's leaders in technology and entrepreneurship.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                  <p className="text-gray-600">Foster creativity and innovation among students</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-gray-600">Provide mentorship and guidance for project development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3"></div>
                  <p className="text-gray-600">Bridge the gap between academia and industry</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-4">Innovation Hub</h4>
                <p className="text-purple-100">
                  Our state-of-the-art facility equipped with cutting-edge technology, collaborative spaces, and resources to bring your ideas to life.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;