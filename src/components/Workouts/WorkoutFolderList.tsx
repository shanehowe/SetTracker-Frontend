import { StyleSheet, Text } from "react-native";
import { WorkoutFolder } from "../../types";
import { WorkoutFolderItem } from "./WorkoutFolderItem";
import { useQuery } from "@tanstack/react-query";
import workoutFolderService from "../../services/workoutFolders";
import { Card, List } from "react-native-paper";

export const WorkoutFolderList = () => {
  const {
    isLoading,
    error,
    data: workoutFolders,
  } = useQuery<WorkoutFolder[]>({
    queryKey: ["workoutFolders"],
    queryFn: workoutFolderService.getAll,
  });

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Card
      mode="contained"
      style={styles.card}
    >
      <List.Section>
        {workoutFolders!.map((folder, index) => (
          <WorkoutFolderItem
            key={folder.id}
            folder={folder}
            showDivider={index !== workoutFolders!.length - 1}
          />
        ))}
      </List.Section>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  }
});
