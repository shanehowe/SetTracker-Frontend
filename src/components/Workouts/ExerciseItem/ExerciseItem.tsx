import { Divider, List, useTheme } from "react-native-paper";
import { Exercise } from "../../../types";

interface ExerciseItemProps {
  exercise: Exercise;
  handleOnPress: (exerciseId: string) => void;
  showDivider: boolean;
}

export const ExerciseItem = ({
  exercise,
  handleOnPress,
  showDivider,
}: ExerciseItemProps) => {
  const theme = useTheme();

  return (
    <>
      <List.Item
        title={exercise.name}
        onPress={() => handleOnPress(exercise.id)}
        testID="exercise-item"
        right={(props) => <List.Icon {...props} icon="chevron-right" />}
      />
      {showDivider && (
        <Divider
          testID="exercise-item-divider"
          style={{
            width: "100%",
            alignSelf: "center",
            backgroundColor: theme.colors.outline,
          }}
        />
      )}
    </>
  );
};
