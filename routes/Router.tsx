import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export const Router = () => {
    const { isSignedIn } = useAuth();
    return (
        <NavigationContainer>
            {isSignedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};