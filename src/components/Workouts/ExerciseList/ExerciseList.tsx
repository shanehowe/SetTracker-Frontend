import { Exercise } from "../../../types";
import { ExerciseItem } from "../ExerciseItem/ExerciseItem";
import { List } from "react-native-paper";

interface ExerciseListProps {
  exercises: Exercise[];
  handleExerciseItemOnPress: () => void;
}

export const ExerciseList = ({ exercises, handleExerciseItemOnPress }: ExerciseListProps) => {
  return (
    <List.Section testID="exercise-list">
      {exercises &&
        exercises.map((exercise, idx) => (
          <ExerciseItem
            key={exercise.id}
            exercise={exercise}
            handleOnPress={handleExerciseItemOnPress}
            showDivider={idx !== exercises.length - 1}
          />
        ))}
    </List.Section>
  );
};
