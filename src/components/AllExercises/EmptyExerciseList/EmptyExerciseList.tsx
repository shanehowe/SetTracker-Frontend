import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

export const EmptyExerciseList = () => {
  return (
    <View style={styles.container} testID="empty-exercise-list-container">
      <Text variant="bodyMedium" testID="cant-find-exericse-text">
        Can't find that exercise?
      </Text>
      <Button onPress={() => {}} testID="add-user-exercise-button">
        Add it here
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: 10,
  },
});
