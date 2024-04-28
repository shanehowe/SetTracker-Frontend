import React from "react";
import storage from "../utils/storage";
import authService from "../services/auth";
import { User } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

  const signInMutation = useMutation({
    mutationFn: async ({
      provider,
      token,
    }: {
      provider: string;
      token: string;
    }) => await authService.signIn(provider, token),
    onSuccess: async (user: User) => {
      queryClient.invalidateQueries();
      queryClient.setQueryData(["user"], user)
      authService.setToken(user.token);
      await storage.set("loggedInUser", JSON.stringify(user));
      await storage.set("preferredTheme", JSON.stringify(user.preferences?.theme));
      setUser(user);
    },
    onError: (error) => console.error(error),
  });

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = await storage.get("loggedInUser");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser) as User;
          authService.setToken(parsedUser.token);
          setUser(parsedUser);
        }
      } catch (error) {
        // do nothing
      }
    };

    checkAuth();
  }, []);

  const signIn = async (provider: string, token: string) => {
    signInMutation.mutate({ provider, token });
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
