import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "@/shared/components/Loading";

// Lazy-loaded navigation
const NavigationBar = lazy(() => import("../components/navbar/NavigationBar"));

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Suspense fallback={<Loading />}>
        <NavigationBar />
      </Suspense>

      {/* Main content area */}
      <main className="container mx-auto px-4 py-6 pt-24">
        <Outlet />
      </main>
    </div>
  );
}
