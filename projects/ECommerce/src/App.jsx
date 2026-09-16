import { Provider } from "react-redux";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

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
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
