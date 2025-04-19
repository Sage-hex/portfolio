


// import React from 'react';
// import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

// const HeroSection = () => {
//   return (
//     <section className="min-h-screen bg-[#1a1a1a] text-white px-6 py-12 flex flex-col justify-center">
//       <div className="max-w-4xl mx-auto">
//         {/* Gradient Text */}
//         <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-12">
//           Hi Im Naufaldi, a special human<br />
//           with some ability to love learning<br />
//           and working on teamwork.
//         </h1>

//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
//           {/* Biography */}
//           <div className="flex items-start gap-5">
//             <img
//               src="https://i.ibb.co/GRjnd7H/dev-avatar.png" // Replace with your own if needed
//               alt="avatar"
//               className="w-20 h-20 rounded-full border-2 border-cyan-400"
//             />
//             <div>
//               <h2 className="font-bold text-lg mb-1">Biography</h2>
//               <p className="text-gray-300 max-w-md">
//                 Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team.
//                 Excited on <span className="text-blue-400 font-medium">React</span>, 
//                 <span className="text-blue-400 font-medium"> UX Research</span> and 
//                 <span className="text-green-400 font-medium"> Agile</span>.
//               </p>
//             </div>
//           </div>

//           {/* Socials */}
//           <div>
//             <h2 className="font-bold text-lg mb-2">Lets connect</h2>
//             <div className="flex gap-5 text-2xl text-white">
//               <a href="#" aria-label="Instagram"><FaInstagram /></a>
//               <a href="#" aria-label="Twitter"><FaTwitter /></a>
//               <a href="#" aria-label="Facebook"><FaFacebook /></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import React, { useState, useEffect } from 'react';
// import { FaInstagram, FaTwitter, FaFacebook, FaSun, FaMoon } from 'react-icons/fa';

// const HeroSection = () => {
// //   const [darkMode, setDarkMode] = useState(true);

// //   useEffect(() => {
// //     const root = window.document.documentElement;
// //     if (darkMode) {
// //       root.classList.add('dark');
// //     } else {
// //       root.classList.remove('dark');
// //     }
// //   }, [darkMode]);

// //   const toggleTheme = () => setDarkMode(!darkMode);

//   return (
//     <section className="w-full min-h-screen border-2 border-green-400 flex flex-col justify-center bg-white text-black dark:bg-[#1a1a1a] dark:text-white transition-colors duration-500">
//       <div className="max-w-7xl mx-auto w-full border-2 border-green-400">

        
//         {/* Gradient Text */}
//         <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-20">
//           Hi Im Naufaldi, a special human<br />
//           with some ability to love learning<br />
//           and working on teamwork.
//         </h1>

//         <div className="flex flex-col sm:flex-row items-start sm:items-center  gap-40">
//           {/* Biography */}
//           <div className=" w-[60%] border-2 border-green-600 flex items-start gap-10">
//             {/* <img
//               src="/avatar.jpg"
//               alt="avatar"
//               className="w-[8rem] h-[8rem] rounded-full border-[7px] border-bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-20"
//             /> */}
//             <div className="relative w-[8rem] h-[8rem] mb-20 rounded-full p-[4px] bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 animate-glow">
//   <img
//     src="/avatar.jpg"
//     alt="avatar"
//     className="w-full h-full rounded-full object-cover"
//   />
// </div>
//             <div>
//               <h2 className="text-2xl mb-1 font-semibold">Biography</h2>
//               <p className="text-gray-700 dark:text-gray-300 max-w-lg text-lg leading-7 font-normal">
//                 Getting Buff +1 for learning, Buff +2 for documentation <br /> and more buff on managing team.
//                 Excited on <span className="text-blue-500 font-semibold">React</span>, 
//                 <span className="text-[#62D9FF] leading-6 font-semibold"> UX Research</span> and 
//                 <span className="text-[#80FFA3] font-semibold"> Agile</span>.
//               </p>
//             </div>
//           </div>

//           {/* Socials */}
//           <div>
//             <h2 className="font-bold text-lg mb-2">Lets connect</h2>
//             <div className="flex gap-5 text-2xl">
//               <a href="#" aria-label="Instagram"><FaInstagram /></a>
//               <a href="#" aria-label="Twitter"><FaTwitter /></a>
//               <a href="#" aria-label="Facebook"><FaFacebook /></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import React, { useState, useEffect } from 'react';
// import { FaInstagram, FaTwitter, FaFacebook, FaSun, FaMoon } from 'react-icons/fa';

// const HeroSection = () => {
//   const [darkMode, setDarkMode] = useState(true);
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

//   // Handle dark mode
//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (darkMode) {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const toggleTheme = () => setDarkMode(!darkMode);

