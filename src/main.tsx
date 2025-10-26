import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "sonner";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      retry: 2,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster position="top-center" duration={3000} dir="rtl" />
      </QueryClientProvider>
    </AuthContextProvider>
  </>
);
