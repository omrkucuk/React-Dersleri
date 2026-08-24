import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // veri 5 dakika "taze" sayılır, bu sürede refetch yapılmaz
      retry: 2, // hata durumunda 2 kez daha dener
      refetchOnWindowFocus: true, // kullanıcı sekmeye döndüğünde otomatik refetch
    },
  },
});

createRoot(document.getElementById("root")).render(
  // QueryClientProvider - tüm uygulamaya QueryClient'ı sağlar
  <QueryClientProvider client={queryClient}>
    <Toaster position="top-right" />
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
