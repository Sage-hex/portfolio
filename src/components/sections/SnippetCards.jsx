
  

// // File: components/SnippetCard.jsx
// import { FaStar } from "react-icons/fa";

// const SnippetCard = ({ title, description, icons, stars }) => {
//   return (
//     <div className="bg-[#2C2E3E] dark:bg-[#1a1a1a] text-white dark:text-white rounded-xl p-6 space-y-4 transition-colors duration-500">
//       <h3 className="text-xl font-semibold">{title}</h3>
//       <p className="text-sm text-white/70 dark:text-white/60">{description}</p>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           {icons?.map((Icon, idx) => (
//             <span key={idx} className="bg-white/10 p-2 rounded-lg">
//               <Icon size={20} />
//             </span>
//           ))}
//         </div>
//         <div className="flex items-center gap-1 text-yellow-400 text-sm">
//           <FaStar className="text-yellow-400" />
//           {stars} Stars
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SnippetCard;


import { FaStar, FaLink } from "react-icons/fa";

const SnippetCards = ({ title, description, icons, stars, link }) => {
  return (
    <div className="bg-gray-100 shadow-lg dark:bg-[#1a1a1a] text-white dark:text-white rounded-xl p-6 space-y-4 transition-colors duration-500 relative">
      <h3 className="text-xl text-gray-700 dark:text-gray-300 font-semibold flex items-center gap-2">
        {title}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200  transition"
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
            <span key={idx} className="bg-white/10 p-2 text-gray-700 dark:text-gray-300 rounded-lg">
              <Icon size={20} />
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-yellow-400 text-sm">
          <FaStar className="text-yellow-400" />
          {stars} Stars
        </div>
      </div>
    </div>
  );
};

export default SnippetCards;
