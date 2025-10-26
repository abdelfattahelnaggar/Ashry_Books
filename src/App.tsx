import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import StorePage from "@/pages/public/StorePage";
import LoginPage from "./pages/admin/LoginPage";
import NotFound from "@/shared/pages/NotFound";
import Dashboard from "./features/admin/pages/Dashboard";
import { ProtectedRoute } from "./shared/components/ProtectedRoute";
import { ProtectedAuthRoute } from "./shared/components/ProtectedAuthRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <StorePage />,
  },
  {
    path: "/store",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/admin/login",
    element: (
      <ProtectedAuthRoute>
        <LoginPage />
      </ProtectedAuthRoute>
    ),
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/",
    element: <Navigate to="/admin/dashboard" replace />,
  },
  { path: "*", element: <NotFound /> },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
