// import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

// const arrowImage = "/arrow.png";

// const projects = [
//   {
//     id: 1,
//     title: 'Bolder Landingpage',
//     category: 'Web Development',
//     description:
//       'Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.',
//     image: '/avatar.jpg',
//     isNew: true,
//   },
//   {
//     id: 2,
//     title: 'Kerja Mantul Education Management',
//     category: 'Web Development',
//     description:
//       'Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.',
//     image: '/avatar.jpg',
//     isNew: false,
//   },
// ];


// const Portfolio = () => {
//   return (
//     <div className="w-[90%] text-white px-6 py-16 space-y-14 min-h-screen">
//       {/* Top Custom Heading */}
//       <div className="relative pt-6 md:pt-10 ml-2 md:ml-6 mb-12 md:mb-20">
//         <div className="relative inline-block">
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-300">
//             Projects <span className="lowercase">I've</span><br />
//             <span className="text-green-400">worked</span> on!
//           </h1>
//           <img
//             src="/arrow.png"
//             alt="Curved arrow"
//             className="absolute -right-20 md:-right-40 top-0 w-16 md:w-24 transform rotate-0 sm:block"
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
//             <div className="relative w-full max-w-md md:w-1/2 rounded-md overflow-hidden bg-[#e0e0e0] dark:bg-[#2d2e42] p-1">
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
//               <p className="uppercase text-sm text-gray-600 dark:text-gray-400">
//                 {project.category}
//               </p>
//               <h3 className="text-lg md:text-2xl font-bold leading-snug text-gray-900 dark:text-gray-300">
//                 {project.title}
//               </h3>
//               <p className="text-gray-800 text-sm md:text-lg leading-relaxed dark:text-gray-200">
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




import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { projects } from '../components/data/projectsData';
const arrowImage = "/arrow.png";

// const projects = [
//   {
//     id: 1,
//     title: 'Bolder Landingpage',
//     category: 'Web Development',
//     description:
//       'Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.',
//     image: '/avatar.jpg',
//     isNew: true,
//   },
//   {
//     id: 2,
//     title: 'Kerja Mantul Education Management',
//     category: 'Web Development',
//     description:
//       'Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.',
//     image: '/avatar.jpg',
//     isNew: false,
//   },
// ];

const Portfolio = () => {
  return (
    <div className="w-[90%] text-white px-6 py-16 space-y-14 min-h-screen">
      {/* Top Custom Heading */}
      <div
        className="relative pt-6 md:pt-10 ml-2 md:ml-6 mb-12 md:mb-20"
        data-aos="fade-down" // Animation applied here
      >
        <div className="relative inline-block">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-300">
            Projects <span className="lowercase">I've</span><br />
            <span className="text-green-400">worked</span> on!
          </h1>
          <img
            src={arrowImage} // Use the imported arrow image variable
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
            data-aos="fade-up" // Animation applied to project cards here
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
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
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
