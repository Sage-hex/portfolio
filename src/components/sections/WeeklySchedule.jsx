
  const WeeklySchedule = () => {
  const weeks = [
    {
      id: 1,
      title: "First Week",
      content: "Discussing basics of website structure like tags, attributes and elements.",
    },
    {
      id: 2,
      title: "Second Week",
      content: "Discussing Web Development - Basic SDLC.",
    },
    {
      id: 3,
      title: "Third Week",
      content: "Discussing layout concepts like flexbox and grid.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mb-16">
      <div className="bg-gray-100 dark:bg-[#282c3e] rounded-lg p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {weeks.map((week) => (
            <div key={week.id} className="flex items-start gap-3">
              <div className="text-yellow-500 dark:text-yellow-300 text-xl">😊</div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">{week.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{week.content}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-2 bg-gray-200 dark:bg-[#363a4f] text-gray-800 dark:text-gray-300 px-4 py-2 rounded mt-6 text-sm">
          <span>📋</span> Read more
        </button>
      </div>
    </div>
  );
};

export default WeeklySchedule;
