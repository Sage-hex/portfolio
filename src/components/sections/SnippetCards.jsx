// const SnippetCard = ({ title, code }) => {
//     return (
//       <div className="bg-[#2b2b2b] rounded-lg overflow-hidden w-full">
//         <div className="bg-[#1e1e1e] px-4 py-2 flex items-center space-x-2 text-white/50 text-xs">
//           <span className="w-3 h-3 bg-red-500 rounded-full" />
//           <span className="w-3 h-3 bg-yellow-500 rounded-full" />
//           <span className="w-3 h-3 bg-green-500 rounded-full" />
//           <span className="ml-auto">{title}</span>
//         </div>
//         <pre className="p-4 overflow-x-auto text-white text-xs font-mono leading-relaxed">
//           <code>{code}</code>
//         </pre>
//       </div>
//     );
//   };
  
//   export default SnippetCard;
  

// File: components/SnippetCard.jsx
import { FaStar } from "react-icons/fa";

const SnippetCard = ({ title, description, icons, stars }) => {
  return (
    <div className="bg-[#2C2E3E] dark:bg-[#1a1a1a] text-white dark:text-white rounded-xl p-6 space-y-4 transition-colors duration-500">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-white/70 dark:text-white/60">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icons?.map((Icon, idx) => (
            <span key={idx} className="bg-white/10 p-2 rounded-lg">
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

export default SnippetCard;
