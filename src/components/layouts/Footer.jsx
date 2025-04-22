// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// const Footer = () => (
//   <footer className="bg-[#1e1e1e] text-white py-10 border-t border-gray-700">
//     <div className="flex flex-col items-center space-y-6">
//       {/* Top Links */}
//       <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-medium">
//         <a href="#" className="hover:underline">Docs</a>
//         <a href="#" className="hover:underline">Book Notes</a>
//         <a href="#" className="hover:underline">Polywork</a>
//         <a href="#" className="hover:underline">Starter Template</a>
//         <a href="#" className="hover:underline">Statistics</a>
//       </div>

//       {/* Social Links */}
//       <div className="text-center space-y-3">
//         <p className="text-sm font-medium text-gray-300">Reach me out</p>
//         <div className="flex justify-center space-x-6 text-xl">
//           <a href="#" className="hover:text-gray-400"><FaGithub /></a>
//           <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
//           <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
//         </div>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;


import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="hidden md:block relative bg-gray-300 dark:bg-[#0E0E0E]  text-white py-10 border-t border-gray-700">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-sm font-medium text-gray-300 dark:text-[#f5f5f5]  text-[#0E0E0E] text-4xl font-semibold">Follow me on</p>
        <div className="flex space-x-6 text-xl">
          <a href="#" className="hover:text-gray-400 dark:text-[#f5f5f5]  text-[#0E0E0E] text-3xl "><FaGithub /></a>
          <a href="#" className="hover:text-gray-400 dark:text-[#f5f5f5]  text-[#0E0E0E] text-3xl "><FaLinkedin /></a>
          <a href="#" className="hover:text-gray-400 dark:text-[#f5f5f5]  text-[#0E0E0E]  text-3xl"><FaTwitter /></a>
        </div>
        <p className="text-xs text-gray-500 mt-4 dark:text-[#f5f5f5]  text-[#0E0E0E] ">&copy; {year}</p>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 text-white text-xl p-3 rounded-full bg-[#333] hover:bg-[#444] shadow-lg transition hover:shadow-[0_0_15px_#fff] animate-pulse"
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
