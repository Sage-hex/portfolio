// import Navbar from "./Navbar";
// import { Outlet } from "react-router-dom";

// const Layout = () => (
//   <div className="min-h-screen bg-background text-white">
//     <Navbar />
//     {/* <main className="px-4 lg:px-12 py-8 max-w-7xl mx-auto"> */}
//     <main>
//       <Outlet />
//     </main>
//   </div>
// );

// export default Layout;


import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeToggle from "../../utils/ThemeToggle";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-background dark:text-white transition-colors duration-500">
      {/* Toggle placed at top */}
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>

      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
