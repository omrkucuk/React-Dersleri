import clsx from "clsx";
import { Trash2 } from "lucide-react";
const TodoCard = ({ todo, onToggle, onDelete }) => {
  return (
    <div
      className={clsx(
        "flex items-start gap-3 p-4 rounded-xl border",
        todo.completed
          ? "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 opacity-60"
          : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm",
      )}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id, todo.completed)}
        className="mt-1 w-4 h-4 accent-indigo-600 cursor-pointer"
      />

      {/* Todo metni */}
      <p
        className={clsx(
          "flex-1 text-sm",
          todo.completed
            ? "line-through text-gray-400 dark:text-gray-500"
            : "text-gray-800 dark:text-gray-200",
        )}
      >
        {todo.todo}
      </p>

      {/* Sil butonu */}
      <button
        onClick={() => onDelete(todo.id)}
        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TodoCard;
