




// import React, { useState, useEffect } from 'react';
// import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

// const HeroSection = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   // Handle screen size changes
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     // Set initial value
//     handleResize();
    
//     // Add event listener
//     window.addEventListener('resize', handleResize);
    
//     // Clean up
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <section className="relative overflow-hidden w-full flex flex-col justify-start text-black transition-colors duration-500 py-8">
//       {/* 🔮 Bubble Glow Top */}
//       {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-300 rounded-full blur-3xl opacity-30 animate-bubbleGlow z-0"></div> */}

//       {/* 🔮 Bubble Glow Bottom */}
//       {/* <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 via-teal-500 to-green-300 rounded-full blur-[5rem] opacity-30 animate-bubbleGlow z-0"></div> */}

//       {/* Main content */}
//       <div className="relative z-10">
//         {/* Mobile Layout */}
//         {isMobile ? (
//           <div className="max-w-md mx-auto flex px-4 py-4 flex-col items-center text-center">
//             {/* Avatar with gradient border */}
//             <div className="relative w-20 h-20 mb-4">
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400"></div>
//               <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
//                 <img
//                   src="/avatar.jpg"
//                   alt="Profile"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </div>
            
//             {/* Social Media Icons */}
//             <div className="flex gap-4 mb-6">
//               <a href="#" aria-label="Instagram" className="text-gray-300 dark:text-[#f5f5f5]  text-[#0E0E0E]">
//                 <FaInstagram />
//               </a>
//               <a href="#" aria-label="Twitter" className="text-gray-300 dark:text-[#f5f5f5]  text-[#0E0E0E]">
//                 <FaTwitter />
//               </a>
//               <a href="#" aria-label="LinkedIn" className="text-gray-300 dark:text-[#f5f5f5]  text-[#0E0E0E]">
//                 <FaLinkedin />
//               </a>
//             </div>
            
//             {/* Gradient Text */}
//             <h1 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 ">
//               Hi I'm Naufaldi, a special human with some ability to love learning and working on teamwork.
//             </h1>
            
//             {/* Biography Section */}
//             <div className="text-left w-full mt-2">
//               <h2 className="font-medium text-center md:text-left text-2xl mb-2 font-semibold text-black dark:text-white">Biography</h2>
//               <p className="text-gray-800 dark:text-gray-400 text-sm">
//                 Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Excited on <span className="text-blue-500">React</span>, <span className="text-blue-300">UX Research</span> and <span className="text-green-400">Agile Development</span>.
//               </p>
//             </div>
//           </div>
//         ) : (
//           /* Desktop Layout */
//           <div className="max-w-7xl mx-auto w-full">
//             <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-16">
//               Hi I'm Emmanuel, a special human<br />
//               with some ability to love learning<br />
//               and working on teamwork.
//             </h1>
            
//             <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-24">
//               {/* Biography with Avatar */}
//               <div className="flex items-start gap-8 flex-1">
//                 <div className="relative w-32 h-32 rounded-full">
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400"></div>
//                   <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
//                     <img
//                       src="/avatar.jpg"
//                       alt="Profile"
//                       className="w-full h-full rounded-full object-cover"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <h2 className="text-2xl mb-2 font-semibold text-black dark:text-white">Biography</h2>
//                   <p className="text-gray-800 dark:text-gray-300 max-w-lg text-lg">
//                     Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team.
//                     Excited on <span className="text-blue-500 font-semibold">React</span>, 
//                     <span className="text-blue-300 font-semibold"> UX Research</span> and 
//                     <span className="text-green-400 font-semibold"> Agile Development</span>.
//                   </p>
//                 </div>
//               </div>
              
//               {/* Socials */}
//               <div>
//                 <h2 className="font-bold text-lg mb-2 text-black dark:text-white">Let's connect</h2>
//                 <div className="flex gap-5 text-4xl">
//                   <a href="#" aria-label="Instagram" className="dark:text-[#f5f5f5]  text-[#0E0E0E] hover:text-blue-400 transition-colors">
//                     <FaInstagram />
//                   </a>
//                   <a href="#" aria-label="Twitter" className="dark:text-[#f5f5f5]  text-[#0E0E0E] hover:text-blue-400 transition-colors">
//                     <FaTwitter />
//                   </a>
//                   <a href="#" aria-label="LinkedIn" className="dark:text-[#f5f5f5]  text-[#0E0E0E] hover:text-blue-400 transition-colors">
//                     <FaLinkedin />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative overflow-hidden w-full flex flex-col justify-start text-black transition-colors duration-500 py-8">
      {/* Main content */}
      <div className="relative z-10">
        {/* Mobile Layout */}
        {isMobile ? (
          <div
            className="max-w-md mx-auto flex px-4 py-4 flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Avatar with gradient border */}
            <div className="relative w-20 h-20 mb-4" data-aos="zoom-in" data-aos-duration="1000">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400"></div>
              <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
                <img
                  src="/avatar.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Social Media Icons */}
            <div
              className="flex gap-4 mb-6"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <a href="#" aria-label="Instagram" className="text-gray-300 dark:text-[#f5f5f5]  text-[#0E0E0E]">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 dark:text-[#f5f5f5]  text-[#0E0E0E]">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 dark:text-[#f5f5f5]  text-[#0E0E0E]">
                <FaLinkedin />
              </a>
            </div>

            {/* Gradient Text */}
            <h1
              className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
             Hi I'm Emmanuel, a software dev who loves to build and learn new things while helping others grow.
            </h1>

            {/* Biography Section */}
            <div className="text-left w-full mt-2" data-aos="fade-up" data-aos-duration="2500">
              <h2 className="font-medium text-center md:text-left text-2xl mb-2 font-semibold text-black dark:text-white">Biography</h2>
              <p className="text-gray-800 dark:text-gray-400 text-sm">
                Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Excited on <span className="text-blue-500">React</span>, <span className="text-blue-300">UX Research</span> and <span className="text-green-400">Agile Development</span>.
              </p>
            </div>
          </div>
        ) : (
          /* Desktop Layout */
          <div className="max-w-7xl mx-auto w-full">
            <h1
              className="text-4xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-16"
              data-aos="fade-up"
              data-aos-duration="1000"
            >

              Hi I'm Emmanuel,  a software dev<br />
              who loves to build and learn new things<br />
              while helping others grow.
            </h1>

            <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-24">
              {/* Biography with Avatar */}
              <div className="flex items-start gap-8 flex-1" data-aos="fade-right" data-aos-duration="1500">
                <div className="relative w-32 h-32 rounded-full">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400"></div>
                  <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
                    <img
                      src="/avatar.jpg"
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl mb-2 font-semibold text-black dark:text-white">Biography</h2>
                  <p className="text-gray-800 dark:text-gray-300 max-w-lg text-lg">
                    Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team.
                    Excited on <span className="text-blue-500 font-semibold">React</span>, 
                    <span className="text-blue-300 font-semibold"> UX Research</span> and 
                    <span className="text-green-400 font-semibold"> Agile Development</span>.
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h2 className="font-bold text-lg mb-2 text-black dark:text-white">Let's connect</h2>
                <div className="flex gap-5 text-4xl">
                  <a href="#" aria-label="Instagram" className="dark:text-[#f5f5f5]  text-[#0E0E0E] hover:text-blue-400 transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" aria-label="Twitter" className="dark:text-[#f5f5f5]  text-[#0E0E0E] hover:text-blue-400 transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="dark:text-[#f5f5f5]  text-[#0E0E0E] hover:text-blue-400 transition-colors">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
