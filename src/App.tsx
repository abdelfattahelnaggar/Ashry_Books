import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ProtectedRoute } from "./shared/components/ProtectedRoute";
import { ProtectedAuthRoute } from "./shared/components/ProtectedAuthRoute";
import Loading from "@/shared/components/Loading";

// Lazy-loaded components
const StorePage = lazy(() => import("@/pages/public/StorePage"));
const LoginPage = lazy(() => import("./pages/admin/LoginPage"));
const NotFound = lazy(() => import("@/shared/components/NotFound"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const NewProductPage = lazy(() => import("./pages/admin/NewProductPage"));
const AdminLayout = lazy(() => import("./features/admin/layout/AdminLayout"));

// Router configuration
const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <StorePage />
      </Suspense>
    ),
  },
  {
    path: "/store",
    element: <Navigate to="/" replace />,
  },

  // Admin authentication
  {
    path: "/admin/login",
    element: (
      <ProtectedAuthRoute>
        <Suspense fallback={<Loading />}>
          <LoginPage />
        </Suspense>
      </ProtectedAuthRoute>
    ),
  },

  // Admin dashboard (protected)
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Loading />}>
          <AdminLayout />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "new-product",
        element: (
          <Suspense fallback={<Loading />}>
            <NewProductPage />
          </Suspense>
        ),
      },
    ],
  },

  // Redirect /admin/ to dashboard
  {
    path: "/admin/",
    element: <Navigate to="/admin/dashboard" replace />,
  },

  // 404 catch-all
  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

// App component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
