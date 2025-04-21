// File: CodeSnippet.jsx
import { SiTailwindcss, SiHtml5, SiNextdotjs } from "react-icons/si";
import { FaCodepen } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import SnippetCard from "./SnippetCards";

const snippets = [
  {
    title: "Nextjs Starter",
    description: "A dead simple for nextjs project.",
    icons: [SiTailwindcss, SiNextdotjs],
    stars: 8,
  },
  {
    title: "Frontend Starter Kit",
    description:
      "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",
    icons: [SiTailwindcss, FaCodepen, SiHtml5],
    stars: 12,
  },
  {
    title: "Nextjs Starter",
    description: "A dead simple for nextjs project.",
    icons: [SiTailwindcss, SiNextdotjs],
    stars: 8,
  },
  {
    title: "Frontend Starter Kit",
    description:
      "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",
    icons: [SiTailwindcss, FaCodepen, SiHtml5],
    stars: 12,
  },
];

const CodeSnippet = () => {
  return (
    <section className="mt-20 px-4 md:px-10">
      <h2 className="text-2xl text-center md:text-left dark:text-white md:text-3xl font-bold mb-6 text-black">Code Snippet</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {snippets.map((s, i) => (
          <SnippetCard
            key={i}
            title={s.title}
            description={s.description}
            icons={s.icons}
            stars={s.stars}
          />
        ))}
      </div>
      <div className="mt-6">
        <button className="flex items-center gap-2 text-sm bg-[#2C2E3E] text-white px-4 py-2 rounded-lg">
          <LuMenu /> See More
        </button>
      </div>
    </section>
  );
};

export default CodeSnippet;




// import SnippetCard from "./SnippetCards";

// const snippets = [
//   {
//     title: "Async Fetch (React)",
//     code: `useEffect(() => {
//   const fetchData = async () => {
//     const res = await fetch("/api/data");
//     const json = await res.json();
//     setData(json);
//   };
//   fetchData();
// }, []);`,
//   },
//   {
//     title: "Reusable Input Component (React + Tailwind)",
//     code: `const Input = ({ label, ...props }) => (
//   <div className="space-y-1">
//     <label className="text-sm font-medium">{label}</label>
//     <input
//       className="w-full p-2 border rounded dark:bg-[#1a1a1a] dark:border-gray-700"
//       {...props}
//     />
//   </div>
// );`,
//   },
//   {
//     title: "Client-side Form Validation",
//     code: `const handleSubmit = (e) => {
//   e.preventDefault();
//   if (!email || !password) {
//     setError("All fields are required");
//     return;
//   }
//   // Submit logic here
// };`,
//   },
//   {
//     title: "Smooth Scroll (JavaScript)",
//     code: `document.querySelectorAll("a[href^='#']").forEach(link => {
//   link.addEventListener("click", e => {
//     e.preventDefault();
//     document.querySelector(link.getAttribute("href")).scrollIntoView({
//       behavior: "smooth"
//     });
//   });
// });`,
//   },
// ];

// const CodeSnippet = () => {
//   return (
//     <section className="dark:bg-[#1a1a1a] w-full mt-20 px-4 md:px-10 transition-colors duration-500 text-black  dark:text-white">
//       <h2 className="text-3xl font-bold mb-6">Code Playground</h2>
//       <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
//         I enjoy building with intention. Here are some meaningful code snippets I’ve written —
//         from reusable frontend components to logic I use in my fullstack journey.
//       </p>

//       <div className="grid md:grid-cols-2 gap-6">
//         {snippets.map((snippet, i) => (
//           <SnippetCard key={i} title={snippet.title} code={snippet.code} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CodeSnippet;
