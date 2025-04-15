// import { FaCode, FaClipboardList, FaArrowRight } from "react-icons/fa";

// const WhatIDo = () => {
//   return (
//     <section className="mt-20 px-4 md:px-10">
//       <h2 className="text-xl font-semibold mb-4">What I do</h2>
//       <p className="text-sm text-white/70 max-w-xl mb-6">
//         Build and maintain websites,{" "}
//         <span className="text-green-400">frontend dev</span> also have a
//         mentorship called <span className="text-blue-400">MOFON</span>. My motto
//         is Beauty and function in equal measure as priority.
//       </p>

//       <div className="flex flex-col md:flex-row items-start gap-6">
//         {/* Card 1 */}
//         <div className="bg-[#2b2b2b] rounded-lg p-6 w-full max-w-sm">
//           <div className="w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center mb-4">
//             <FaCode className="text-blue-300" />
//           </div>
//           <h3 className="text-sm font-semibold mb-2">Web Development</h3>
//           <p className="text-xs text-white/60">
//             You will receive a customized plan for your fitness journey, and
//             lots of support.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-[#2b2b2b] rounded-lg p-6 w-full max-w-sm">
//           <div className="w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center mb-4">
//             <FaClipboardList className="text-blue-300" />
//           </div>
//           <h3 className="text-sm font-semibold mb-2">UX Research</h3>
//           <p className="text-xs text-white/60">
//             You will receive a customized plan for your fitness journey, and
//             lots of support.
//           </p>
//         </div>

//         {/* Arrow */}
//         <div className="mt-4 md:mt-0">
//           <FaArrowRight className="text-white text-lg" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatIDo;


// import { FaCog, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

// const WhatIDoSection = () => {
//   return (
//     <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Left Section */}
//         <div>
//           <h2 className="text-3xl font-bold text-white mb-4">What I do</h2>
//           <p className="text-lg leading-relaxed text-gray-300">
//             Build and maintain websites,{' '}
//             <span className="text-green-500 font-semibold">frontend dev</span> also 
//             have a mentorship called{' '}
//             <span className="text-blue-500 font-semibold">MOFON</span>. My motto is Beauty 
//             and function in equal measure as priority.
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="flex border-2 border-red-700 items-center justify-center py-4 px-4 gap-9 relative">
//           <div className="flex space-x-4 border-2 border-green-600">
//             {/* Web Development Card */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//               <div className="flex items-center justify-center mb-4">
//                 <div className="w-12 h-12 rounded-full border-2 border-teal-500 flex items-center justify-center">
//                   <FaCog className="text-teal-500 text-3xl" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
//               <p className="text-sm text-gray-300 leading-relaxed">
//                 You will receive a customized plan for your fitness journey, and lots of support.
//               </p>
//             </div>

//             {/* UX Research Card */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//               <div className="flex items-center justify-center mb-4">
//                 <div className="w-12 h-12 absolute left-2 top-0 rounded-full border-2 border-green-500 flex items-center justify-center">
//                   <FaCalendarAlt className=" text-green-500 text-3xl" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-white mb-2">UX Research</h3>
//               <p className="text-sm text-gray-300 leading-relaxed">
//                 You will receive a customized plan for your fitness journey, and lots of support.
//               </p>
//             </div>
//           </div>

//           {/* Arrow */}
//           <div className="">
//             <FaArrowRight className="text-white text-5xl" />
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
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">What I do</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Build and maintain websites,{' '}
            <span className="text-green-500 font-semibold">frontend dev</span> also 
            have a mentorship called{' '}
            <span className="text-blue-500 font-semibold">MOFON</span>. My motto is Beauty 
            and function in equal measure as priority.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center py-4 px-4 gap-9 relative">
          <div className="flex space-x-4">
            {/* Web Development Card */}
            <div className="bg-gray-800 p-6 pt-12 rounded-lg shadow-lg relative w-64">
              {/* Cog Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-teal-500 bg-gray-800 flex items-center justify-center shadow-md">
                <FaCog className="text-teal-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Web Development</h3>
              <p className="text-sm text-gray-300 leading-relaxed text-center">
                You will receive a customized plan for your fitness journey, and lots of support.
              </p>
            </div>

            {/* UX Research Card */}
            <div className="bg-gray-800 p-6 pt-12 rounded-lg shadow-lg relative w-64">
              {/* Calendar Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-green-500 bg-gray-800 flex items-center justify-center shadow-md">
                <FaCalendarAlt className="text-green-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">UX Research</h3>
              <p className="text-sm text-gray-300 leading-relaxed text-center">
                You will receive a customized plan for your fitness journey, and lots of support.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div>
            <FaArrowRight className="text-white text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDoSection;
