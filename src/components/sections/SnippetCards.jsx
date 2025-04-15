const SnippetCard = ({ title, code }) => {
    return (
      <div className="bg-[#2b2b2b] rounded-lg overflow-hidden w-full">
        <div className="bg-[#1e1e1e] px-4 py-2 flex items-center space-x-2 text-white/50 text-xs">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="ml-auto">{title}</span>
        </div>
        <pre className="p-4 overflow-x-auto text-white text-xs font-mono leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    );
  };
  
  export default SnippetCard;
  