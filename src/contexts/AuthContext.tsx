import React from "react";
import storage, { StoredConsts } from "../utils/storage";
import authService from "../services/auth";
import { User } from "../types";
import { useQueryClient } from "@tanstack/react-query";

interface AuthContextProps {
  children: React.ReactNode;
}

type AuthContextType = {
  onSignInSuccess: (user: User) => void;
  signOut: () => void;
  user: User | null;
};

const AuthContext = React.createContext<AuthContextType>({
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

  const signOut = async () => {
    await storage.remove(StoredConsts.LOGGED_IN_USER);
    await storage.remove(StoredConsts.PREFERRED_THEME);
    setUser(null);
  };

  const service = {
    signOut,
    user,
    onSignInSuccess,
  };

  return (
    <AuthContext.Provider value={service}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export { AuthContext, AuthProvidor };
