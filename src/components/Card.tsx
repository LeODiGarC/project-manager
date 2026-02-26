const Card = () => {
  return (
    <div className="flex flex-col bg-white p-3 gap-3 shadow-lg rounded-md">
      <div className="flex gap-1">
        <div className="p-2 rounded-2xl bg-pink-600 w-15"></div>
        <div className="p-2 rounded-2xl bg-cyan-400 w-15"></div>
      </div>
      <div className="p-2 rounded bg-gray-300 w-2000 max-w-xs"></div>
      <div className="flex justify-between">
        <div className="flex gap-1">
          <div className="bg-gray-300 w-8 h-8 rounded-4xl"></div>
          <div className="bg-gray-300 w-8 h-8 rounded-4xl"></div>
          <div className="bg-gray-300 w-8 h-8 rounded-4xl"></div>
        </div>
        <div className="flex gap-1">
          <div className="bg-cyan-400 p-4.5 rounded-4xl"></div>
          <div className="bg-yellow-300 p-4.5 rounded-4xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
