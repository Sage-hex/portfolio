// src/components/Biography.js
import React from 'react';

const Biography = () => {
  return (
    <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Column */}
      <div className="flex items-center">
        <img 
          src="/avatar.png" 
          alt="Avatar" 
          className="w-32 h-32 rounded-full border-4 border-[#00FFA3] mr-6"
        />
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Biography</h2>
          <p className="text-lg text-gray-400">
            Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Excited on{' '}
            <span className="text-[#00FFA3] underline">React</span>,{' '}
            <span className="text-[#00FFA3] underline">UX Research</span>, and{' '}
            <span className="text-[#00FFA3] underline">Agile</span>.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">Let's connect</h2>
        <div className="flex space-x-6 mt-4">
          <a href="#" className="text-2xl text-gray-400 hover:text-blue-500 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-2xl text-gray-400 hover:text-blue-500 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-2xl text-gray-400 hover:text-blue-500 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Biography;