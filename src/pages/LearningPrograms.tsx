import React, { useEffect, useState } from 'react';
import { ArrowLeft, BookOpen, Award, Clock, Users, Play, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LearningPrograms = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: 'Expert-Led Workshops',
      description: 'Learn from industry professionals and academic experts in hands-on sessions'
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description: 'Earn recognized certificates to validate your skills and enhance your resume'
    },
    {
      icon: Users,
      title: 'Peer Learning',
      description: 'Collaborate with fellow learners and benefit from diverse perspectives'
    }
  ];

  const programs = [
    {
      title: 'Web Development Bootcamp',
      duration: '12 weeks',
      level: 'Beginner to Intermediate',
      description: 'Master modern web development with React, Node.js, and cloud deployment',
      topics: ['HTML/CSS/JavaScript', 'React & Redux', 'Node.js & Express', 'Database Design', 'Cloud Deployment'],
      price: 'Free for students',
      nextStart: 'March 15, 2024',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AI & Machine Learning',
      duration: '16 weeks',
      level: 'Intermediate to Advanced',
      description: 'Dive deep into artificial intelligence and machine learning algorithms',
      topics: ['Python Programming', 'Data Science', 'Neural Networks', 'Deep Learning', 'AI Ethics'],
      price: 'Free for students',
      nextStart: 'April 1, 2024',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Entrepreneurship Essentials',
      duration: '8 weeks',
      level: 'All Levels',
      description: 'Learn the fundamentals of starting and running a successful business',
      topics: ['Business Planning', 'Market Research', 'Financial Management', 'Marketing Strategy', 'Legal Basics'],
      price: 'Free for students',
      nextStart: 'March 22, 2024',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Mobile App Development',
      duration: '10 weeks',
      level: 'Beginner to Intermediate',
      description: 'Build native and cross-platform mobile applications',
      topics: ['React Native', 'Flutter', 'iOS Development', 'Android Development', 'App Store Deployment'],
      price: 'Free for students',
      nextStart: 'April 8, 2024',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const workshops = [
    {
      title: 'Introduction to Blockchain',
      date: 'March 10, 2024',
      time: '2:00 PM - 5:00 PM',
      instructor: 'Dr. Sarah Johnson',
      spots: '25 available'
    },
    {
      title: 'UI/UX Design Principles',
      date: 'March 17, 2024',
      time: '10:00 AM - 1:00 PM',
      instructor: 'Michael Chen',
      spots: '30 available'
    },
    {
      title: 'Data Visualization with D3.js',
      date: 'March 24, 2024',
      time: '3:00 PM - 6:00 PM',
      instructor: 'Emily Rodriguez',
      spots: '20 available'
    }
  ];

  const learningPaths = [
    {
      title: 'Full-Stack Developer',
      duration: '6 months',
      courses: ['Web Development Bootcamp', 'Database Design', 'API Development', 'DevOps Basics'],
      outcome: 'Build complete web applications from frontend to backend'
    },
    {
      title: 'Data Scientist',
      duration: '8 months',
      courses: ['Python Programming', 'Statistics', 'Machine Learning', 'Data Visualization'],
      outcome: 'Analyze complex data and build predictive models'
    },
    {
      title: 'Tech Entrepreneur',
      duration: '4 months',
      courses: ['Entrepreneurship Essentials', 'Product Management', 'Digital Marketing', 'Startup Finance'],
      outcome: 'Launch and scale your own tech startup'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-orange-300 hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Learning <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Programs</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Enhance your skills with our comprehensive learning programs designed by industry experts. 
                From beginner workshops to advanced certification courses, we have something for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Browse Programs
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  Download Catalog
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Programs?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our learning programs are designed to provide practical, industry-relevant skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive courses designed to take you from beginner to expert
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{program.level}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                    <div className="space-y-1">
                      {program.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-green-600 font-semibold">{program.price}</span>
                    <span className="text-gray-600 text-sm">Next start: {program.nextStart}</span>
                  </div>
                  <button className={`w-full bg-gradient-to-r ${program.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Workshops</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Short, focused sessions on specific topics and emerging technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{workshop.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>📅 {workshop.date}</p>
                  <p>🕐 {workshop.time}</p>
                  <p>👨‍🏫 {workshop.instructor}</p>
                  <p>👥 {workshop.spots}</p>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Learning Paths</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning journeys to help you achieve your career goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{path.title}</h3>
                <p className="text-orange-600 font-semibold mb-4">{path.duration}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Courses included:</h4>
                  <div className="space-y-1">
                    {path.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center space-x-2">
                        <Play className="h-3 w-3 text-orange-500" />
                        <span className="text-gray-700 text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{path.outcome}</p>
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Start Path
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Join thousands of students who have advanced their careers through our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Browse All Programs
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download Catalog</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningPrograms;