import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    tag: "Frontend Dev",
    title: "Create a modern website using Tailwind CSS",
    desc: "Learn how to design responsive websites using Tailwind utility classes without writing custom CSS.",
  },
  {
    id: 2,
    tag: "Tips",
    title: "How to improve your frontend projects",
    desc: "Simple ways to add structure, responsiveness, and interactivity that make your frontend work stand out.",
  },
];

const BlogPreview = () => {
  return (
    <section className="mt-20 px-4 md:px-10">
      <h2 className="text-2xl font-bold mb-6">Blog Preview</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-[#2b2b2b] p-6 rounded-xl">
            <p className="text-xs text-white/50 mb-2">{blog.tag}</p>
            <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-white/70 mb-4">{blog.desc}</p>
            <FaArrowRight className="text-white/60 hover:translate-x-1 transition-transform" />
          </div>
        ))}
      </div>

      <button className="flex items-center gap-2 text-sm mt-6 bg-[#2b2b2b] px-4 py-2 rounded-md text-white/80 hover:bg-[#3a3a3a]">
        <span className="text-lg">☰</span> See More
      </button>
    </section>
  );
};

export default BlogPreview;
