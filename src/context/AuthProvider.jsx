import { useState } from "react";
import { AuthContext } from "./authContext";
import * as authApi from "../api/authApi";

const readUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const role = localStorage.getItem("role") || "";

  return {
    token,
    role,
    email: localStorage.getItem("email"),
    isAdmin: role.replace("ROLE_", "") === "ADMIN",
  };
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(readUser);

  const login = async (email, password) => {
    const data = await authApi.login(email, password);

    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email || email);
    localStorage.setItem("role", data.role || "");

    const current = readUser();
    setUser(current);
    return current;
  };

  const logout = () => {
    authApi.logout();
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: Boolean(user),
    isAdmin: Boolean(user?.isAdmin),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}