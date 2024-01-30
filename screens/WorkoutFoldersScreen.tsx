import React from "react";
import { ScreenProps } from "../interfaces";
import { Button, Text, useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { AddWorkoutFolderFAB } from "../components/Buttons/AddWorkoutFolderFAB";
import { WorkoutFolderList } from "../components/Workouts/WorkoutFolderList";

export const WorkoutFoldersScreen = ({ navigation }: ScreenProps) => {
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <AddWorkoutFolderFAB onPress={() => {}} />
      <View style={styles.allExercisesButtonContainer}>
        <Button mode="contained" style={styles.allExercisesButton}>
          All Exercises
        </Button>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", textAlign: "center", padding: 10 }}>
          Your Workout Folders
        </Text>
        <WorkoutFolderList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fabStyle: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  allExercisesButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    width: "100%",
  },
  allExercisesButton: {
    width: "95%",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
