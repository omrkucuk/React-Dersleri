import toast from "react-hot-toast";
import clsx from "clsx";

const ShoppingItem = ({ item, onToggle, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
    toast.error(`${item.name} silindi`);
  };

  return (
    <li
      className={clsx(
        "flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0",
        item.completed && "opacity-50",
      )}
    >
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
        className="w-4 h-4 accent-blue-600 cursor-pointer"
      />
      <span
        className={clsx(
          "flex-1 text-sm",
          item.completed ? "line-through text-gray-400" : "text-gray-800",
        )}
      >
        {item.name}
      </span>
      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
        x {item.quantity}
      </span>
      <button
        onClick={handleDelete}
        className="text-red-400 hover:text-red-600 transition-colors duration-300 text-sm cursor-pointer"
      >
        Sil
      </button>
    </li>
  );
};

export default ShoppingItem;
