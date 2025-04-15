// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section className="container flex mx-auto py-12">
      <h2 className="text-4xl font-bold text-white mb-8">What I do</h2>
      <p className="text-lg text-gray-400 mb-12">
        Build and maintain websites, frontend dev also have a mentorship called MOFON. My motto is Beauty and function in equal measure as priority.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Web Development Card */}
        <div className="bg-[#3A3B4E] p-8 rounded-lg shadow-md relative">
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-[#00FFA3] p-4 rounded-full">
            <i className="fas fa-code text-3xl text-white"></i>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
          <p className="text-lg text-gray-300">
            You will receive a customized plan for your fitness journey, and lots of support.
          </p>
          <div className="absolute right-[-40px] bottom-[-40px] text-5xl text-gray-500">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        {/* UX Research Card */}
        <div className="bg-[#3A3B4E] p-8 rounded-lg shadow-md relative">
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-[#00FFA3] p-4 rounded-full">
            <i className="fas fa-briefcase text-3xl text-white"></i>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">UX Research</h3>
          <p className="text-lg text-gray-300">
            You will receive a customized plan for your fitness journey, and lots of support.
          </p>
          <div className="absolute right-[-40px] bottom-[-40px] text-5xl text-gray-500">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;