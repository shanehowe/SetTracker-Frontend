import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WorkoutFoldersScreen } from "../screens/WorkoutFoldersScreen";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="WorkoutFolders">
            <Stack.Screen name="WorkoutFolders" component={WorkoutFoldersScreen} />
        </Stack.Navigator>
    );
};