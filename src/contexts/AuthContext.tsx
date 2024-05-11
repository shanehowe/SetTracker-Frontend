import React from "react";
import storage, { StoredConsts } from "../utils/storage";
import authService from "../services/auth";
import { User } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface AuthContextProps {
  children: React.ReactNode;
}

type AuthContextType = {
  signUpEmailPassword: (email: string, password: string) => void;
  onSignInSuccess: (user: User) => void;
  signOut: () => void;
  user: User | null;
};

const AuthContext = React.createContext<AuthContextType>({
  signUpEmailPassword: (email: string, password: string) => {},
  onSignInSuccess: (user: User) => {},
  signOut: () => {},
  user: null,
});

const AuthProvidor: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const queryClient = useQueryClient();

  const onSignInSuccess = async (user: User) => {
    queryClient.invalidateQueries();
    queryClient.setQueryData(["user"], user);
    authService.setToken(user.token);
    await storage.set(StoredConsts.LOGGED_IN_USER, JSON.stringify(user));
    await storage.set(
      StoredConsts.PREFERRED_THEME,
      user.preferences?.theme as string
    );
    setUser(user);
  };

  const signUpEmailPasswordMutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => await authService.signUpEmailPassword(email, password),
    onSuccess: onSignInSuccess,
    onError: (error) => {
      throw error;
    },
  });

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = await storage.get(StoredConsts.LOGGED_IN_USER);
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

  const signUpEmailPassword = async (email: string, password: string) => {
    await signUpEmailPasswordMutation.mutateAsync({ email, password });
  };

  const signOut = async () => {
    await storage.remove(StoredConsts.LOGGED_IN_USER);
    setUser(null);
  };

  const service = {
    signOut,
    user,
    signUpEmailPassword,
    onSignInSuccess,
  };

  return (
    <AuthContext.Provider value={service}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export { AuthContext, AuthProvidor };
