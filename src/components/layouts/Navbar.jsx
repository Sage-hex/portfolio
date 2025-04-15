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


import { NavLink } from "react-router-dom";
const navItems = ["Home", "Mentorship", "Portfolio", "Snippet", "Blog"];

const Header = () => {
  return (
    <header className="hidden w-[100%]  py-6 px-4 md:px-10 md:flex justify-center items-center">
        <section className="w-[90%] border-b border-white/10 md:flex justify-between  items-center">
      <div className="text-white font-semibold text-3xl">Emmanuel :)</div>
      <nav className="hidden md:flex gap-14 text-lg text-white/70">
        {navItems.map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-1"
                : "hover:text-white transition-colors"
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>
            
        </section>
    </header>
  );
};

export default Header;
