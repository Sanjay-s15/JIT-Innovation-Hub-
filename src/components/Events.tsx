import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
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

  const events = [
    {
      title: 'Innovation Hackathon 2024',
      date: 'March 15-17, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Main Campus Auditorium',
      attendees: '200+',
      description: '48-hour hackathon focusing on sustainable technology solutions. Teams will compete to develop innovative apps and prototypes.',
      status: 'upcoming',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI & Machine Learning Workshop',
      date: 'February 20, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Innovation Lab',
      attendees: '50',
      description: 'Hands-on workshop covering the fundamentals of AI and ML with practical implementation using Python and TensorFlow.',
      status: 'completed',
      color: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Startup Pitch Competition',
      date: 'April 5, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Business Center',
      attendees: '150',
      description: 'Student entrepreneurs present their startup ideas to a panel of industry experts and potential investors.',
      status: 'upcoming',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Tech Talk: Future of Web Development',
      date: 'January 25, 2024',
      time: '7:00 PM - 8:30 PM',
      location: 'Virtual Event',
      attendees: '300+',
      description: 'Industry leaders discuss emerging trends in web development, including WebAssembly, serverless architecture, and more.',
      status: 'completed',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="events" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Upcoming <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our exciting events, workshops, and competitions designed to inspire innovation and foster collaboration.
            </p>
          </div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="md:flex">
                  <div className={`md:w-1/3 bg-gradient-to-br ${event.color} p-8 text-white flex flex-col justify-center`}>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                          <Calendar className="h-5 w-5" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                          <Clock className="h-5 w-5" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                          <MapPin className="h-5 w-5" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                          <Users className="h-5 w-5" />
                          <span className="text-sm">{event.attendees} attendees</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          event.status === 'upcoming' 
                            ? 'bg-white/20 text-white' 
                            : 'bg-white/20 text-white/80'
                        }`}>
                          {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {event.status === 'upcoming' ? (
                        <>
                          <button className={`bg-gradient-to-r ${event.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                            Register Now
                          </button>
                          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300">
                            Learn More
                          </button>
                        </>
                      ) : (
                        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300">
                          View Highlights
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;