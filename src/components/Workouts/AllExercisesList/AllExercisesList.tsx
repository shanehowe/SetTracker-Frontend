import { ActivityIndicator, Card, Text } from "react-native-paper";
import { useExercises } from "../../../hooks/useExercises";
import { EmptyExerciseList } from "../EmptyExerciseList/EmptyExerciseList";
import { ExerciseList } from "../ExerciseList/ExerciseList";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types";

interface AllExerciseListProps {
  searchFilter: string;
  showModal: () => void;
}

export const AllExerciseList = ({
  searchFilter,
  showModal,
}: AllExerciseListProps) => {
  const { isError, isLoading, error, exercises } = useExercises(searchFilter);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToSetHistoryScreen = (exerciseId: string) => {
    navigation.navigate("SetHistory", { exerciseId });
  };

  let content = null;
  if (isLoading) {
    content = (
      <ActivityIndicator
        testID="loading-comp"
        style={{ alignSelf: "center", padding: 5 }}
      />
    );
  } else if (isError && error) {
    content = <Text>Error: {error.message}</Text>;
  } else if (exercises && exercises.length === 0) {
    content = <EmptyExerciseList showModal={showModal} />;
  } else {
    content = <ExerciseList exercises={exercises} handleExerciseItemOnPress={goToSetHistoryScreen} />;
  }

  return (
    <Card testID="all-exercises-card" mode="contained">
      {content}
    </Card>
  );
};
