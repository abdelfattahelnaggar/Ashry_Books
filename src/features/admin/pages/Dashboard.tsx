import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext not found");
  }
  const { logout } = authContext;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Button variant="outline" size="lg" onClick={() => logout()}>
        <LogOutIcon className="w-4 h-4" />
        <span className="text-base">Logout</span>
      </Button>
    </div>
  );
}
