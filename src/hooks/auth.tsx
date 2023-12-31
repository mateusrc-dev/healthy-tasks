import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
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
  signOut: () => void;
  updateProfilePatient: (
    username: string,
    complaint: string,
    profilePublic: boolean,
    statisticPublic: boolean,
    avatarFile: string,
    userId: string
  ) => void;
  updateProfileProfessional: (
    username: string,
    specialization: string,
    description: string,
    avatarFile: string,
    userId: string
  ) => void;
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
      const response = await api.post("/sessions", { email, password });

      const { user, token } = response.data;

      localStorage.setItem("@healthy-tasks:user", JSON.stringify(user));
      localStorage.setItem("@healthy-tasks:token", JSON.stringify(token));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      alert(`Não foi possível entrar. Senha ou Email incorretos.`);
    }
  }

  function signOut() {
    localStorage.removeItem("@healthy-tasks:user");
    localStorage.removeItem("@healthy-tasks:token");
    setData(null);
  }

  async function updateProfilePatient(
    username: string,
    complaint: string,
    profilePublic: boolean,
    statisticPublic: boolean,
    avatarFile: string,
    userId: string
  ) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };

        await api.patch("/avatar", fileUploadForm, config);
      }

      const response = await api.patch("/users/updatePatient", {
        username,
        complaint,
        profilePublic,
        statisticPublic,
        userId,
      });

      const user = response.data;

      localStorage.setItem("@healthy-tasks:user", JSON.stringify(user));
      localStorage.setItem("@healthy-tasks:token", data.token);

      setData({ user, token: data.token });
      alert("Perfil atualizado");
    } catch (error) {
      alert(`Não foi possível atualizar o perfil. ${error}`);
    }
  }

  async function updateProfileProfessional(
    username: string,
    specialization: string,
    description: string,
    avatarFile: string,
    userId: string
  ) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();

        fileUploadForm.append("avatar", avatarFile);

        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };

        await api.patch("/avatar", fileUploadForm, config);
      }

      const response = await api.patch("/users/updateProfessional", {
        username,
        specialization,
        description,
        userId,
      });

      const user = response.data;

      localStorage.setItem("@healthy-tasks:user", JSON.stringify(user));
      localStorage.setItem("@healthy-tasks:token", data.token);

      setData({ user, token: data.token });
      alert("Perfil atualizado");
    } catch (error) {
      alert(`Não foi possível atualizar o perfil. ${error}`);
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@healthy-tasks:user");
    const token = localStorage.getItem("@healthy-tasks:token");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ user: JSON.parse(user), token: token });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfilePatient,
        updateProfileProfessional,
        user: data?.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
