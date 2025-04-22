import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SnippetCard from "../components/sections/SnippetCards";
import { snippets as snippetData } from "../components/data/snippetsData";

const Snippet = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSnippets = snippetData.filter(snippet => {
    const titleMatch = snippet.title.toLowerCase().includes(searchTerm.toLowerCase());
    const descMatch = snippet.description.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || descMatch;
  });

  return (
    <section className="w-full bg-gray-100 dark:bg-[#0E0E0E] text-gray-900 dark:text-white py-16 px-4 md:px-10 min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Code Snippet</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Search code snippet</p>

        {/* Search Input */}
        <div className="relative mb-10">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type your favorite snippet here..."
            className="w-full bg-white dark:bg-[#2c2e3e] text-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md py-3 px-4 pr-12 outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/10"
          />
          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 dark:text-white opacity-80" />
        </div>

        {/* Snippet Cards */}
        {filteredSnippets.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredSnippets.map((snippet, index) => (
              <SnippetCard
                key={index}
                title={snippet.title}
                description={snippet.description}
                icons={snippet.icons}
                stars={snippet.stars}
                link={snippet.link}
              />
            ))}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center min-h-[40vh]">
            <p className="text-gray-600 dark:text-gray-400 text-center">No snippets found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Snippet;
