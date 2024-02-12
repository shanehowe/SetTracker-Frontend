import { Exercise } from "../../../types";
import { ExerciseItem } from "../ExerciseItem/ExerciseItem";
import { List } from "react-native-paper";

interface ExerciseListProps {
  exercises: Exercise[];
}

export const ExerciseList = ({ exercises }: ExerciseListProps) => {
  return (
    <List.Section testID="exercise-list">
      {exercises &&
        exercises.map((exercise, idx) => (
          <ExerciseItem
            key={exercise.name}
            exercise={exercise}
            handleOnPress={() => {}}
            showDivider={idx !== exercises.length - 1}
          />
        ))}
    </List.Section>
  );
};
