import { StyleSheet } from "react-native";
import { WorkoutFolder } from "../../../types";
import { WorkoutFolderItem } from "../WorkoutFolderItem/WorkoutFolderItem";
import { useQuery } from "@tanstack/react-query";
import workoutFolderService from "../../../services/workoutFolders";
import { Card, List, Text } from "react-native-paper";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

export const WorkoutFolderList = () => {
  const [_, setForceRefresh] = useState(0);
  const {
    isLoading,
    error,
    data: workoutFolders,
  } = useQuery<WorkoutFolder[]>({
    queryKey: ["workoutFolders"],
    queryFn: workoutFolderService.getAll,
  });

  // TODO (FIX): Forces a refresh of the workout folders list when the screen is focused
  //       List is not being re-rendered after renaming a folder
  //       So we need to force a refresh of the list when the screen is focused
  useFocusEffect(useCallback(() => {
    setForceRefresh((prev) => prev + 1);
  }, []));

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Card
      testID="workout-folders-card"
      mode="contained"
      style={styles.card}
    >
      {workoutFolders?.length ? (
        <List.Section testID="workout-folders-list">
          {workoutFolders!.map((folder, index) => (
            <WorkoutFolderItem
              key={folder.id}
              folder={folder}
              showDivider={index !== workoutFolders!.length - 1}
            />
          ))}
        </List.Section>
      ) : (
        <Text style={styles.text}>
          No workout folders. Click the button below to create one!
        </Text>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    padding: 20,
  },
});
