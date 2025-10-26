import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext not found");
  }
  const { logout } = authContext;
  return (
    <div>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}
