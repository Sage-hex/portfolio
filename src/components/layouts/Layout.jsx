
import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ThemeToggle from "../../utils/ThemeToggle";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import LoadingSpinner from "../../utils/LoadingSpinner";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Handle route change loading
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);
    
    handleStart();
    setTimeout(() => {
      handleStop();
    }, 3000);
    
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen text-black bg-[#f5f5f5] dark:bg-[#0E0E0E] dark:text-white transition-colors duration-500 relative">
      {/* Glowing Bubbles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-300 rounded-full blur-3xl opacity-30 animate-bubbleGlow z-0"></div>
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-br from-blue-400 via-teal-500 to-green-300 rounded-full blur-3xl opacity-30 animate-bubbleGlow z-0 transform -translate-y-1/2"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-gradient-to-br from-indigo-400 via-violet-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-bubbleGlow z-0"></div>

      <div className="hidden md:flex justify-end p-4">
        {/* <ThemeToggle /> */}
      </div>

      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen pb-20">
        {loading && <LoadingSpinner />}
        <Outlet />
      </main>

      <MobileNav />
      <Footer/>
      <ScrollRestoration /> {/* Add the ScrollRestoration component */}
    </div>
  );
};

export default Layout;