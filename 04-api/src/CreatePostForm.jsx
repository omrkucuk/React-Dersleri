import { dataTagErrorSymbol, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "./lib/axios";
import { toast } from "react-hot-toast";

// useMutation - POST-PUT-DELETE istekleri için kullanılır.useQuery'den farkı: otomatik çalışmaz mutate() ile tetiklenir.
const CreatePostForm = () => {
  // useQueryClient - cache'e erişmek için
  // invalidateQueries gibi cache işlemleri için gerekli
  const queryClient = useQueryClient();

  const createPost = useMutation({
    // mutationFn - asıl isteği yapan fonksiyon
    // mutate(data) cağırıldığında bu fonksiyon data parametresiyle çalışır
    mutationFn: (newPost) => api.post("/posts", newPost).then((r) => r.data),

    // onSucces - istek başarılı olduğunda çalışır
    // data: API'dan gelen yanıt, variables: mutate()'e geçilen argüman
    onSuccess: (data, variables) => {
      // invalidateQueries - ilgili cache'i geçersiz kılar
      // TanStack Query bu key'e sahip tüm query'leri arka planda yeniden fetch eder
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Gönderi oluşturuldu");
    },

    // onError - istek hata verdiğinde çalışır
    onError: (error) => {
      toast.error(error.response?.data?.message || "Bir hata oluştu");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // mutate() - mutation'ı tetikler, içine gönderilen veri mutationFn'e gider
    createPost.mutate({ title: "Yeni Gönderi", body: "İçerik", userId: 1 });
  };

  // useMutation state'leri
  /*
    mutation.isPending - istek uçuşta, yanıt bekliyor
    mutation.isSuccess - istek başarıyla tamamlandı
    mutation.isError - istek hata ile sonuçlandı
    mutation.isIdle - henüz tetiklenmedi (başlangıç durumu)
    mutation.data - başarılı yanıt verisi
    mutation.error - hata objesi

    */

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm p-6">
      <button
        type="submit"
        disabled={createPost.isPending} // istek devam ediyorsa butonu kilitle
        className="py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {createPost.isPending ? "Kaydediliyor..." : "Kaydet"}
      </button>
    </form>
  );
};

export default CreatePostForm;
