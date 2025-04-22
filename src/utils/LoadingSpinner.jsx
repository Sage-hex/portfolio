// // LoadingSpinner.jsx
// const LoadingSpinner = () => {
//     return (
//       <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
//         <div className="w-16 h-16 border-4 border-t-transparent border-blue-400 border-solid rounded-full animate-spinner"></div>
//       </div>
//     );
//   };
  
//   export default LoadingSpinner;
  

import { useState, useEffect } from "react";

// Rainbow Letter Animation Component
const RainbowText = ({ text }) => {
  const colors = [
    "text-red-500",
    "text-orange-500",
    "text-yellow-500",
    "text-green-500",
    "text-blue-500",
    "text-indigo-500",
    "text-purple-500",
  ];

  // Set a delay to show letters one by one
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters((prev) => Math.min(prev + 1, text.length));
    }, 200); // 200ms delay for each letter

    // Clean up the interval when the component is unmounted
    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="flex justify-center items-center space-x-1 w-full">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={`font-bold text-4xl ${colors[index % colors.length]} ${
            index < visibleLetters
              ? "opacity-100 transition-opacity duration-300"
              : "opacity-0"
          }`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

// Main Component for Showing Loading Text
const LoadingText = () => {
  const text = "Emmanuel";

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center">
      <div className="w-auto">
        <RainbowText text={text} />
      </div>
    </div>
  );
};

export default LoadingText;
