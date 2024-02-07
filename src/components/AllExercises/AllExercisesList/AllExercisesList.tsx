import { Card, List, useTheme, Text } from "react-native-paper";
import { useExercises } from "../../../hooks/useExercises";
import { ExerciseItem } from "../ExerciseItem/ExerciseItem";
import { EmptyExerciseList } from "../EmptyExerciseList/EmptyExerciseList";

interface AllExerciseListProps {
  searchFilter: string,
};

export const AllExerciseList = ({ searchFilter }: AllExerciseListProps) => {
  const theme = useTheme();
  const { isError, isLoading, error, exercises } = useExercises(searchFilter);

  if (isLoading) return <Text>Loading...</Text>

  return (
    <Card
      testID="all-exercises-card"
      mode="contained"
    >
      <List.Section
        testID="all-exercises-list"
      >
        {exercises.length === 0 && <EmptyExerciseList />}
        {exercises && exercises.map((exercise, idx) => (
            <ExerciseItem
              key={exercise.name}
              exercise={exercise}
              handleOnPress={() => {}}
              showDivider={idx !== exercises.length - 1}
            />
        ))}
      </List.Section>
    </Card>
  );
};