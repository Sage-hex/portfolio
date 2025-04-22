// const MentorshipHeader = () => {
//     return (
//       <div className="max-w-6xl mx-auto mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold mb-8">Mentorship</h1>
//         <div className="md:flex md:items-start md:gap-6">
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <p className="text-lg mb-2">
//               Spending a lot of time learning <span className="text-green-400 underline">on your own</span> and still feeling <span className="text-gray-400">stuck</span>?
//             </p>
//             <div className="mt-6 border-l-4 border-green-400 pl-4 py-1">
//               <p className="text-lg">
//                 This Frontend Mentorship is the answer to your problems. Here, you'll experience more personalized mentoring.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default MentorshipHeader;
  

const MentorshipHeader = () => {
    return (
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
          Mentorship
        </h1>
        <div className="md:flex md:items-start md:gap-6">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg mb-2 text-gray-800 dark:text-gray-300">
              Spending a lot of time learning{" "}
              <span className="text-green-600 dark:text-green-400 underline">on your own</span> and still feeling{" "}
              <span className="text-gray-500 dark:text-gray-400">stuck</span>?
            </p>
            <div className="mt-6 border-l-4 border-green-600 dark:border-green-400 pl-4 py-1 bg-gray-100 dark:bg-transparent">
              <p className="text-lg text-gray-800 dark:text-gray-200">
                This Frontend Mentorship is the answer to your problems. Here, you'll experience more personalized mentoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MentorshipHeader;
  