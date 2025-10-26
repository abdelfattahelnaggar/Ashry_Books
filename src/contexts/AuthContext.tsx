import { createContext, useEffect } from "react";
import type {
  UserInterface,
  LoginResponseInterface,
} from "@/features/auth/interfaces/login-response.interface";
import useLocalStorage from "@/shared/hooks/useLocalStorage";

interface AuthContextInterface {
  user: UserInterface | null;
  token: string | null;
  login: (data: LoginResponseInterface) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);
export { AuthContext };
export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const [user, setUser] = useLocalStorage<UserInterface | null>("user", null);

  // Load from localStorage on mount
  useEffect(() => {
    if (token && user) {
      setToken(token);
      setUser(user);
    }
  }, [token, user]);

  const login = (data: LoginResponseInterface) => {
    setToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
