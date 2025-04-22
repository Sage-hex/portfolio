// File: CodeSnippet.jsx
import { SiTailwindcss, SiHtml5, SiNextdotjs } from "react-icons/si";
import { FaCodepen } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import SnippetCard from "./SnippetCards";
import { snippets } from "../data/snippetsData";
import { Link } from "react-router-dom";

const CodeSnippet = () => {
  return (
    <section className="mt-20 px-4 md:px-10" data-aos="fade-up">
      <h2
        className="text-2xl text-center md:text-left dark:text-white md:text-3xl font-bold mb-6 text-black"
        data-aos="fade-up"
      >
        Code Snippet
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {snippets.slice(0, 4).map((s, i) => (
          <SnippetCard
            key={i}
            title={s.title}
            description={s.description}
            icons={s.icons}
            stars={s.stars}
            link={s.link}
            data-aos="fade-up"
            data-aos-delay={`${i * 100}`} // Delay for each snippet
          />
        ))}
      </div>
      <div className="mt-6" data-aos="fade-up" data-aos-delay="400">
        <Link to="/snippets">
          <button className="flex items-center gap-2 text-sm bg-[#2C2E3E] text-white px-4 py-2 rounded-lg">
            <LuMenu /> See More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CodeSnippet;
