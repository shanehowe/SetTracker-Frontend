import React from "react";

interface AuthContextProps {
    children: React.ReactNode;
}

type AuthContextType = {
    isSignedIn: boolean;
    signIn: () => void;
    signOut: () => void;
};

const AuthContext = React.createContext<AuthContextType>({
    isSignedIn: false,
    signIn: () => {},
    signOut: () => {},
});

const AuthProvidor: React.FC<AuthContextProps> = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = React.useState(false);

    const signIn = () => {
        setIsSignedIn(true);
    };

    const signOut = () => {
        setIsSignedIn(false);
    };

    const service = {
        isSignedIn,
        signIn,
        signOut,
    };

    return (
        <AuthContext.Provider value={service}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);

export { AuthContext, AuthProvidor };