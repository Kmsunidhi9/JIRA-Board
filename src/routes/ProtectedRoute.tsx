import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { role } = useAuth();

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}