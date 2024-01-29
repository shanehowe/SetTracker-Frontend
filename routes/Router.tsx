import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { AppBottomTab } from "./AppBar";
import { AuthStack } from "./AuthStack";

export const Router = () => {
    const { isSignedIn } = useAuth();
    return (
        <NavigationContainer>
            {isSignedIn ? <AppBottomTab /> : <AuthStack />}
        </NavigationContainer>
    );
};