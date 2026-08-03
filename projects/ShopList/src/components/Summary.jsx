const Summary = ({ items, onClearCompleted }) => {
  const total = items.length;
  const completed = items.filter((i) => i.completed).length;

  return (
    <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
      <span>
        <span className="font-semibold text-gray-800">{completed}</span>/{total} tamamlandı
      </span>
      {completed > 0 && (
        <button
          onClick={onClearCompleted}
          className=" text-red-500 hover:text-red-700 transition-colors duration-300 text-xs cursor-pointer"
        >
          Tamamlanmışları temizle
        </button>
      )}
    </div>
  );
};

export default Summary;
