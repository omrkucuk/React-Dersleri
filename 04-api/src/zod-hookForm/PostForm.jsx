import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "./schemas/postSchema";

const PostForm = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema), // form submit'te zod şemasını çalıştır
  });

  const inputClass = `w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-600">Başlık</label>
        <input {...register("title")} placeholder="Gönderi Başlığı" className={inputClass} />
        {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-600">İçerik</label>
        <textarea
          {...register("body")}
          rows={5}
          placeholder="Gönderi İçeriği..."
          className={`${inputClass} resize-y`}
        />
        {errors.body && <span className="text-red-500 text-xs">{errors.body.message}</span>}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Kaydediliyor..." : "Yayınla"}
      </button>
    </form>
  );
};

export default PostForm;
