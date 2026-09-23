import { Provider } from "react-redux";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";
import ShopPage from "./pages/ShopPage";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5, retry: 1 } },
});

function App() {
  return (
    // Provider sırası önemli - Redux en dışta
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" />
        <Navbar />
        <ShopPage />
        <CartDrawer />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
