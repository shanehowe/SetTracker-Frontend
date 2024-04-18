import React from "react";
import storage from "../utils/storage";
import authService from "../services/auth";
import { AxiosError } from "axios";
import { User } from "../types";
import { useQueryClient } from "@tanstack/react-query";

interface AuthContextProps {
  children: React.ReactNode;
}

type AuthContextType = {
  signIn: (provider: string, token: string) => void;
  signOut: () => void;
  user: User | null;
};

const AuthContext = React.createContext<AuthContextType>({
  signIn: (provider: string, token: string) => {},
  signOut: () => {},
  user: null,
});

const AuthProvidor: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const queryClient = useQueryClient();

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = await storage.get("loggedInUser");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser) as User;
          authService.setToken(parsedUser.token);
          console.log(parsedUser.token)
          setUser(parsedUser);
        }
      } catch (error) {
        // do nothing
      }
    };

    checkAuth();
  }, []);

  const signIn = async (provider: string, token: string) => {
    try {
      const response = await authService.signIn(provider, token);
      if (response) {
        // If user was logged in with expired token
        // react query may have cached the response.
        queryClient.invalidateQueries();
        authService.setToken(response.token);
        await storage.set("loggedInUser", JSON.stringify(response));
        setUser(response);
      }
    } catch (error: AxiosError | any) {
      console.error(error.code, error.message);
    }
  };

  const signOut = async () => {
    await storage.remove("loggedInUser");
    setUser(null);
  };

  const service = {
    signIn,
    signOut,
    user,
  };

  return (
    <AuthContext.Provider value={service}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export { AuthContext, AuthProvidor };
