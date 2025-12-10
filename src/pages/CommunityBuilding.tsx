import React, { useEffect, useState } from 'react';
import { ArrowLeft, Users, MessageCircle, Calendar, Globe, Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CommunityBuilding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Networking Events',
      description: 'Connect with like-minded innovators, entrepreneurs, and industry professionals'
    },
    {
      icon: MessageCircle,
      title: 'Collaboration Platform',
      description: 'Access our digital platform to find team members and collaborate on projects'
    },
    {
      icon: Calendar,
      title: 'Regular Meetups',
      description: 'Participate in weekly meetups, workshops, and knowledge sharing sessions'
    }
  ];

  const communityStats = [
    { number: '500+', label: 'Active Members' },
    { number: '50+', label: 'Monthly Events' },
    { number: '100+', label: 'Successful Collaborations' },
    { number: '25+', label: 'Industry Partners' }
  ];

  const communityTypes = [
    {
      title: 'Student Innovators',
      description: 'Undergraduate and graduate students passionate about innovation and technology',
      icon: '🎓',
      benefits: ['Peer learning opportunities', 'Project collaboration', 'Skill development workshops', 'Career guidance']
    },
    {
      title: 'Alumni Network',
      description: 'Successful graduates who mentor current students and share industry insights',
      icon: '🌟',
      benefits: ['Mentorship programs', 'Industry connections', 'Job opportunities', 'Investment guidance']
    },
    {
      title: 'Industry Partners',
      description: 'Companies and organizations that support innovation and provide real-world challenges',
      icon: '🏢',
      benefits: ['Internship opportunities', 'Project sponsorship', 'Technology access', 'Market insights']
    },
    {
      title: 'Faculty & Researchers',
      description: 'Academic experts who provide research guidance and technical expertise',
      icon: '🔬',
      benefits: ['Research collaboration', 'Academic support', 'Publication opportunities', 'Grant assistance']
    }
  ];

  const events = [
    {
      title: 'Innovation Fridays',
      frequency: 'Weekly',
      description: 'Casual meetups to share ideas, get feedback, and network with peers',
      time: 'Every Friday, 5:00 PM'
    },
    {
      title: 'Tech Talks',
      frequency: 'Bi-weekly',
      description: 'Industry experts share insights on emerging technologies and trends',
      time: 'Every other Wednesday, 7:00 PM'
    },
    {
      title: 'Startup Showcase',
      frequency: 'Monthly',
      description: 'Student entrepreneurs present their startups to the community',
      time: 'Last Friday of each month, 6:00 PM'
    },
    {
      title: 'Hackathons',
      frequency: 'Quarterly',
      description: 'Intensive coding events to build innovative solutions in 48 hours',
      time: 'Quarterly weekends'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-green-300 hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Community <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Building</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Join a vibrant community of innovators, creators, and changemakers. Connect, collaborate, 
                and grow together in an environment that fosters creativity and mutual support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                  Join Community
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  Explore Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Growing Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of innovators who are already part of our thriving ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Community Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the tools and opportunities that make our community special
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who's in Our Community?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse community brings together different perspectives and expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {communityTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{type.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Regular Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay engaged with our regular programming designed to foster connection and learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.frequency}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 text-green-100">
            Become part of a supportive network that will help you grow, learn, and succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Join Now
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Attend an Event
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityBuilding;