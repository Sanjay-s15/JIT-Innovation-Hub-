import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Briefcase, Users, BookOpen } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

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

  const services = [
    {
      icon: Code,
      title: 'Project Development',
      slug: 'project-development',
      description: 'From concept to deployment, we help students build innovative projects with mentorship and technical support.',
      features: ['Technical Mentorship', 'Resource Access', 'Code Reviews', 'Project Showcase'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Briefcase,
      title: 'Startup Incubation',
      slug: 'startup-incubation',
      description: 'Turn your innovative ideas into viable businesses with our comprehensive incubation program.',
      features: ['Business Planning', 'Funding Guidance', 'Market Research', 'Investor Connect'],
      color: 'from-blue-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Community Building',
      slug: 'community-building',
      description: 'Connect with like-minded innovators, form teams, and collaborate on groundbreaking projects.',
      features: ['Networking Events', 'Team Formation', 'Collaboration Tools', 'Peer Learning'],
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Learning Programs',
      slug: 'learning-programs',
      description: 'Enhance your skills with workshops, seminars, and training programs led by industry experts.',
      features: ['Technical Workshops', 'Industry Seminars', 'Skill Development', 'Certification'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to help you transform your innovative ideas into impactful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  <span onClick={() => navigate(`/services/${service.slug}`)}>Learn More</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;