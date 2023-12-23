import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../lib/axios";

interface User {
  complaint: string | null;
  created_at: Date;
  description: string | null;
  email: string;
  id: string;
  password: string;
  photoUrl: string | null;
  profileForce: number | null;
  profilePublic: boolean | null;
  specialization: string | null;
  statisticPublic: boolean | null;
  typeUser: string;
  updatedAt: Date;
  username: string;
}

interface AuthContextType {
  signIn: (email: string, password: string) => void;
  user: User;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [data, setData] = useState<{ user: User; token: string }>();

  async function signIn(email: string, password: string) {
    try {
      console.log(email, password);
      const response = await api.post("/sessions", { email, password });

      const { user, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      alert(`Não foi possível entrar. Erro: ${error}`);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data?.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
