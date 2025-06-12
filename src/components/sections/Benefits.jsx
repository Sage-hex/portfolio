// import React, { useState, useEffect, useContext } from 'react';
// import { FaBookOpen, FaVideo, FaHandPointRight } from 'react-icons/fa';
// import ContactForm from './ContactModal';
// // import { ThemeContext } from '../../utils/ThemeContext';

// const BenefitsSection = () => {
//     // const { theme } = useContext(ThemeContext);
//     // const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
//     // const [mounted, setMounted] = useState(false); // ensure DOM is ready
    
  
//     // useEffect(() => {
//     //   const storedTheme = localStorage.getItem("theme") || "dark";
//     //   setTheme(storedTheme);
//     //   setMounted(true);
  
//     //   const observer = new MutationObserver(() => {
//     //     const updatedTheme = localStorage.getItem("theme") || "dark";
//     //     setTheme(updatedTheme); // trigger re-render
//     //   });
  
//     //   observer.observe(document.documentElement, {
//     //     attributes: true,
//     //     attributeFilter: ["class"],
//     //   });
  
//     //   return () => observer.disconnect();
//     // }, []);
  
//     // if (!mounted) return <div className="text-center mt-10">Loading...</div>;
// // const [theme, setTheme] = useState(null); // Initially null = not loaded

// // useEffect(() => {
// //   const savedTheme = localStorage.getItem('theme') || 'dark';
// //   setTheme(savedTheme);

  
// // }, []);

// // if (!theme) {
// //   return (
// //     <div className="flex justify-center items-center h-72 mt-16">
// //       <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-500" />
// //     </div>
// //   );
// // }


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
//             <div className="flex justify-center items-center mt-16">
 
//             <svg
//               viewBox="0 0 200 300"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               className="h-72 w-auto text-black dark:text-white"
//             >
//               {/* Head */}
//               <circle cx="100" cy="50" r="20" fill="currentColor" />
    
//               {/* Eyes (focused) */}
//               <circle cx="94" cy="45" r="2" fill="inherit" className="text-white dark:text-black" />
//               <circle cx="106" cy="45" r="2" fill="inherit" className="text-white dark:text-black" />
    
//               {/* Mouth (determined) */}
//               <path
//                 d="M92 58 Q100 62 108 58"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 fill="none"
//                 className="text-white dark:text-black"
//               />
    
//               {/* Torso */}
//               <rect x="85" y="70" width="30" height="60" rx="5" fill="currentColor" />
    
//               {/* Left arm holding waist */}
//               <path d="M85 75 Q60 95 85 110" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
    
//               {/* Right arm raised with book */}
//               <path d="M115 75 L150 30" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
//               <rect x="144" y="18" width="12" height="14" fill="currentColor" stroke="white" strokeWidth="1" rx="1" />
    
//               {/* Legs */}
//               <path d="M90 130 L60 200" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
//               <path d="M110 130 L140 200" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
    
//               {/* Optional text above */}
//               <text x="20" y="15" fontSize="16" fontWeight="bold" fontFamily="cursive" fill="currentColor">
//                 📚 Learning is Power
//               </text>
//             </svg>
//           </div>
      
//         </div>

//         <div className="md:w-2/3">
//           <div className="space-y-6">
//             {benefits.map((benefit) => (
//               <div key={benefit.id} className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center gap-6">
//                 <div>{benefit.icon}</div>
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

// export default BenefitsSection;



import { FaVideo, FaHandPointRight, FaBookOpen } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    title: "1:1 Mentorship",
    description:
      // "1:1 Video Call with mentor to discuss, ask questions and consult about frontend mentorship or other related topics",
      'Ongoing, personalized guidance through scheduled video calls—ideal for those seeking structured support, progress tracking, feedback on projects, and career advice in frontend development.',
    icon: (
      <div className="bg-[#282c3e] p-3 rounded-full border-2 border-green-400">
        <FaVideo className="text-yellow-400 text-xl" />
      </div>
    ),
  },
  {
    id: 2,
    title: "Directed Learning",
    description:
      // "1:1 Video Call with mentor to discuss, ask questions and consult about frontend mentorship or other related topics",
      'Focused, one-off sessions via video call aimed at answering specific questions, clearing doubts, or consulting on a particular frontend concept or challenge.',
    icon: (
      <div className="bg-[#282c3e] p-3 rounded-full border-2 border-green-400">
        <FaHandPointRight className="text-yellow-400 text-xl" />
      </div>
    ),
  },
  {
    id: 3,
    title: "Syllabus",
    description:
      // "Practical, fundamental syllabus that can be implemented based on case studies",
      'A practical, hands-on curriculum grounded in real-world case studies—designed to build strong frontend fundamentals through applied learning.',
    icon: (
      <div className="bg-[#282c3e] p-3 rounded-full border-2 border-green-400">
        <FaBookOpen className="text-yellow-400 text-xl" />
      </div>
    ),
  },
];

const BenefitsSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="md:flex md:items-start md:gap-12">
        <div
          className="md:w-1/3 mb-8 md:mb-0"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-100">
            Mentorship Benefits
          </h2>
          <div className="flex justify-center items-center mt-16">
            <svg
              viewBox="0 0 200 300"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-72 w-auto text-black dark:text-white"
            >
              {/* Head */}
              <circle cx="100" cy="50" r="20" fill="currentColor" />
              {/* Eyes */}
              <circle
                cx="94"
                cy="45"
                r="2"
                fill="inherit"
                className="text-white dark:text-black"
              />
              <circle
                cx="106"
                cy="45"
                r="2"
                fill="inherit"
                className="text-white dark:text-black"
              />
              {/* Mouth */}
              <path
                d="M92 58 Q100 62 108 58"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-white dark:text-black"
              />
              {/* Torso */}
              <rect x="85" y="70" width="30" height="60" rx="5" fill="currentColor" />
              {/* Left arm */}
              <path
                d="M85 75 Q60 95 85 110"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
              />
              {/* Right arm */}
              <path
                d="M115 75 L150 30"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <rect
                x="144"
                y="18"
                width="12"
                height="14"
                fill="currentColor"
                stroke="white"
                strokeWidth="1"
                rx="1"
              />
              {/* Legs */}
              <path
                d="M90 130 L60 200"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M110 130 L140 200"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
              {/* Caption */}
              <text
                x="20"
                y="15"
                fontSize="16"
                fontWeight="bold"
                fontFamily="cursive"
                fill="currentColor"
              >
                📚 Learning is Power
              </text>
            </svg>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center gap-6"
                data-aos="fade-up"
                data-aos-delay={200 * (index + 1)}
              >
                <div>{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-700 dark:text-gray-100">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-100 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
