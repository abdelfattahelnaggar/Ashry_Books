import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext not found");
  }
  const { isAuthenticated } = authContext;

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};
