import { StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox, Text } from "react-native-paper";
import { Exercise } from "../../../types";

interface ExerciseCheckboxProps {
  isSelected: boolean;
  onExerciseSelect: (exerciseId: string) => void;
  exercise: Exercise
}

export const ExerciseCheckbox = ({
  isSelected,
  onExerciseSelect,
  exercise,
}: ExerciseCheckboxProps) => {
  return (
    <TouchableOpacity
      testID="exercise-checkbox-container"
      style={styles.checkboxContainer}
      onPress={() => onExerciseSelect(exercise.id)}
    >
      <Text>{exercise.name}</Text>
      <Checkbox
        testID="exercise-checkbox"
        status={isSelected ? "checked" : "unchecked"}
        onPress={() => onExerciseSelect(exercise.id)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  }
});
