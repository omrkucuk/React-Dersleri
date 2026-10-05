import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";

const schema = z.object({
  text: z.string().min(3, "En az 3 karakter girin").max(100, "En fazla 100 karakter"),
});

const TodoForm = ({ onAdd, isAdding }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async ({ text }) => {
    await onAdd(text);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="flex gap-2">
        <div className="flex-1">
          <input
            {...register("text")}
            placeholder="Yeni görev ekle..."
            disabled={isAdding}
            className="w-full px-4  py-2.5 text-sm border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          />
          {errors.text && <p className="mt-1 text-xs text-red-500">{errors.text.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isAdding}
          className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl disabled:opacity-50"
        >
          <Plus className="w-4 h-4" />
          {isAdding ? "Ekleniyor..." : "Ekle"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
