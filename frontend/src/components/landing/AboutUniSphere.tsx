import React from 'react';
import { Target, Users, Calendar, Award } from 'lucide-react';

const AboutUniSphere = () => {
  const features = [
    {
      icon: Calendar,
      title: "Event Discovery",
      description: "Find events tailored to your interests and academic goals"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connect with like-minded students and build lasting relationships"
    },
    {
      icon: Target,
      title: "Smart Matching",
      description: "AI-powered recommendations based on your preferences"
    },
    {
      icon: Award,
      title: "Achievement Tracking",
      description: "Earn badges and track your campus involvement"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TheScholarEvent</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                TheScholarEvent revolutionizes how students discover, participate in, and organize campus events. 
                Our platform brings together the entire university community in one vibrant digital space.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From academic conferences to cultural celebrations, from sports tournaments to career fairs, 
                TheScholarEvent ensures you never miss an opportunity to grow, learn, and connect.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration Side */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-30 transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full opacity-30 transform -translate-x-12 translate-y-12"></div>
              
              {/* Mock Dashboard */}
              <div className="relative bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded w-24 mb-1"></div>
                    <div className="h-2 bg-gray-100 rounded w-16"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-300 rounded w-32 mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-20"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex space-x-2">
                    <div className="flex-1 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg"></div>
                    <div className="w-16 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Live Events</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-float animation-delay-1s">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUniSphere;