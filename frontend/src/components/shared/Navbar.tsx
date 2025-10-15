import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // ⬇️ Grab user from localStorage
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const isStudent = user?.role === 'student';
  const isFaculty = user?.role === 'faculty';
  const isAdmin = user?.role === 'admin';


  const studentLinks = [
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Events', to: '/events' },
    { label: 'My Events', to: '/my-events' },
    { label: 'Clubs', to: '/clubs' },
    { label: 'Attendance', to: '/attendance' },
  ];

  const facultyLinks = [
    { label: 'Dashboard', to: '/faculty/dashboard' },
    { label: 'My Events', to: '/faculty/events' },
    { label: 'Create Event', to: '/faculty/create-event' },
    { label: 'Clubs', to: '/faculty/clubs' },
  ];

  const adminLinks = [
    { label: 'Dashboard', to: '/admin/dashboard' },
    { label: 'Event Approvals', to: '/admin/event-approvals' },
    { label: 'Users', to: '/admin/users' },
    { label: 'Clubs', to: '/admin/clubs' },
    // { label: 'Analytics', to: '/admin/analytics' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/'; // Or use navigate('/')
  };

  return (
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TheScholarEvent
            </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-4">
              {!user && (
                  <>
                    <Link to="/login" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                      Login
                    </Link>
                    <Link to="/signup" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-200">
                      Sign Up
                    </Link>
                  </>
              )}

              {isStudent && studentLinks.map(link => (
                  <Link key={link.to} to={link.to} className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                    {link.label}
                  </Link>
              ))}

              {isFaculty && facultyLinks.map(link => (
                  <Link key={link.to} to={link.to} className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                    {link.label}
                  </Link>
              ))}

              {isAdmin && adminLinks.map(link => (
                  <Link
                      key={link.to}
                      to={link.to}
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
              ))}

              {user && (
                  <button
                      onClick={handleLogout}
                      className="px-4 py-2 bg-red-50 text-red-600 border border-red-100 rounded-lg font-medium hover:bg-red-100 transition duration-200"
                  >
                    Logout
                  </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-100">
                <div className="flex flex-col space-y-3">
                  {!user && (
                      <>
                        <Link to="/login" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-left transition-colors duration-200">
                          Login
                        </Link>
                        <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200">
                          Sign Up
                        </Link>
                      </>
                  )}

                  {isStudent && studentLinks.map(link => (
                      <Link key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)} className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-left transition-colors duration-200">
                        {link.label}
                      </Link>
                  ))}

                  {isFaculty && facultyLinks.map(link => (
                      <Link key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)} className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-left transition-colors duration-200">
                        {link.label}
                      </Link>
                  ))}

                  {user && (
                      <button
                          onClick={() => {
                            handleLogout();
                            setIsMenuOpen(false);
                          }}
                          className="px-4 py-2 bg-red-50 text-red-600 border border-red-100 rounded-lg font-medium hover:bg-red-100 transition duration-200 text-left"
                      >
                        Logout
                      </button>
                  )}
                </div>
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;
