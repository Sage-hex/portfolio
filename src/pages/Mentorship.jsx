// import React, { useEffect, useState } from 'react';
// import { FaBookOpen, FaVideo, FaHandPointRight } from 'react-icons/fa';

// const MentorshipPage = () => {

  
//   return (
//     <div className=" text-white min-h-screen p-6 md:p-12">
//       {/* Header Section */}
//       <HeaderSection />
      
//       {/* Weekly Schedule */}
//       <WeeklySchedule />
      
//       {/* Benefits Section */}
//       <BenefitsSection />
//     </div>
//   );
// };

// // Header Section Component
// const HeaderSection = () => {
//   return (
//     <div className="max-w-6xl mx-auto mb-16">
//       <h1 className="text-4xl md:text-5xl font-bold mb-8">Mentorship</h1>
      
//       <div className="md:flex md:items-start md:gap-6">
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <p className="text-lg mb-2">
//             Spending a lot of time learning <span className="text-green-400 underline">on your own</span> and still feeling <span className="text-gray-400">stuck</span>?
//           </p>
          
//           <div className="mt-6 border-l-4 border-green-400 pl-4 py-1">
//             <p className="text-lg">
//               This Frontend Mentorship is the answer to your problems. Here, you'll experience more personalized mentoring.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Weekly Schedule Component
// const WeeklySchedule = () => {
//   const weeks = [
//     {
//       id: 1,
//       title: "First Week",
//       content: "Discussing basics of website structure like tags, attributes and elements."
//     },
//     {
//       id: 2,
//       title: "Second Week",
//       content: "Discussing Web Development - Basic SDLC."
//     },
//     {
//       id: 3,
//       title: "Third Week",
//       content: "Discussing layout concepts like flexbox and grid."
//     }
//   ];
  
//   return (
//     <div className="max-w-6xl mx-auto mb-16">
//       <div className="bg-[#282c3e] rounded-lg p-6 md:p-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {weeks.map((week) => (
//             <div key={week.id} className="flex items-start gap-3">
//               <div className="text-yellow-300 text-xl">😊</div>
//               <div>
//                 <h3 className="font-semibold mb-2">{week.title}</h3>
//                 <p className="text-gray-300 text-sm">{week.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <button className="flex items-center gap-2 bg-[#363a4f] text-gray-300 px-4 py-2 rounded mt-6 text-sm">
//           <span>📋</span> Read more
//         </button>
//       </div>
//     </div>
//   );
// };

// // Benefits Section Component
// const BenefitsSection = () => {

//   const [theme,setTheme] = useState('dark');

//   useEffect(()=>{
//     const theme = localStorage.getItem('theme') || 'dark';
//     setTheme(theme);
//   },[])
//   const benefits = [
//     {
//       id: 1,
//       title: "1:1 Mentorship",
//       description: "1:1 Video Call with mentor to discuss, ask questions and consult about frontend mentorship or other related topics",
//       icon: <div className="bg-[#282c3e] p-3 rounded-full border-2 border-green-400"><FaVideo className="text-yellow-400 text-xl" /></div>
//     },
//     {
//       id: 2,
//       title: "Directed Learning",
//       description: "1:1 Video Call with mentor to discuss, ask questions and consult about frontend mentorship or other related topics",
//       icon: <div className="bg-[#282c3e] p-3 rounded-full border-2 border-green-400"><FaHandPointRight className="text-yellow-400 text-xl" /></div>
//     },
//     {
//       id: 3,
//       title: "Syllabus",
//       description: "Practical, fundamental syllabus that can be implemented based on case studies",
//       icon: <div className="bg-[#282c3e] p-3 rounded-full border-2 border-green-400"><FaBookOpen className="text-yellow-400 text-xl" /></div>
//     }
//   ];
  
//   return (
//     <div className="max-w-6xl mx-auto">
//       <div className="md:flex md:items-start md:gap-12">
//         <div className="md:w-1/3 mb-8 md:mb-0">
//           <h2 className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-100">Mentorship Benefits</h2>
//           {theme === 'light' ? (<div className="flex justify-center items-center mt-16">
//   <svg
//     viewBox="0 0 200 300"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="currentColor"
//     className="h-72 w-auto text-black dark:text-white"
//   >
//     {/* Head */}
//     <circle cx="100" cy="50" r="20" fill="currentColor" />

//     {/* Eyes (focused) */}
//     <circle cx="94" cy="45" r="2" fill="inherit" className="text-white dark:text-black" />
//     <circle cx="106" cy="45" r="2" fill="inherit" className="text-white dark:text-black" />

//     {/* Mouth (determined) */}
//     <path
//       d="M92 58 Q100 62 108 58"
//       stroke="currentColor"
//       strokeWidth="2"
//       fill="none"
//       className="text-white dark:text-black"
//     />

//     {/* Torso */}
//     <rect x="85" y="70" width="30" height="60" rx="5" fill="currentColor" />

//     {/* Left arm holding waist */}
//     <path d="M85 75 Q60 95 85 110" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />

//     {/* Right arm raised with book */}
//     <path d="M115 75 L150 30" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
//     <rect x="144" y="18" width="12" height="14" fill="currentColor" stroke="white" strokeWidth="1" rx="1" />

//     {/* Legs */}
//     <path d="M90 130 L60 200" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
//     <path d="M110 130 L140 200" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />

//     {/* Optional text above */}
//     <text x="20" y="15" fontSize="16" fontWeight="bold" fontFamily="cursive" fill="currentColor">
//       📚 Learning is Power
//     </text>
//   </svg>
// </div>) : (          {/* <div className='mt-14 w-76 h-56 bg-black'>
//             <img src="/strength.png" alt="" className='w-full h-full object-contain' />
//           </div> */})};




//         </div>
        
//         <div className="md:w-2/3">
//           <div className="space-y-6">
//             {benefits.map((benefit) => (
//               <div key={benefit.id} className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center gap-6">
//                 <div>
//                   {benefit.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold mb-2 text-gray-700 dark:text-gray-100">{benefit.title}</h3>
//                   <p className="text-gray-700 dark:text-gray-100 text-sm">{benefit.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorshipPage;




import React from 'react';
import MentorshipHeader from '../components/sections/MentorshipHeader';
import WeeklySchedule from '../components/sections/WeeklySchedule';
import BenefitsSection from '../components/sections/Benefits';
import { ThemeProvider } from '../utils/ThemeContext';


const MentorshipPage = () => {
  return (
    <div className="text-white min-h-screen p-6 md:p-12">
      {/* Header Section */}
      <MentorshipHeader/>

      {/* Weekly Schedule */}
      <WeeklySchedule />

      {/* Benefits Section */}
      <ThemeProvider>
      <BenefitsSection/>
      </ThemeProvider>
    </div>
  );
};

export default MentorshipPage;
