import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { RootStackParamList } from "../../../types/index";

interface EmptyFolderExerciseListProps {
  folderId: string;
}

export const EmptyFolderExerciseList = ({ folderId }: EmptyFolderExerciseListProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToAddExercisesScreen = () => {
    navigation.navigate("AddExercises", { folderId })
  };

  return (
    <View style={styles.container} testID="empty-folder-exercise-list-container">
      <Text variant="bodyMedium">
        Your folder is empty
      </Text>
      <Text variant="bodyMedium">
        Press the button below to get started
      </Text>
      <Button onPress={goToAddExercisesScreen}>
        Add Exercises
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    padding: 10,
  },
});