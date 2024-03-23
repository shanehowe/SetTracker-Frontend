import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { AppBottomTab } from "./AppBar";
import { AuthStack } from "./AuthStack";

export const Router = () => {
    const { user } = useAuth();
    return (
        <NavigationContainer>
            {user !== null ? <AppBottomTab /> : <AuthStack />}
        </NavigationContainer>
    );
};