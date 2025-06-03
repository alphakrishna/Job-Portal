import React from 'react';
import logo from '../assets/Images/logo.png'; // Adjust the path as necessary

function Navbar() {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/index.html" className="flex items-center">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:inline-block text-white text-2xl font-semibold ml-3">
                React Jobs
              </span>
            </a>
          </div>

          {/* Nav Links */}
          <div className="flex space-x-3 text-sm md:text-base">
            <a
              href="/index.html"
              className="text-white bg-black hover:bg-gray-900 transition px-4 py-2 rounded-md font-medium"
            >
              Home
            </a>
            <a
              href="/jobs.html"
              className="text-white hover:bg-gray-900 transition px-4 py-2 rounded-md font-medium"
            >
              Jobs
            </a>
            <a
              href="/add-job.html"
              className="text-white hover:bg-gray-900 transition px-4 py-2 rounded-md font-medium"
            >
              Add Job
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
