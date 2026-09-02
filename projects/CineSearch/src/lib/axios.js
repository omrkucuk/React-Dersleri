import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_KEY,
  timeout: 10000,
  params: {
    api_key: import.meta.env.VITE_TMDB_BASE,
    language: "tr-TR",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.status_message || error.message || "Bir hata oluştu";
    return Promise.reject(new Error(message));
  },
);

export default api;
