// import { FaExternalLinkAlt } from "react-icons/fa";

// const projects = [
//   {
//     id: 1,
//     tag: "Web Development",
//     title: "Bolder Landingpage",
//     description:
//       "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
//     image: "/avatar.jpg", // Add this image to your public folder
//     isNew: true,
//   },
//   {
//     id: 2,
//     tag: "Web Development",
//     title: "Kerja Mantul Education Management",
//     description:
//       "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
//     image: "/avatar.jpg", // Add this image to your public folder
//     isNew: false,
//   },
// ];

// const FeaturedProjects = () => {
//   return (
//     <section className="mt-20 px-4 md:px-10">
//       <h2 className="text-2xl font-bold mb-8">Featured Project</h2>

//       <div className="space-y-10">
//         {projects.map((project) => (
//           <div key={project.id} className="md:flex gap-6">
//             {/* Thumbnail */}
//             <div className="relative w-full md:w-1/2 border-2 border-green-400 bg-[#2b2b2b] rounded-lg p-4">
//               {project.isNew && (
//                 <span className="text-xs absolute top-2 left-2 bg-white text-black rounded-full px-2 py-0.5">
//                   New
//                 </span>
//               )}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-20 rounded"
//               />
//               <FaExternalLinkAlt className="absolute top-2 right-2 text-white/70" />
//             </div>

//             {/* Info */}
//             <div className="mt-4 md:mt-0 md:w-1/2">
//               <p className="text-sm text-white/50 mb-1 font-medium">{project.tag}</p>
//               <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//               <p className="text-sm text-white/70">{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* See More */}
//       <button className="flex items-center gap-2 text-sm mt-6 bg-[#2b2b2b] px-4 py-2 rounded-md text-white/80 hover:bg-[#3a3a3a]">
//         <span className="text-lg">☰</span> See More
//       </button>
//     </section>
//   );
// };

// export default FeaturedProjects;
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const projects = [
  {
    id: 1,
    title: 'Bolder Landingpage',
    category: 'Web Development',
    description:
      'Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.',
    image: '/avatar.jpg', // Add this image to your public folder
    isNew: true,
  },
  {
    id: 2,
    title: 'Kerja Mantul Education Management',
    category: 'Web Development',
    description:
      'Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.',
    image: '/avatar.jpg', // Add this image to your public folder
    isNew: false,
  },
];

const FeaturedProjects = () => {
  return (
    <div className=" bg-white text-black dark:bg-[#1a1a1a] dark:text-white transition-colors duration-500 px-6 py-16 space-y-10">
      <h2 className="text-3xl font-bold">Featured Project</h2>
      <div className="space-y-14">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Image Section */}
            <div className="relative w-full max-w-md md:w-1/2 rounded-md overflow-hidden bg-[#2d2e42] p-1">
              {project.isNew && (
                <span className="absolute top-2 left-2 text-xs font-bold text-white bg-pink-500 rounded px-2 py-0.5">
                  NEW!
                </span>
              )}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[180px] object-cover rounded"
              />
              <a
                href="#"
                className="absolute top-2 right-2 bg-white text-black p-1 rounded"
              >
                <FaArrowUpRightFromSquare className="w-4 h-4" />
              </a>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 space-y-2">
              <p className="uppercase text-sm text-gray-400 dark:text-gray-400">
                {project.category}
              </p>
              <h3 className="text-2xl font-bold leading-snug">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 inline-flex items-center gap-2 text-sm bg-[#2d2e42] text-white px-4 py-2 rounded shadow-sm">
        <span className="text-lg">☰</span> See More
      </button>
    </div>
  );
};

export default FeaturedProjects;
