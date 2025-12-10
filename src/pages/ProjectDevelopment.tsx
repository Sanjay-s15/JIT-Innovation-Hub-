import React, { useEffect, useState } from 'react';
import { ArrowLeft, Code, Users, Lightbulb, CheckCircle, Clock, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Technical Mentorship',
      description: 'Get guidance from experienced developers and industry professionals'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work with diverse teams and learn collaborative development practices'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Support',
      description: 'Transform your creative ideas into functional prototypes and products'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Idea Submission',
      description: 'Submit your project idea through our online portal with detailed requirements'
    },
    {
      step: '02',
      title: 'Review & Selection',
      description: 'Our expert panel reviews submissions and selects promising projects'
    },
    {
      step: '03',
      title: 'Team Formation',
      description: 'Get matched with complementary team members based on skills and interests'
    },
    {
      step: '04',
      title: 'Development Phase',
      description: 'Build your project with continuous mentorship and resource support'
    },
    {
      step: '05',
      title: 'Testing & Refinement',
      description: 'Test, iterate, and refine your solution based on feedback'
    },
    {
      step: '06',
      title: 'Launch & Showcase',
      description: 'Present your completed project to the community and potential investors'
    }
  ];

  const benefits = [
    'Access to cutting-edge development tools and software',
    'Weekly mentorship sessions with industry experts',
    'Networking opportunities with tech professionals',
    'Project funding support up to $5,000',
    'Intellectual property guidance and protection',
    'Opportunity to present at tech conferences'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-purple-300 hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Project <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Development</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your innovative ideas into reality with our comprehensive project development program. 
                Get the mentorship, resources, and support you need to build impactful solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Program?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our project development program offers comprehensive support to help you succeed
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures your project's success from conception to launch
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Program Benefits</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join our project development program and unlock access to exclusive resources and opportunities
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Start?</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5" />
                  <span>Applications open year-round</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5" />
                  <span>3-6 month project timeline</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5" />
                  <span>Teams of 2-5 members</span>
                </div>
              </div>
              <button className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Apply Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDevelopment;