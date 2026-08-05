import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import { Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import CurrentPage from "./pages/CurrentPage";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardProfile from "./pages/dashboard/DashboardProfile";
import DashboardSettings from "./pages/dashboard/DashboardSettings";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/current" element={<CurrentPage />} />

      {/* Dahsboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<DashboardProfile />} />
        <Route path="settings" element={<DashboardSettings />} />
      </Route>
    </Routes>
  );
};

export default App;
