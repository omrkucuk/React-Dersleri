import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Tüm isteklerin base URL'i
  timeout: 10000, // 10 saniye cevap gelmezse hata fırlat
  headers: { "Content-Type": "application/json" },
});

// REQUEST INTERCEPTOR
// Her istek gönderilmeden önce bu fonksiyon çalışır
// Kullanım amacı:Authorication header'ı otomatik eklemek
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // token varsa her isteğe ekle
  }

  return config; // değiştirilmiş config'i geri döndür
});

// RESPONSE INTERCEPTOR
// Her yanıt geldiğinde bu fonksiyon çalışır
// Kullanım amacı: hataları merkezi yönetmek
api.interceptors.response.use(
  (response) => response, // başarılı yanıtı olduğu gibi geç
  (error) => {
    // 401 Unauthorized - token geçersiz, login'e yönlendir
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error); // hatayı useQuery/useMutation'a ilet
  },
);

export default api;
