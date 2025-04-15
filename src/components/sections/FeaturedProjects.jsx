import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    tag: "Web Development",
    title: "Bolder Landingpage",
    description:
      "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
    image: "/project1.png", // Add this image to your public folder
    isNew: true,
  },
  {
    id: 2,
    tag: "Web Development",
    title: "Kerja Mantul Education Management",
    description:
      "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
    image: "/project2.png", // Add this image to your public folder
    isNew: false,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="mt-20 px-4 md:px-10">
      <h2 className="text-2xl font-bold mb-8">Featured Project</h2>

      <div className="space-y-10">
        {projects.map((project) => (
          <div key={project.id} className="md:flex gap-6">
            {/* Thumbnail */}
            <div className="relative w-full md:w-1/2 bg-[#2b2b2b] rounded-lg p-4">
              {project.isNew && (
                <span className="text-xs absolute top-2 left-2 bg-white text-black rounded-full px-2 py-0.5">
                  New
                </span>
              )}
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded"
              />
              <FaExternalLinkAlt className="absolute top-2 right-2 text-white/70" />
            </div>

            {/* Info */}
            <div className="mt-4 md:mt-0 md:w-1/2">
              <p className="text-sm text-white/50 mb-1 font-medium">{project.tag}</p>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-white/70">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See More */}
      <button className="flex items-center gap-2 text-sm mt-6 bg-[#2b2b2b] px-4 py-2 rounded-md text-white/80 hover:bg-[#3a3a3a]">
        <span className="text-lg">☰</span> See More
      </button>
    </section>
  );
};

export default FeaturedProjects;
