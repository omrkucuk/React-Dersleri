import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import api from "../api/axios";
import Spinner from "../components/ui/Spinner";
import StatCard from "../components/dashboard/StatCard";
import { ListTodo, Circle, CircleCheck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);

  const { data: todos = [], isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await api.get("/todos?limit=30");
      return data.todos;
    },
    staleTime: 2 * 60 * 1000,
  });

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
  };

  const recentTodos = todos.filter((t) => !t.completed).slice(0, 5);

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Merhaba, {user?.firstName}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Bugün neler yapacaksın?</p>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            icon={ListTodo}
            label={"Toplam Görev"}
            value={stats.total}
            color={"bg-indigo-500"}
          />
          <StatCard
            icon={Circle}
            label={"Devam Eden"}
            value={stats.active}
            color={"bg-orange-500"}
          />
          <StatCard
            icon={CircleCheck}
            label={"Tamamlanan"}
            value={stats.completed}
            color={"bg-green-500"}
          />
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Bekleyen Görevler</h2>
          <Link
            to={"/todos"}
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Tümünü Gör
          </Link>
        </div>

        {recentTodos.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-400" />
            <p>Harika! Bekleyen görev yok.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {recentTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <Circle className="w-4 h-4 text-orange-400" />
                <p className="text-sm text-gray-700 dark:text-gray-300">{todo.todo}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