//   return (
//     <section className="w-full min-h-screen flex flex-col justify-center bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 p-4 md:p-8">
//       {/* Theme toggle button - fixed position */}
//       <button 
//         onClick={toggleTheme} 
//         className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
//         aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//       >
//         {darkMode ? <FaSun /> : <FaMoon />}
//       </button>

//       {/* Mobile Layout */}
//       {isMobile ? (
//         <div className="max-w-md mx-auto flex flex-col items-center text-center">
//           {/* Avatar with gradient border */}
//           <div className="relative w-20 h-20 mb-4">
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400"></div>
//             <div className="absolute inset-[2px] rounded-full bg-white dark:bg-black flex items-center justify-center">
//               <img
//                 src="/avatar.jpg"
//                 alt="Profile"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </div>
          
//           {/* Social Media Icons */}
//           <div className="flex gap-4 mb-6">
//             <a href="#" aria-label="Instagram" className="text-gray-700 dark:text-gray-300">
//               <FaInstagram />
//             </a>
//             <a href="#" aria-label="Twitter" className="text-gray-700 dark:text-gray-300">
//               <FaTwitter />
//             </a>
//             <a href="#" aria-label="Facebook" className="text-gray-700 dark:text-gray-300">
//               <FaFacebook />
//             </a>
//           </div>
          
//           {/* Gradient Text */}
//           <h1 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">
//             Hi I'm Naufaldi, a special human with some ability to love learning and working on teamwork.
//           </h1>
          
//           {/* Biography Section */}
//           <div className="text-left w-full mt-2">
//             <h2 className="font-medium text-lg mb-2">Biography</h2>
//             <p className="text-gray-700 dark:text-gray-400 text-sm">
//               Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Excited on <span className="text-blue-500">React</span>, <span className="text-blue-300">UX Research</span> and <span className="text-green-400">Agile Development</span>.
//             </p>
//           </div>
//         </div>
//       ) : (
//         /* Desktop Layout */
//         <div className="max-w-7xl mx-auto w-full">
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-16">
//             Hi I'm Naufaldi, a special human<br />
//             with some ability to love learning<br />
//             and working on teamwork.
//           </h1>
          
//           <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-24">
//             {/* Biography with Avatar */}
//             <div className="flex items-start gap-8 flex-1">
//               <div className="relative w-32 h-32 rounded-full">
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400"></div>
//                 <div className="absolute inset-1 rounded-full bg-white dark:bg-black flex items-center justify-center">
//                   <img
//                     src="/avatar.jpg"
//                     alt="Profile"
//                     className="w-full h-full rounded-full object-cover"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <h2 className="text-2xl mb-2 font-semibold">Biography</h2>
//                 <p className="text-gray-700 dark:text-gray-300 max-w-lg text-lg">
//                   Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team.
//                   Excited on <span className="text-blue-500 font-semibold">React</span>, 
//                   <span className="text-blue-300 dark:text-blue-300 font-semibold"> UX Research</span> and 
//                   <span className="text-green-400 font-semibold"> Agile Development</span>.
//                 </p>
//               </div>
//             </div>
            
//             {/* Socials */}
//             <div>
//               <h2 className="font-bold text-lg mb-2">Let's connect</h2>
//               <div className="flex gap-5 text-2xl">
//                 <a href="#" aria-label="Instagram" className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors">
//                   <FaInstagram />
//                 </a>
//                 <a href="#" aria-label="Twitter" className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors">
//                   <FaTwitter />
//                 </a>
//                 <a href="#" aria-label="Facebook" className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors">
//                   <FaFacebook />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default HeroSection;




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
//     // <section className="w-full min-h-screen flex flex-col justify-center  bg-black text-white transition-colors duration-500 p-4 md:p-8">
//     <section className="border-2 border-red-950 w-full min-h-screen flex flex-col justify-center bg-white text-black dark:bg-[#1a1a1a] dark:text-white transition-colors duration-500">
//       {/* Mobile Layout */}
//       {isMobile ? (
//         <div className="max-w-md mx-auto flex px-4 py-4 flex-col items-center text-center">
//           {/* Avatar with gradient border */}
//           <div className="relative w-20 h-20 mb-4">
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400"></div>
//             <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
//               <img
//                 src="/avatar.jpg"
//                 alt="Profile"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//           </div>
          
//           {/* Social Media Icons */}
//           <div className="flex gap-4 mb-6">
//             <a href="#" aria-label="Instagram" className="text-gray-300">
//               <FaInstagram />
//             </a>
//             <a href="#" aria-label="Twitter" className="text-gray-300">
//               <FaTwitter />
//             </a>
//             <a href="#" aria-label="Facebook" className="text-gray-300">
//               <FaLinkedin />
//             </a>
//           </div>
          
