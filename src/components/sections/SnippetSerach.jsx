import { FaSearch } from "react-icons/fa";

const SnippetSearch = () => {
  return (
    <section className="bg-[#1e1e1e] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-2">Code Snippet</h1>
        <p className="text-sm font-medium text-gray-300 mb-6">Search code snippet</p>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Type your favorite snippet here, hehehe ....."
            className="w-full bg-[#3a3b4f] text-gray-300 placeholder-gray-400 rounded-md py-3 px-4 pr-12 outline-none focus:ring-2 focus:ring-white/20"
          />
          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-80" />
        </div>

        {/* Snippet Card Container */}
        <div className="mt-10 grid gap-6">
          {/* Replace below with your actual card component(s) */}
          {/* <SnippetCard /> */}
        </div>
      </div>
    </section>
  );
};

export default SnippetSearch;
