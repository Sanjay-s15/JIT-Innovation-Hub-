import React, { useEffect, useState } from 'react';
import { ArrowLeft, Users, Mail, Phone, MapPin, CheckCircle, Star, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JoinCommunity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    year: '',
    interests: [],
    experience: '',
    motivation: '',
    availability: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestChange = (interest: string) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest];
    
    setFormData({
      ...formData,
      interests: updatedInterests
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    // Handle form submission here
  };

  const benefits = [
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Connect with like-minded innovators, entrepreneurs, and industry professionals'
    },
    {
      icon: Star,
      title: 'Skill Development',
      description: 'Access workshops, mentorship programs, and hands-on learning experiences'
    },
    {
      icon: Heart,
      title: 'Collaborative Projects',
      description: 'Work on real-world projects and build your portfolio with team members'
    }
  ];

  const membershipTypes = [
    {
      title: 'Student Member',
      price: 'Free',
      description: 'Perfect for current students looking to explore innovation',
      features: [
        'Access to all events and workshops',
        'Community platform access',
        'Mentorship opportunities',
        'Project collaboration tools',
        'Resource library access'
      ],
      popular: true
    },
    {
      title: 'Alumni Member',
      price: '$50/year',
      description: 'For graduates who want to stay connected and give back',
      features: [
        'All Student Member benefits',
        'Alumni networking events',
        'Mentorship program participation',
        'Industry insights and updates',
        'Career development resources'
      ],
      popular: false
    },
    {
      title: 'Industry Partner',
      price: 'Custom',
      description: 'For organizations looking to engage with our community',
      features: [
        'Recruitment opportunities',
        'Sponsored events and workshops',
        'Project collaboration',
        'Brand visibility',
        'Custom partnership benefits'
      ],
      popular: false
    }
  ];

  const interestOptions = [
    'Web Development',
    'Mobile Apps',
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Blockchain',
    'IoT',
    'Cybersecurity',
    'UI/UX Design',
    'Entrepreneurship',
    'Startup',
    'Product Management',
    'Digital Marketing',
    'Sustainability',
    'FinTech',
    'HealthTech',
    'EdTech'
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
                Join Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Community</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Become part of a vibrant community of innovators, creators, and changemakers. 
                Connect, collaborate, and grow with us as we shape the future together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Join Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of being part of our innovation community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Membership Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the membership type that best fits your needs and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  type.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''
                }`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{type.price}</div>
                  <p className="text-gray-600">{type.description}</p>
                </div>
                <div className="space-y-3 mb-8">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  type.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                    : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}>
                  {type.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Apply for Membership</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below to start your journey with our innovation community
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
                  University/Organization *
                </label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-2">
                  Major/Field of Study
                </label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                  Academic Year
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select Year</option>
                  <option value="freshman">Freshman</option>
                  <option value="sophomore">Sophomore</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                  <option value="graduate">Graduate</option>
                  <option value="alumni">Alumni</option>
                  <option value="professional">Professional</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Areas of Interest (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {interestOptions.map((interest) => (
                  <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Relevant Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                rows={4}
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Tell us about your relevant experience, projects, or skills..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                Why do you want to join our community? *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                rows={4}
                value={formData.motivation}
                onChange={handleInputChange}
                required
                placeholder="Share your motivation and what you hope to achieve..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select your availability</option>
                <option value="very-active">Very Active (10+ hours/week)</option>
                <option value="active">Active (5-10 hours/week)</option>
                <option value="moderate">Moderate (2-5 hours/week)</option>
                <option value="occasional">Occasional (1-2 hours/week)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with us if you have any questions about membership or our community
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <Mail className="h-5 w-5 text-purple-600" />
              <span>community@innovationcell.edu</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <Phone className="h-5 w-5 text-purple-600" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <MapPin className="h-5 w-5 text-purple-600" />
              <span>Innovation Lab, Building A</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinCommunity;