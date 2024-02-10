import { Text, useTheme } from "react-native-paper";
import { ScrollView } from "react-native";
import { ScreenProps } from "../../interfaces";
import { WorkoutFolderFabGroup } from "../../components/Workouts/WorkoutFolderFabGroup/WorkoutFolderFabGroup";

interface FolderExercisesScreenProps extends ScreenProps {
  route: {
    params: {
      folderId: string;
    };
  };
}

export const FolderExercisesScreen = ({
  route,
  navigation,
}: FolderExercisesScreenProps) => {
  const theme = useTheme();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Text>Folder Exercises Screen</Text>
      <WorkoutFolderFabGroup />
    </ScrollView>
  );
};
