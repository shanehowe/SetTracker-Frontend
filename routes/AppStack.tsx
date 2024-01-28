import { Text } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={() => <Text>Hello</Text>} />
        </Stack.Navigator>
    );
};