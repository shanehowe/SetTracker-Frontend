import { Exercise } from "../../../types";
import { ExerciseCheckbox } from "../ExerciseCheckbox/ExerciseCheckbox";
import { Card } from "react-native-paper";

interface ExerciseCheckboxListProps {
  exercises: Exercise[];
  selectedExercises: Exercise[];
  onExerciseSelect: (exercise: Exercise) => void;
}

export const ExerciseCheckboxList = ({
  exercises,
  selectedExercises,
  onExerciseSelect,
}: ExerciseCheckboxListProps) => {
  return (
    <Card
      mode="contained"
      testID="exercise-checkbox-list"
      style={{ width: "95%" }}
    >
      {exercises.map((exercise) => {
        const isSelected = selectedExercises.some(
          (selectedExercise) => selectedExercise.id === exercise.id
        );

        return (
          <ExerciseCheckbox
            key={exercise.id}
            exercise={exercise}
            isSelected={isSelected}
            onExerciseSelect={onExerciseSelect}
          />
        );
      })}
    </Card>
  );
};
