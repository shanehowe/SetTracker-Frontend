import { Card, Divider, List } from "react-native-paper";
import { ExerciseList } from "../ExerciseList/ExerciseList";
import { Exercise } from "../../../types";

interface FolderExercisesProps {
  exercises: Exercise[];
}

export const FolderExercises = ({ exercises }: FolderExercisesProps) => {
  return (
    <Card
      testID="folder-exercises-container"
      mode="contained"
      style={{
        width: "90%",
        alignSelf: 'center'
      }}
      >
      <ExerciseList exercises={exercises}/>
    </Card>
  );
};