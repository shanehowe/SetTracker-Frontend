import { View } from "react-native";
import { Exercise } from "../../../types";
import { ExerciseCheckbox } from "../ExerciseCheckbox/ExerciseCheckbox";

interface ExerciseCheckboxListProps {
  exercises: Exercise[];
  selectedExercises: Exercise[];
  onExerciseSelect: (id: string) => void;
}

export const ExerciseCheckboxList = ({
  exercises,
  selectedExercises,
  onExerciseSelect,
}: ExerciseCheckboxListProps) => {
  return (
    <View
      testID="exercise-checkbox-list"
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
    </View>
  );
};
