import { Card } from "react-native-paper";
import { ExerciseList } from "../ExerciseList/ExerciseList";
import { Exercise, RootStackParamList } from "../../../types";
import { EmptyFolderExerciseList } from "../EmptyFolderExercisesList/EmptyFolderExerciseList";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface FolderExercisesProps {
  exercises: Exercise[];
  folderId: string;
}

export const FolderExercises = ({
  exercises,
  folderId,
}: FolderExercisesProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToSetHistoryScreen = () => {
    navigation.navigate("SetHistory");
  };

  let content;

  if (exercises && exercises.length > 0) {
    content = (
      <ExerciseList
        exercises={exercises}
        handleExerciseItemOnPress={goToSetHistoryScreen}
      />
    );
  } else {
    content = <EmptyFolderExerciseList folderId={folderId} />;
  }
  return (
    <Card
      testID="folder-exercises-container"
      mode="contained"
      style={{
        width: "90%",
        alignSelf: "center",
      }}
    >
      {content}
    </Card>
  );
};
