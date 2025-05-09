// import { FaCog, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

// const WhatIDoSection = () => {
//   return (
//     <div className="w-full text-black dark:text-white transition-colors duration-500 py-11 md:py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-16 items-center">
//         {/* Left Section */}
//         <div>
//           <h2 className="text-2xl text-center md:text-left md:text-3xl font-bold mb-4">What I do</h2>
//           <p className="text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-500">
//             I design and develop modern, scalable web applications as a{' '}
//             <span className="text-green-600 dark:text-green-500 font-semibold">fullstack developer</span>. I also run a mentorship program called{' '}
//             <span className="text-blue-600 dark:text-blue-400 font-semibold">MOFON</span>. My focus is delivering both{' '}
//             <span className="italic">beauty</span> and{' '}
//             <span className="italic">function</span> in every project.
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
//           <div className="flex flex-col sm:flex-row gap-11 lg:gap-6 md:gap-10">
//             {/* Frontend Card */}
//             {/* <div className="bg-gray-100 dark:bg-gray-800 p-6 pt-12 rounded-lg shadow-lg relative w-full sm:w-64 transition-colors duration-500"> */}
//             <div className="bg-gray-100 dark:bg-gray-800 p-6 pt-12 rounded-lg shadow-lg relative w-full lg:w-64 md:w-1/2 transition-colors duration-500">
//               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-teal-500 bg-white dark:bg-gray-800 flex items-center justify-center shadow-md transition-colors duration-500">
//                 <FaCog className="text-teal-600 dark:text-teal-400 text-2xl" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-center">Frontend</h3>
//               <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center transition-colors duration-500">
//                 I craft responsive, accessible interfaces using React, Tailwind CSS, and other modern tools that enhance user experience.
//               </p>
//             </div>

//             {/* Backend Card */}
//             <div className="bg-gray-100 dark:bg-gray-800 p-6 pt-12 rounded-lg shadow-lg relative w-full lg:w-64 md:w-1/2 transition-colors duration-500">
//               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-green-500 bg-white dark:bg-gray-800 flex items-center justify-center shadow-md transition-colors duration-500">
//                 <FaCalendarAlt className="text-green-600 dark:text-green-400 text-2xl" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-center">Backend</h3>
//               <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center transition-colors duration-500">
//                 I build reliable APIs, manage databases, and handle server-side logic using Node.js, Express, and MongoDB.
//               </p>
//             </div>
//           </div>

//           {/* Arrow - visible on large screens */}
//           <div className="hidden md:block">
//             <FaArrowRight className="text-black md:hidden lg:block dark:text-white text-3xl transition-colors duration-500" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatIDoSection;


import { FaCog, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const WhatIDoSection = () => {
  return (
    <div className="w-full text-black dark:text-white transition-colors duration-500 py-11 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-16 items-center">
        {/* Left Section */}
        <div data-aos="fade-right">
          <h2 className="text-2xl text-center md:text-left md:text-3xl font-bold mb-4">What I do</h2>
          <p className="text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-500">
            I design and develop modern, scalable web applications as a{' '}
            <span className="text-green-600 dark:text-green-500 font-semibold">fullstack developer</span>. I also run a mentorship program called{' '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">MOFON</span>. My focus is delivering both{' '}
            <span className="italic">beauty</span> and{' '}
            <span className="italic">function</span> in every project.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
          <div className="flex flex-col sm:flex-row gap-11 lg:gap-6 md:gap-10">
            {/* Frontend Card */}
            <div data-aos="fade-up" className="bg-gray-100 dark:bg-gray-800 p-6 pt-12 rounded-lg shadow-lg relative w-full lg:w-64 md:w-1/2 transition-colors duration-500 hover:shadow-2xl hover:scale-105">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-teal-500 bg-white dark:bg-gray-800 flex items-center justify-center shadow-md transition-colors duration-500">
                <FaCog className="text-teal-600 dark:text-teal-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Frontend</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center transition-colors duration-500">
                I craft responsive, accessible interfaces using React, Tailwind CSS, and other modern tools that enhance user experience.
              </p>
            </div>

            {/* Backend Card */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-100 dark:bg-gray-800 p-6 pt-12 rounded-lg shadow-lg relative w-full lg:w-64 md:w-1/2 transition-colors duration-500 hover:shadow-2xl hover:scale-105">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-green-500 bg-white dark:bg-gray-800 flex items-center justify-center shadow-md transition-colors duration-500">
                <FaCalendarAlt className="text-green-600 dark:text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Backend</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center transition-colors duration-500">
                I build reliable APIs, manage databases, and handle server-side logic using Node.js, Express, and MongoDB.
              </p>
            </div>
          </div>

          {/* Arrow - visible on large screens */}
          <div data-aos="fade-left" className="hidden md:block">
            <FaArrowRight className="text-black md:hidden lg:block dark:text-white text-3xl transition-colors duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDoSection;
