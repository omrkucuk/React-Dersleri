import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = false; // useUser() aldığımızı farz edelim
  const location = useLocation();

  if (!user) {
    // Giriş sayfasına yönlendir, geldiği sayfayı state ile sakla
    return <Navigate to={"/login"} state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default ProtectedRoute;
