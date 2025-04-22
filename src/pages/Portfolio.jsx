import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

// Replace this with your actual image path in `public`
const arrowImage = "/arrow.png";

const projects = [
  {
    id: 1,
    title: 'Bolder Landingpage',
    category: 'Web Development',
    description:
      'Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.',
    image: '/avatar.jpg',
    isNew: true,
  },
  {
    id: 2,
    title: 'Kerja Mantul Education Management',
    category: 'Web Development',
    description:
      'Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.',
    image: '/avatar.jpg',
    isNew: false,
  },
];

// const Portfolio = () => {
//   return (
//     <div className=" w-[90%] text-white px-6 py-16 space-y-14 min-h-screen">
//       {/* Top Custom Heading */}

// <div className="relative  pt-6 md:pt-10 ml-2 md:ml-6 mb-12 md:mb-20">
//         <div className="relative inline-block">
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//             Projects <span className="lowercase">I've</span><br />
//             <span className="text-green-400">worked</span> on!
//           </h1>
//           <img
//             src="/arrow.png"
//             alt="Curved arrow"
//             className="absolute -right-20 md:-right-40 top-0 w-16 md:w-24 transform rotate-0  sm:block"
//           />
//         </div>
//       </div>

//       {/* Featured Projects Section */}
//       <div className="max-w-6xl mx-auto space-y-14">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="flex flex-col md:flex-row gap-6 items-start"
//           >
//             {/* Image Section */}
//             <div className="relative w-full max-w-md md:w-1/2 rounded-md overflow-hidden bg-[#2d2e42] p-1">
//               {project.isNew && (
//                 <span className="absolute top-2 left-2 text-xs font-bold text-white bg-pink-500 rounded px-2 py-0.5">
//                   NEW!
//                 </span>
//               )}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-[180px] object-cover rounded"
//               />
//               <a
//                 href="#"
//                 className="absolute top-2 right-2 bg-white text-black p-1 rounded"
//               >
//                 <FaArrowUpRightFromSquare className="w-4 h-4" />
//               </a>
//             </div>

//             {/* Text Section */}
//             <div className="md:w-1/2 space-y-2">
//               <p className="uppercase text-sm text-gray-400">{project.category}</p>
//               <h3 className="text-lg md:text-2xl font-bold leading-snug">
//                 {project.title}
//               </h3>
//               <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
//                 {project.description}
//               </p>
//             </div>
//           </div>
//         ))}
      
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

const Portfolio = () => {
  return (
    <div className="w-[90%] text-white px-6 py-16 space-y-14 min-h-screen">
      {/* Top Custom Heading */}
      <div className="relative pt-6 md:pt-10 ml-2 md:ml-6 mb-12 md:mb-20">
        <div className="relative inline-block">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-300">
            Projects <span className="lowercase">I've</span><br />
            <span className="text-green-400">worked</span> on!
          </h1>
          <img
            src="/arrow.png"
            alt="Curved arrow"
            className="absolute -right-20 md:-right-40 top-0 w-16 md:w-24 transform rotate-0 sm:block"
          />
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="max-w-6xl mx-auto space-y-14">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Image Section */}
            <div className="relative w-full max-w-md md:w-1/2 rounded-md overflow-hidden bg-[#e0e0e0] dark:bg-[#2d2e42] p-1">
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
              <p className="uppercase text-sm text-gray-600 dark:text-gray-400">
                {project.category}
              </p>
              <h3 className="text-lg md:text-2xl font-bold leading-snug text-gray-900 dark:text-gray-300">
                {project.title}
              </h3>
              <p className="text-gray-800 text-sm md:text-lg leading-relaxed dark:text-gray-200">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;




// import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

// const projects = [
//   {
//     id: 1,
//     title: 'Bolder Landingpage',
//     category: 'Web Development',
//     description:
//       'Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.',
//     image: '/bolder-screenshot.jpg',
//     colorScheme: ['#9fd4b3', '#f0f0ef'],
//     isNew: true,
//   },
//   {
//     id: 2,
//     title: 'Kerja Mantul Education Management',
//     category: 'Web Development',
//     description:
//       'Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.',
//     image: '/kerja-screenshot.jpg',
//     colorScheme: ['#e8e9ed', '#bac3e3', '#ea4335'],
//     isNew: false,
//   },
// ];

// const Portfolio = () => {
//   return (
//     <div className="bg-[#1a1a1a] w-full text-white px-4 md:px-6 py-12 md:py-16 space-y-10 md:space-y-14 min-h-screen">
//       {/* Mobile Responsive Top Heading */}
//       <div className="relative w-full pt-6 md:pt-10 ml-2 md:ml-6 mb-12 md:mb-20">
//         <div className="relative inline-block">
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//             Project that <span className="lowercase">i</span><br />
//             has been <span className="text-green-400">done</span>
//           </h1>
//           <img
//             src="/arrow.png"
//             alt="Curved arrow"
//             className="absolute -right-12 md:-right-20 top-0 w-16 md:w-24 transform rotate-0 hidden sm:block"
//           />
//         </div>
//       </div>

//       {/* Featured Projects Section */}
//       <div className="max-w-6xl mx-auto space-y-10 md:space-y-14">
//         {projects.map((project, index) => (
//           <div
//             key={project.id}
//             className="flex flex-col md:flex-row gap-6 md:gap-8 items-start"
//           >
//             {/* Image Section */}
//             <div className="relative w-full md:w-1/2 rounded-md overflow-hidden bg-[#2d2e42] p-3 md:p-4">
//               {project.isNew && (
//                 <div className="absolute top-4 md:top-6 left-4 md:left-6 text-xs font-bold z-10">
//                   <div className="text-white font-bold italic">
//                     NOW!
//                   </div>
//                 </div>
//               )}
              
//               {/* Color scheme dots */}
//               <div className="flex gap-2 my-2 ml-1 md:ml-2">
//                 {project.colorScheme.map((color, index) => (
//                   <div 
//                     key={index} 
//                     className="w-3 h-3 md:w-4 md:h-4 rounded-sm" 
//                     style={{ backgroundColor: color }}
//                   ></div>
//                 ))}
//               </div>
              
//               {/* Screenshot */}
//               <div className="relative w-full">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 md:h-64 object-cover rounded border border-gray-700"
//                 />
//                 <a
//                   href="#"
//                   className="absolute top-2 right-2 bg-gray-700 p-1.5 md:p-2 rounded-md hover:bg-gray-600"
//                 >
//                   <FaArrowUpRightFromSquare className="w-3 h-3 md:w-4 md:h-4" />
//                 </a>
//               </div>
//             </div>

//             {/* Text Section */}
//             <div className="md:w-1/2 space-y-3 md:space-y-4 pt-4 md:pt-6">
//               <p className="text-sm md:text-base text-gray-400">{project.category}</p>
//               <h3 className="text-2xl md:text-4xl font-bold leading-tight">
//                 {project.title}
//               </h3>
//               <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-1 md:mt-2">
//                 {project.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;