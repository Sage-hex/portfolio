// import { NavLink } from "react-router-dom";

// const navItems = ["Home", "Mentorship", "Portfolio", "Snippet", "Blog"];

// const Navbar = () => (
//   <header className="w-full py-6 border-b border-white/10 px-4 lg:px-12">
//     <div className="max-w-7xl mx-auto flex items-center justify-between">
//       <h1 className="text-white font-bold text-lg">Naufaldi</h1>
//       <nav className="space-x-6 text-sm font-medium text-gray-300">
//         {navItems.map((item) => (
//           <NavLink
//             key={item}
//             to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//             className={({ isActive }) =>
//               isActive ? "text-white" : "hover:text-white transition"
//             }
//           >
//             {item}
//           </NavLink>
//         ))}
//       </nav>
//     </div>
//   </header>
// );

// export default Navbar;


// import { NavLink } from "react-router-dom";
// const navItems = ["Home", "Mentorship", "Portfolio", "Snippet", "Blog"];

// const Header = () => {
//   return (
//     <header className="hidden w-[100%]  py-6 px-4 md:px-10 md:flex justify-center items-center ">
//         <section className="w-[90%] border-b border-white/10 md:flex justify-between boder-2 border-red-500  bg-white dark:bg-[#1a1a1a] dark:text-black transition-colors duration-500  items-center ">
//       <div className="text-white font-semibold text-3xl">Emmanuel :)</div>
//       <nav className="hidden md:flex gap-14 text-lg text-white/70">
//         {navItems.map((item) => (
//           <NavLink
//             key={item}
//             to={`/${item.toLowerCase()}`}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-white border-b-2 border-white pb-1"
//                 : "hover:text-white transition-colors"
//             }
//           >
//             {item}
//           </NavLink>
//         ))}
//       </nav>
            
//         </section>
//     </header>
//   );
// };

// export default Header;



// import { NavLink } from "react-router-dom";
// import ThemeToggle from "../../utils/ThemeToggle"; // Make sure the path is correct

// const navItems = ["Home", "Mentorship", "Portfolio", "Snippet", "Blog"];

// const Header = () => {
//   return (
//     <header className="hidden lg:flex w-full py-6 px-4  border-2 border-red-600 md:px-10">
//       <section className="w-full h-full mx-auto flex justify-between items-center 
//                          border-b border-white/10 dark:border-white/20 
//                          bg-white dark:bg-[#1a1a1a] 
//                          transition-colors duration-500">
                         
//         {/* Logo */}
//         <div className="text-black dark:text-white font-semibold text-3xl">
//           Emmanuel :)
//         </div>

//         {/* Navigation + Toggle */}
//         <div className="flex items-center gap-10">
//           <nav className="hidden md:flex gap-14 text-lg">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item}
//                 to={`/${item.toLowerCase()}`}
//                 className={({ isActive }) => `
//                   ${isActive 
//                     ? 'text-black dark:text-white border-b-2 border-black dark:border-white pb-1' 
//                     : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors'
//                   }
//                 `}
//               >
//                 {item}
//               </NavLink>
//             ))}
//           </nav>

//           {/* Theme Toggle */}
//           <ThemeToggle />
//         </div>
//       </section>
//     </header>
//   );
// };

// export default Header;



import { NavLink } from "react-router-dom";
import ThemeToggle from "../../utils/ThemeToggle"; // Make sure the path is correct

const navItems = ["Home", "Mentorship", "Portfolio", "Snippets", "Blog"];

const Header = () => {
  return (
    <header className="hidden md:flex w-full py-4 px-4 md:px-8 lg:px-12">
      <section className="w-full mx-auto flex justify-between items-center 
                          border-b border-white/10 dark:border-white/20 
                          bg-white dark:bg-[#1a1a1a] 
                          transition-colors duration-500 rounded-xl shadow-sm p-4 md:p-6 lg:p-8">
        
        {/* Logo */}
        <div className="text-black dark:text-white font-semibold text-2xl md:text-3xl">
          Emmanuel
        </div>

        {/* Navigation + Toggle */}
        <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
          <nav className="hidden md:flex gap-4 md:gap-8 text-sm md:text-base lg:text-lg font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-black dark:text-white border-b-2 border-black dark:border-white pb-1"
                    : "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};

export default Header;
