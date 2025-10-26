import { lazy, Suspense } from "react";
import Loading from "@/shared/components/Loading";

// Lazy-loaded components
const ProductsTable = lazy(() => 
  import("@/features/admin/components/ProductsTable").then((module) => ({
    default: module.ProductsTable,
  }))
);

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Products Table */}
      <Suspense fallback={<Loading />}>
        <ProductsTable />
      </Suspense>
    </div>
  );
}
