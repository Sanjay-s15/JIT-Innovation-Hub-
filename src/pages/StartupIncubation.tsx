import React, { useEffect, useState } from 'react';
import { ArrowLeft, Briefcase, TrendingUp, DollarSign, Users, Award, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StartupIncubation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Briefcase,
      title: 'Business Planning',
      description: 'Develop comprehensive business plans with market analysis and financial projections'
    },
    {
      icon: TrendingUp,
      title: 'Market Research',
      description: 'Conduct thorough market research to validate your business idea and identify opportunities'
    },
    {
      icon: DollarSign,
      title: 'Funding Support',
      description: 'Get assistance with funding applications, investor pitches, and grant opportunities'
    }
  ];

  const incubationStages = [
    {
      stage: 'Pre-Incubation',
      duration: '2-3 months',
      description: 'Idea validation, market research, and team formation',
      activities: ['Business model canvas', 'Market validation', 'Team building', 'Prototype development']
    },
    {
      stage: 'Incubation',
      duration: '6-12 months',
      description: 'Product development, business planning, and market entry preparation',
      activities: ['Product development', 'Business plan creation', 'Legal setup', 'Initial funding']
    },
    {
      stage: 'Acceleration',
      duration: '3-6 months',
      description: 'Scaling operations, advanced funding, and market expansion',
      activities: ['Scale operations', 'Series A funding', 'Market expansion', 'Strategic partnerships']
    }
  ];

  const successStories = [
    {
      company: 'TechFlow Solutions',
      founder: 'Sarah Johnson',
      description: 'AI-powered workflow automation platform',
      funding: '$2.5M Series A',
      employees: '25+'
    },
    {
      company: 'EcoGreen Energy',
      founder: 'Michael Chen',
      description: 'Sustainable energy management system',
      funding: '$1.8M Seed',
      employees: '15+'
    },
    {
      company: 'HealthTrack Pro',
      founder: 'Emily Rodriguez',
      description: 'Digital health monitoring platform',
      funding: '$3.2M Series A',
      employees: '30+'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-teal-900 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-teal-300 hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Startup <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Incubation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your innovative ideas into successful businesses with our comprehensive startup incubation program. 
                Get the mentorship, funding, and resources you need to launch and scale your startup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Apply for Incubation
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  Schedule Consultation
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our incubation program provides end-to-end support for your startup journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Stages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Incubation Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured program guides you through every stage of startup development
            </p>
          </div>
          
          <div className="space-y-8">
            {incubationStages.map((stage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{stage.stage}</h3>
                    <p className="text-teal-600 font-semibold mb-4">{stage.duration}</p>
                    <p className="text-gray-600">{stage.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Activities:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {stage.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span className="text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our successful alumni who have built thriving businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-teal-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                    <p className="text-gray-600">Founded by {story.founder}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{story.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-600">Funding: {story.funding}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-600">Team: {story.employees}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Startup?</h2>
          <p className="text-xl mb-8 text-teal-100">
            Join our incubation program and turn your innovative idea into a successful business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Application
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupIncubation;