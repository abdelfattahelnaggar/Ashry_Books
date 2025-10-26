import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";

export const ProtectedAuthRoute = ({ children }: { children: React.ReactNode }) => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext not found");
  }
  const { isAuthenticated } = authContext;

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
};
