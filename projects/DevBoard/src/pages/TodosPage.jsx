import { useDispatch, useSelector } from "react-redux";
import { useTodos } from "../hooks/useTodos";
import TodoForm from "../components/todos/TodoForm";
import { setFilter, setSearch } from "../store/todoSlice";
import clsx from "clsx";
import Spinner from "../components/ui/Spinner";
import TodoCard from "../components/todos/TodoCard";

const FILTERS = [
  { value: "all", label: "Tümü" },
  { value: "active", label: "Devam Eden" },
  { value: "completed", label: "Tamamlanan" },
];

const TodosPage = () => {
  const dispatch = useDispatch();
  const { filter, search } = useSelector((state) => state.todos);
  const { todos, isLoading, isError, stats, toggleTodo, addTodo, deleteTodo, isAdding } =
    useTodos();

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Görevler</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {stats.active} devam ediyor - {stats.completed} tamamlandı
        </p>
      </div>

      {/* Yeni todo formu */}
      <TodoForm onAdd={addTodo} isAdding={isAdding} />

      {/* Arama */}
      <input
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Görev ara..."
        className="w-full px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Filtreler */}
      <div className="flex gap-2">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => dispatch(setFilter(value))}
            className={clsx(
              "px-4 py-1.5 text-sm font-medium rounded-full cursor-pointer",
              filter === value
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover-bg-gray-600",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Todo Listesi */}
      {isLoading && (
        <div className="flex justify-center py-12">
          <Spinner />
        </div>
      )}

      {isError && (
        <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl text-sm">
          Görevler yüklenirken bir hata oluştu
        </div>
      )}

      {!isLoading && !isError && (
        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-center py-12 text-gray-400 text-sm">
              {search ? "Arama sonucu bulunamadı." : "Bu filtrede görev yok."}
            </p>
          ) : (
            todos.map((todo) => (
              <TodoCard key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TodosPage;
