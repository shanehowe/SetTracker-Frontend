import { createStackNavigator } from "@react-navigation/stack";
import { WorkoutFoldersScreen } from "../screens/workouts/WorkoutFoldersScreen";
import { AllExercisesScreen } from "../screens/workouts/AllExercisesScreen";
import { FolderExercisesScreen } from "../screens/workouts/FolderExercisesScreen";
import { AddExercisesScreen } from "../screens/workouts/AddExercisesScreen";
import { RootStackParamList } from "../types";
import { SetHistoryScreen } from "../screens/workouts/SetHistoryScreen";

const Stack = createStackNavigator<RootStackParamList>();

export const WorkoutFoldersStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}
      initialRouteName="WorkoutFolders"
    >
      <Stack.Screen name="WorkoutFolders" component={WorkoutFoldersScreen} />
      <Stack.Screen name="AllExercises" component={AllExercisesScreen} />
      <Stack.Screen name="FolderExercises" component={FolderExercisesScreen} />
      <Stack.Screen name="AddExercises" component={AddExercisesScreen} />
      <Stack.Screen name="SetHistory" component={SetHistoryScreen} />
    </Stack.Navigator>
  );
};
