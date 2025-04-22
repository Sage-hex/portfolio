
// import { FaStar, FaLink } from "react-icons/fa";

// const SnippetCards = ({ title, description, icons, stars, link }) => {
//   return (
//     <div className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-800 dark:text-white shadow-lg rounded-xl p-6 space-y-4 transition-colors duration-500 relative">
//       <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-300">
//         {title}
//         {link && (
//           <a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition"
//             title="View Project"
//           >
//             <FaLink />
//           </a>
//         )}
//       </h3>

//       <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>

//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           {icons?.map((Icon, idx) => (
//             <span
//               key={idx}
//               className="bg-white/70 dark:bg-white/10 p-2 text-gray-800 dark:text-gray-300 rounded-lg"
//             >
//               <Icon size={20} />
//             </span>
//           ))}
//         </div>
//         <div className="flex items-center gap-1 text-yellow-500 dark:text-yellow-400 text-sm">
//           <FaStar />
//           {stars} Stars
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SnippetCards;



import { FaStar, FaLink } from "react-icons/fa";

const SnippetCards = ({ title, description, icons, stars, link, index }) => {
  return (
    <div
      className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-800 dark:text-white shadow-lg rounded-xl p-6 space-y-4 transition-colors duration-500 relative"
      data-aos="fade-up"
      data-aos-delay={`${index * 100}`} // Add delay based on index for sequential appearance
    >
      <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-300">
        {title}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition"
            title="View Project"
          >
            <FaLink />
          </a>
        )}
      </h3>

      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icons?.map((Icon, idx) => (
            <span
              key={idx}
              className="bg-white/70 dark:bg-white/10 p-2 text-gray-800 dark:text-gray-300 rounded-lg"
            >
              <Icon size={20} />
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-yellow-500 dark:text-yellow-400 text-sm">
          <FaStar />
          {stars} Stars
        </div>
      </div>
    </div>
  );
};

export default SnippetCards;
