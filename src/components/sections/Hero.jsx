


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


import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaSun, FaMoon } from 'react-icons/fa';

const HeroSection = () => {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (darkMode) {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <section className="w-[90%] min-h-screen border-2 border-green-400 flex flex-col justify-center bg-white text-black dark:bg-[#1a1a1a] dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full border-2 border-green-400">

        
        {/* Gradient Text */}
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-20">
          Hi Im Naufaldi, a special human<br />
          with some ability to love learning<br />
          and working on teamwork.
        </h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center  gap-40">
          {/* Biography */}
          <div className=" w-[60%] border-2 border-green-600 flex items-start gap-10">
            {/* <img
              src="/avatar.jpg"
              alt="avatar"
              className="w-[8rem] h-[8rem] rounded-full border-[7px] border-bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-20"
            /> */}
            <div className="relative w-[8rem] h-[8rem] mb-20 rounded-full p-[4px] bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 animate-glow">
  <img
    src="/avatar.jpg"
    alt="avatar"
    className="w-full h-full rounded-full object-cover"
  />
</div>
            <div>
              <h2 className="text-2xl mb-1 font-semibold">Biography</h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-lg text-lg leading-7 font-normal">
                Getting Buff +1 for learning, Buff +2 for documentation <br /> and more buff on managing team.
                Excited on <span className="text-blue-500 font-semibold">React</span>, 
                <span className="text-[#62D9FF] leading-6 font-semibold"> UX Research</span> and 
                <span className="text-[#80FFA3] font-semibold"> Agile</span>.
              </p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h2 className="font-bold text-lg mb-2">Lets connect</h2>
            <div className="flex gap-5 text-2xl">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
