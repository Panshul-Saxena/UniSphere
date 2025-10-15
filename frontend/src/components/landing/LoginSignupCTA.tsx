import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const LoginSignupCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Content */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-sm font-medium text-white">Join thousands of students</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your 
            <br />
            Campus Experience?
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join TheScholarEvent today and never miss another opportunity to connect, learn, and grow with your university community.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Link
              to="/signup"
              className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            <span>Sign Up Free</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          <Link
              to="/login"
              className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            <span>Login</span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-12 border-t border-white/20">
          <p className="text-white/70 text-sm mb-6">Trusted by students at top universities</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Harvard', 'MIT', 'Stanford', 'Oxford', 'Cambridge'].map((university) => (
              <div key={university} className="text-white font-medium text-lg">
                {university}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSignupCTA;