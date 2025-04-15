import SnippetCard from "./SnippetCards";

const snippets = [
  {
    title: "Responsive Nav (React)",
    code: `const [open, setOpen] = useState(false);

return (
  <button onClick={() => setOpen(!open)}>
    {open ? "Close" : "Menu"}
  </button>
);`,
  },
  {
    title: "Smooth Scroll (JS)",
    code: `document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});`,
  },
  {
    title: "Tailwind Card Component",
    code: `<div className="p-4 bg-white rounded-lg shadow">
  <h3 className="text-lg font-bold">Card Title</h3>
  <p className="text-sm text-gray-600">Card description text here.</p>
</div>`,
  },
  {
    title: "Dark Mode Toggle (React)",
    code: `const [dark, setDark] = useState(false);

useEffect(() => {
  document.body.classList.toggle("dark", dark);
}, [dark]);`,
  },
];

const CodeSnippet = () => {
  return (
    <section className="mt-20 px-4 md:px-10">
      <h2 className="text-2xl font-bold mb-6">Code Snippet</h2>
      <p className="text-sm text-white/70 mb-6 max-w-xl">
        I love sharing snippets about <span className="text-green-400">frontend dev</span> & some practice code with the aim of helping others.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {snippets.map((snippet, i) => (
          <SnippetCard key={i} title={snippet.title} code={snippet.code} />
        ))}
      </div>
    </section>
  );
};

export default CodeSnippet;
