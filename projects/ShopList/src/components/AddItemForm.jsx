import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddItemForm = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onAdd(data.name, data.quantity);
    toast.success(`${data.name} listeye eklendi!`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-6">
      <div className="flex-1 flex flex-col gap-1">
        <input
          {...register("name", { required: "Ürün adı zorunludur" })}
          placeholder="Ürün adı"
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
      </div>

      <div className="w-20">
        <input
          type="number"
          defaultValue={1}
          {...register("quantity")}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors duration-300 text-sm font-medium "
      >
        + Ekle
      </button>
    </form>
  );
};

export default AddItemForm;
