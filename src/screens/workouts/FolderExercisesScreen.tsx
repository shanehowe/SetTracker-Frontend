import { Text, useTheme } from "react-native-paper";
import { ScrollView } from "react-native";
import { ScreenProps } from "../../interfaces";
import {
  WorkoutFolderFabGroup
} from "../../components/Workouts/WorkoutFolderFabGroup/WorkoutFolderFabGroup";
import { FolderHeading } from "../../components/Workouts/FolderHeading/FolderHeading";
import { FolderExercises } from "../../components/Workouts/FolderExercises/FolderExercises";
import { useFolder } from "../../hooks/useFolder";

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

  const folderId = route.params.folderId;
  const { isError, error, isLoading, folder } = useFolder(folderId);

  if (isLoading) {
    return (
      <Text>Loading...</Text>
    );
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <FolderHeading folderName={folder!.name} />
      <FolderExercises exercises={folder!.exercises}/>
      <WorkoutFolderFabGroup />
    </ScrollView>
  );
};
