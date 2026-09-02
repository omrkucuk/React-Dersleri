import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoritesProvider } from "./context/FavoritesContext";
import { BrowserRouter, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        retry: 1,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <BrowserRouter>
          <Toaster
            position="top-right"
            toastOptions={{
              style: { background: "#1f2937", color: "#fff", border: "1px solid #374151" },
            }}
          />
          <Routes></Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </QueryClientProvider>
  );
}

export default App;
