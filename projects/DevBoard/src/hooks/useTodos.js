import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import api from "../api/axios";

export function useTodos() {
  const queryClient = useQueryClient();
  const { filter, search } = useSelector((state) => state.todos);

  // Tüm todoları çek
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await api.get("/todos?limit=30");
      return data.todos;
    },
    staleTime: 2 * 60 * 1000,
  });

  // Client-side filtrele (Redux state'inden okur)
  const todos = (data || []).filter((todo) => {
    if (filter === "active" && todo.completed) return false;
    if (filter === "completed" && !todo.completed) return false;
    if (search && !todo.todo.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  // Todo tamamlandı toogle
  const toggleMutation = useMutation({
    mutationFn: async ({ id, completed }) => {
      const { data } = await api.put(`/todos/${id}`, { completed: !completed });
      return data;
    },
  });

  // Yeni todo ekle
  const addMutation = useMutation({
    mutationFn: async (text) => {
      const { data } = await api.post("/todos/add", {
        todo: text,
        completed: false,
        userId: 1,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  // Todo sil
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await api.delete(`/todos/${id}`);
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData(["todos"], (old) => old.filter((t) => t.id !== id));
    },
  });

  const stats = {
    total: (data || []).length,
    active: (data || []).filter((t) => !t.completed).length,
    completed: (data || []).filter((t) => t.completed).length,
  };

  return {
    todos,
    isError,
    isLoading,
    stats,
    toggleTodo: (id, completed) => toggleMutation.mutate({ id, completed }),
    addTodo: (text) => addMutation.mutate(text),
    deleteTodo: (id) => deleteMutation.mutate(id),
    isAdding: addMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
}
