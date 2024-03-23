import React from "react";
import storage from "../utils/storage";
import authService from "../services/auth";
import { AxiosError } from "axios";
import { User } from "../types";

interface AuthContextProps {
    children: React.ReactNode;
}

type AuthContextType = {
    isSignedIn: boolean;
    signIn: (provider: string, token: string) => void;
    signOut: () => void;
    user: User | null;
};

const AuthContext = React.createContext<AuthContextType>({
    isSignedIn: false,
    signIn: (provider: string, token: string) => {},
    signOut: () => {},
    user: null,
});

const AuthProvidor: React.FC<AuthContextProps> = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    const [user, setUser] = React.useState<User | null>(null);
    
    React.useEffect(() => {
        const checkAuth = async () => {
            const user: User = JSON.parse(await storage.get("loggedInUser") || "{}");
            if (user) {
                setIsSignedIn(true);
                setUser(user);
                authService.setToken(user.token);
            }
        };

        checkAuth();
    }, []);

    const signIn = async (provider: string, token: string) => {
        try {
            const response = await authService.signIn(provider, token);
            if (response) {
                await storage.set("loggedInUser", JSON.stringify(response));
                setIsSignedIn(true);
            }
        } catch (error: AxiosError | any) {
            console.error(error.code, error.message);
        }
    };

    const signOut = async () => {
        await storage.remove("token");
        setIsSignedIn(false);
    };

    const service = {
        isSignedIn,
        signIn,
        signOut,
        user,
    };

    return (
        <AuthContext.Provider value={service}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);

export { AuthContext, AuthProvidor };