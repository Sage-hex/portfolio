// import Biography from "../components/sections/Biography";
// import FeaturedProjects from "../components/sections/FeaturedProjects";
// import Hero from "../components/sections/Hero";
// import Services from "../components/sections/Services";
// import WhatIDo from "../components/sections/WhatIDo";

// const Home = () => (
//   <>
//     <Hero />
//     <WhatIDo/>
//     {/* <Biography/> */}
//     {/* <Services/> */}
//     {/* <FeaturedProjects/> */}
//   </>
// );

// export default Home;



import Biography from "../components/sections/Biography";
import BlogPreview from "../components/sections/BlogPreview";
import CodeSnippet from "../components/sections/CodeSnippets";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import HeroSection from "../components/sections/Hero";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import WhatIDoSection from "../components/sections/WhatIDo";
import WhatIDo from "../components/sections/WhatIDo";
const Home = () => {
  return (
    // <main className="bg-[#1e1e1e] w-full md:w-[85%] flex flex-col items-center justify-center min-h-screen text-white font-sans">
      <main className="flex flex-col w-[90%] items-center justify-center min-h-screen  text-white font-sans transition-colors duration-500">
      <HeroSection/>
      {/* <WhatIDoSection/> */}
      <FeaturedProjects/>
      <CodeSnippet/>
      <BlogPreview/>
    </main>
  );
};

export default Home;
