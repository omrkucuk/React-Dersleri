import toast from "react-hot-toast";

const SaveButton = () => {
  const handleSave = () => {
    // işlem başarılı
    // toast.success("Kaydedildi");

    // // hata durumu
    // toast.error("Bir hata oluştu");

    // // bilgi
    // toast("Lütfen bekleyin...");

    // promise ile yükleniyor, başarılı, hata otomatik
    toast.promise(fetch("/api"), {
      loading: "Kaydediliyor",
      success: "Kaydedildi",
      error: "Hata oluştu",
    });
  };

  return <button onClick={handleSave}>Kaydet</button>;
};

export default SaveButton;
