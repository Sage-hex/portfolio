// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import ThemeToggle from "../../utils/ThemeToggle";
// import MobileNav from "./MobileNav"; // Make sure this path is correct

// const Layout = () => {
//   return (
//     <div className="min-h-screen bg-white text-black dark:bg-background dark:text-white transition-colors duration-500">
//       {/* <div className="bg-red-400"> */}
      
//     {/* Toggle placed at top */}
//       <div className="hidden md:flex justify-end p-4">
//         {/* <ThemeToggle /> */}
//       </div>

//       <Navbar />

//       <main className="flex flex-col items-center justify-center min-h-screen pb-20">
        
//       {/* <main> */}
//         <Outlet />
//       </main>

//       {/* Show Mobile Bottom Nav only on mobile */}
//       <MobileNav />
//     </div>
//   );
// };

// export default Layout;



// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import ThemeToggle from "../../utils/ThemeToggle";

// const Layout = () => {
//   return (
//     <div className="min-h-screen bg-white text-black dark:bg-background dark:text-white transition-colors duration-500">
//       {/* Toggle placed at top */}
//       <div className="flex justify-end p-4">
//         <ThemeToggle />
//       </div>

//       <Navbar />

//       <main className="flex flex-col items-center justify-center min-h-screen ">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default Layout;


// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import ThemeToggle from "../../utils/ThemeToggle";
// import MobileNav from "./MobileNav"; // Make sure this path is correct

// const Layout = () => {
//   return (
//     <div className="min-h-screen bg-white text-black dark:bg-background dark:text-white transition-colors duration-500 relative">
//       {/* Glowing Bubbles */}
      
//       {/* Top Left Bubble */}
//       <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-300 rounded-full blur-3xl opacity-30 animate-bubbleGlow z-0"></div>

//       {/* Middle Right Bubble */}
//       <div className="absolute top-1/2 right-10 w-48 h-48 bg-gradient-to-br from-blue-400 via-teal-500 to-green-300 rounded-full blur-3xl opacity-30 animate-bubbleGlow z-0 transform -translate-y-1/2"></div>

//       {/* Bottom Bubble */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-56 h-56 bg-gradient-to-br from-indigo-400 via-violet-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-bubbleGlow z-0"></div>

//       {/* Toggle placed at top */}
//       <div className="hidden md:flex justify-end p-4">
//         {/* <ThemeToggle /> */}
//       </div>

//       <Navbar />

//       <main className="flex flex-col items-center justify-center min-h-screen pb-20 relative z-10">
//         <Outlet />
//       </main>

//       {/* Show Mobile Bottom Nav only on mobile */}
//       <MobileNav />
//     </div>
//   );
// };

// export default Layout;



// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import ThemeToggle from "../../utils/ThemeToggle";
// import MobileNav from "./MobileNav"; // Make sure this path is correct

// const Layout = () => {
//   return (
//     <div className="min-h-screen bg-white text-black dark:bg-background dark:text-white transition-colors duration-500">
//       {/* <div className="bg-red-400"> */}
      
//     {/* Toggle placed at top */}
//       <div className="hidden md:flex justify-end p-4">
//         {/* <ThemeToggle /> */}
//       </div>

//       <Navbar />

//       <main className="flex flex-col items-center justify-center min-h-screen pb-20">
        
//       {/* <main> */}
//         <Outlet />
//       </main>

//       {/* Show Mobile Bottom Nav only on mobile */}
//       <MobileNav />
//     </div>
//   );
// };

// export default Layout;


import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeToggle from "../../utils/ThemeToggle";
import MobileNav from "./MobileNav"; // Make sure this path is correct

const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-background dark:text-white transition-colors duration-500 relative">
      {/* Glowing Bubbles */}
      
      {/* Top Left Bubble */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-300 rounded-full blur-3xl opacity-30 animate-bubbleGlow z-0"></div>

      {/* Middle Right Bubble */}
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-br from-blue-400 via-teal-500 to-green-300 rounded-full blur-3xl opacity-30 animate-bubbleGlow z-0 transform -translate-y-1/2"></div>

      {/* Bottom Bubble */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-gradient-to-br from-indigo-400 via-violet-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-bubbleGlow z-0"></div>

      {/* Toggle placed at top */}
      <div className="hidden md:flex justify-end p-4">
        {/* <ThemeToggle /> */}
      </div>

      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen pb-20">
        <Outlet />
      </main>

      {/* Show Mobile Bottom Nav only on mobile */}
      <MobileNav />
    </div>
  );
};

export default Layout;
