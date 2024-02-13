import { createStackNavigator } from "@react-navigation/stack";
import { WorkoutFoldersScreen } from "../screens/workouts/WorkoutFoldersScreen";
import { AllExercisesScreen } from "../screens/workouts/AllExercisesScreen";
import { FolderExercisesScreen } from "../screens/workouts/FolderExercisesScreen";
import { AddExercisesScreen } from "../screens/workouts/AddExercisesScreen";
import { RootStackParamList } from "../types";

const Stack = createStackNavigator<RootStackParamList>();

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
      <Stack.Screen
        name="FolderExercises"
        component={FolderExercisesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddExercises"
        component={AddExercisesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
