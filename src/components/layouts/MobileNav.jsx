// // File: MobileNav.jsx
// import { NavLink } from "react-router-dom";
// import { AiFillHome } from "react-icons/ai";
// import { BsCheckSquareFill } from "react-icons/bs";
// import { PiArchiveBoxFill } from "react-icons/pi";
// import { HiOutlineDotsHorizontal } from "react-icons/hi";

// const navItems = [
//   { name: "Home", path: "/", icon: <AiFillHome size={20} /> },
//   { name: "Mentorship", path: "/mentorship", icon: <BsCheckSquareFill size={20} /> },
//   { name: "Portfolio", path: "/portfolio", icon: <PiArchiveBoxFill size={20} /> },
//   { name: "More", path: "/more", icon: <HiOutlineDotsHorizontal size={20} /> },
// ];

// const MobileNav = () => {
//   return (
//     <nav className="fixed bottom-0 z-50 w-full bg-[#1E1F26] border-t border-white/10 flex items-center justify-around py-2 md:hidden">
//       {navItems.map((item) => (
//         <NavLink
//           key={item.name}
//           to={item.path}
//           className={({ isActive }) =>
//             `flex flex-col items-center text-xs ${
//               isActive ? "text-white" : "text-white/50"
//             }`
//           }
//         >
//           {item.icon}
//           <span className="text-[11px] mt-1">{item.name}</span>
//         </NavLink>
//       ))}
//     </nav>
//   );
// };

// export default MobileNav;


// File: MobileNav.jsx
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsCheckSquareFill } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiCodeSSlashFill } from "react-icons/ri";
import ThemeToggle from "../../utils/ThemeToggle"; // adjust path if needed

const navItems = [
  { name: "Home", path: "/", icon: <AiFillHome size={20} /> },
  { name: "Mentorship", path: "/mentorship", icon: <BsCheckSquareFill size={20} /> },
  { name: "Portfolio", path: "/portfolio", icon: <CiBookmarkCheck  size={20} /> },
  { name: "Snippet", path: "/snippet", icon: <RiCodeSSlashFill size={20} /> },
  { name: "More", path: "/more", icon: <HiOutlineDotsHorizontal size={20} /> },
];

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 z-50 w-full bg-[#1E1F26] border-t border-white/10 flex items-center justify-around py-2 md:hidden">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-white" : "text-white/50"
            }`
          }
        >
          {item.icon}
          <span className="text-[11px] mt-1">{item.name}</span>
        </NavLink>
      ))}

      {/* Theme Toggle */}
      <div className="flex flex-col items-center">
        <ThemeToggle />
        <span className="text-[11px] text-white/50 mt-1">Theme</span>
      </div>
    </nav>
  );
};

export default MobileNav;
