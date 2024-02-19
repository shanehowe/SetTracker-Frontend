import { Card } from "react-native-paper";
import { ExerciseList } from "../ExerciseList/ExerciseList";
import { Exercise } from "../../../types";
import { EmptyFolderExerciseList } from "../EmptyFolderExercisesList/EmptyFolderExerciseList";

interface FolderExercisesProps {
  exercises: Exercise[];
  folderId: string;
}

export const FolderExercises = ({ exercises, folderId }: FolderExercisesProps) => {

  let content;

  if (exercises && exercises.length > 0) {
    content = <ExerciseList exercises={exercises}/>;
  } else {
    content = <EmptyFolderExerciseList folderId={folderId} />;
  }
  return (
    <Card
      testID="folder-exercises-container"
      mode="contained"
      style={{
        width: "90%",
        alignSelf: 'center'
      }}
      >
      { content }
    </Card>
  );
};