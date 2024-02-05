import { createStackNavigator } from "@react-navigation/stack";
import { WorkoutFoldersScreen } from "../screens/workouts/WorkoutFoldersScreen";
import { AllExercisesScreen } from "../screens/workouts/AllExercisesScreen";

const Stack = createStackNavigator();

export const WorkoutFoldersStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true
      }}
      initialRouteName="WorkoutFolders">
      <Stack.Screen
        name="WorkoutFolders"
        component={WorkoutFoldersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllExercises"
        component={AllExercisesScreen}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
};
