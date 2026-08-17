import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const ADMIN = { email: "admin@blog.com", password: "123456", name: "Admin" };

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      setUser(ADMIN);
      setError(null);
      return true;
    }
    setError("Email veya şifre hatalı");
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth AuthProvider içinde kullanılmalıdır.");
  return ctx;
}
