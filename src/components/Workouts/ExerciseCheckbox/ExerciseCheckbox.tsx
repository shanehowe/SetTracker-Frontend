import { View } from "react-native";
import { Checkbox, Text } from "react-native-paper";
import { Exercise } from "../../../types";

interface ExerciseCheckboxProps {
  isSelected: boolean;
  onExerciseSelect: (id: string) => void;
  exercise: Exercise
}

export const ExerciseCheckbox = ({
  isSelected,
  onExerciseSelect,
  exercise,
}: ExerciseCheckboxProps) => {
  return (
    <View testID="exercise-checkbox-container">
      <Text>{exercise.name}</Text>
      <Checkbox
        testID="exercise-checkbox"
        status={isSelected ? "checked" : "unchecked"}
        onPress={() => onExerciseSelect(exercise.id)}
      />
    </View>
  );
};
