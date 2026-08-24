import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminNewPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Yeni yazı: ", data);
    toast.success("Yazı oluşturuldu!");
    navigate("/admin");
  };

  const inputClass =
    "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "text-sm font-medium text-gray-600";
  const fieldClass = "flex flex-col gap-1";

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900 mb-6">Yeni Yazı</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className={fieldClass}>
          <label className={labelClass}>Başlık</label>
          <input
            {...register("title", { required: "Başlık zorunludur" })}
            placeholder="Yazı başlığı"
            className={inputClass}
          />
          {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}
        </div>
        {/* Category */}
        <div className={fieldClass}>
          <label className={labelClass}>Kategori</label>
          <select {...register("category", { required: true })} className={inputClass}>
            <option value="">Seç...</option>
            <option value="react">React</option>
            <option value="css">CSS</option>
            <option value="typescript">TypeScript</option>
          </select>
        </div>
        {/* Excerpt */}
        <div className={fieldClass}>
          <label className={labelClass}>Özet</label>
          <input
            {...register("excerpt", { required: "Özet zorunludur" })}
            placeholder="Kısa Açıklama"
            className={inputClass}
          />
          {errors.excerpt && <span className="text-red-500 text-xs">{errors.excerpt.message}</span>}
        </div>

        {/* Content */}
        <div className={fieldClass}>
          <label className={labelClass}>İçerik</label>
          <input
            {...register("content", { required: "İçerik zorunludur" })}
            placeholder="Yazı içeriği..."
            className={`${inputClass} resize-y`}
          />
          {errors.excerpt && <span className="text-red-500 text-xs">{errors.excerpt.message}</span>}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue700"
          >
            Yayınla
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50"
          >
            İptal
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminNewPost;
