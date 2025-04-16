import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeToggle from "../../utils/ThemeToggle";
import MobileNav from "./MobileNav"; // Make sure this path is correct

const Layout = () => {
  return (
    // <div className="min-h-screen bg-white text-black dark:bg-background dark:text-white transition-colors duration-500">
      <div className="bg-red-400">
    {/* Toggle placed at top */}
      <div className="hidden md:flex justify-end p-4">
        {/* <ThemeToggle /> */}
      </div>

      <Navbar />

      {/* <main className="flex flex-col items-center justify-center min-h-screen pb-20"> */}
      <main>
        <Outlet />
      </main>

      {/* Show Mobile Bottom Nav only on mobile */}
      <MobileNav />
    </div>
  );
};

export default Layout;



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
