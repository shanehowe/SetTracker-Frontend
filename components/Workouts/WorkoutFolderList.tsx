import { View, StyleSheet } from "react-native";
import { WorkoutFolder } from "../../types";
import { WorkoutFolderCard } from "./WorkoutFolderCard";

const workoutFolders: WorkoutFolder[] = [
  {
    id: "1",
    name: "Chest Day",
    exercises: ["Bench Press", "Incline Bench Press", "Decline Bench Press"],
  },
  {
    id: "2",
    name: "Back and Biceps",
    exercises: ["Deadlift", "Pull Ups", "Rows"],
  },
];

export const WorkoutFolderList = () => {
  return (
    <View style={styles.workoutFolderList}>
      {workoutFolders.map((folder) => (
        <WorkoutFolderCard key={folder.id} folder={folder} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  workoutFolderList: {
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    width: "100%",
    gap: 15,
  },
});
