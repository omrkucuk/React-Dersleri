import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const login = async ({ username, password }) => {
    const { data } = await api.post("/auth/login", { username, password });
    dispatch(loginSuccess({ user: data, token: data.accessToken }));
    navigate("/dashboard");
  };

  const logoutUser = () => {
    dispatch(logout());
    navigate("/login");
  };

  return { user, isAuthenticated, login, logout: logoutUser };
};