//           {/* Gradient Text */}
//           <h1 className="text-xl  font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">
//             Hi I'm Naufaldi, a special human with some ability to love learning and working on teamwork.
//           </h1>
          
//           {/* Biography Section */}
//           <div className="text-left w-full mt-2">
//             <h2 className="font-medium text-lg mb-2">Biography</h2>
//             <p className="text-gray-400 text-sm">
//               Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Excited on <span className="text-blue-500">React</span>, <span className="text-blue-300">UX Research</span> and <span className="text-green-400">Agile Development</span>.
//             </p>
//           </div>
//         </div>
//       ) : (
//         /* Desktop Layout */
//         <div className="border-2 border-green-400 max-w-7xl mx-auto w-full">
//           <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-16">
//             Hi I'm Emmanuel, a special human<br />
//             with some ability to love learning<br />
//             and working on teamwork.
//           </h1>
          
//           <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-24 ">
//             {/* Biography with Avatar */}
//             <div className="flex items-start gap-8 flex-1">
//               <div className="relative w-32 h-32 rounded-full">
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400"></div>
//                 <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
//                   <img
//                     src="/avatar.jpg"
//                     alt="Profile"
//                     className="w-full h-full rounded-full object-cover"
//                   />
//                 </div>
//               </div>
              
//               <div className=''>
//                 <h2 className="text-2xl mb-2 font-semibold">Biography</h2>
//                 <p className="text-gray-300 max-w-lg text-lg">
//                   Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team.
//                   Excited on <span className="text-blue-500 font-semibold">React</span>, 
//                   <span className="text-blue-300 font-semibold"> UX Research</span> and 
//                   <span className="text-green-400 font-semibold"> Agile Development</span>.
//                 </p>
//               </div>
//             </div>
            
//             {/* Socials */}
//             <div>
//               <h2 className="font-bold text-lg mb-2">Let's connect</h2>
//               <div className="flex gap-5 text-4xl">
//                 <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-blue-400 transition-colors">
//                   <FaInstagram />
//                 </a>
//                 <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-blue-400 transition-colors">
//                   <FaTwitter />
//                 </a>
//                 <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-blue-400 transition-colors">
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
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
    <section className="relative overflow-hidden w-full min-h-screen flex flex-col justify-center text-black transition-colors duration-500">
      {/* 🔮 Bubble Glow Top */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-300 rounded-full blur-3xl opacity-30 animate-bubbleGlow z-0"></div> */}

      {/* 🔮 Bubble Glow Bottom */}
      {/* <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 via-teal-500 to-green-300 rounded-full blur-[5rem] opacity-30 animate-bubbleGlow z-0"></div> */}

      {/* Main content */}
      <div className="relative z-10">
        {/* Mobile Layout */}
        {isMobile ? (
          <div className="max-w-md mx-auto flex px-4 py-4 flex-col items-center text-center">
            {/* Avatar with gradient border */}
            <div className="relative w-20 h-20 mb-4">
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
            <div className="flex gap-4 mb-6">
              <a href="#" aria-label="Instagram" className="text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300">
                <FaLinkedin />
              </a>
            </div>
            
            {/* Gradient Text */}
            <h1 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">
              Hi I'm Naufaldi, a special human with some ability to love learning and working on teamwork.
            </h1>
            
            {/* Biography Section */}
            <div className="text-left w-full mt-2">
              <h2 className="font-medium text-lg mb-2 font-semibold text-black dark:text-white">Biography</h2>
              <p className="text-gray-400 text-sm">
                Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Excited on <span className="text-blue-500">React</span>, <span className="text-blue-300">UX Research</span> and <span className="text-green-400">Agile Development</span>.
              </p>
            </div>
          </div>
        ) : (
          /* Desktop Layout */
          <div className="border-2 border-green-400 max-w-7xl mx-auto w-full">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-16">
              Hi I'm Emmanuel, a special human<br />
              with some ability to love learning<br />
              and working on teamwork.
            </h1>
            
            <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-24">
              {/* Biography with Avatar */}
              <div className="flex items-start gap-8 flex-1">
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
                  <p className="text-gray-300 max-w-lg text-lg">
                    Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team.
                    Excited on <span className="text-blue-500 font-semibold">React</span>, 
                    <span className="text-blue-300 font-semibold"> UX Research</span> and 
                    <span className="text-green-400 font-semibold"> Agile Development</span>.
                  </p>
                </div>
              </div>
              
              {/* Socials */}
              <div>
                <h2 className="font-bold text-lg mb-2 text-black dark:text-white">Let's connect</h2>
                <div className="flex gap-5 text-4xl">
                  <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-blue-400 transition-colors">
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
