import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { projects } from '../data/projectsData';
import { Link } from 'react-router-dom';

// const projects = [
//   {
//     id: 1,
//     title: 'Bolder Landingpage',
//     category: 'Web Development',
//     description:
//       'Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.',
//     image: '/avatar.jpg', // Add this image to your public folder
//     isNew: true,
//   },
//   {
//     id: 2,
//     title: 'Kerja Mantul Education Management',
//     category: 'Web Development',
//     description:
//       'Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.',
//     image: '/avatar.jpg', // Add this image to your public folder
//     isNew: false,
//   },
// ];

const FeaturedProjects = () => {
  return (
    <div className="text-black dark:text-white transition-colors duration-500 px-6 py-16 space-y-10">
      <h2 className="text-2xl md:text-3xl font-bold" data-aos="fade-up">
        Featured Project
      </h2>
      <div className="space-y-14">
        {projects.slice(0,3).map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row gap-6 items-start"
            data-aos="fade-up"
            data-aos-delay={`${project.id * 100}`} // Delay each project animation slightly
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
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className="absolute top-2 right-2 bg-white text-black p-1 rounded"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <FaArrowUpRightFromSquare className="w-4 h-4" />
              </a>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 space-y-2">
              <p className="uppercase text-sm text-gray-400 dark:text-gray-400">
                {project.category}
              </p>
              <h3 className="text-lg md:text-2xl font-bold leading-snug">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

        <Link to="/portfolio">
      <button
        className="mt-4 inline-flex items-center gap-2 text-sm bg-[#2d2e42] text-white px-4 py-2 rounded shadow-sm"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <span className="text-lg">☰</span> See More
      </button>
      </Link>
    </div>
  );
};

export default FeaturedProjects;
