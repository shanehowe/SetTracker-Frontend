import { StyleSheet } from "react-native";
import { ApiException, WorkoutFolder } from "../../../types";
import { WorkoutFolderItem } from "../WorkoutFolderItem/WorkoutFolderItem";
import { useQuery } from "@tanstack/react-query";
import workoutFolderService from "../../../services/workoutFolders";
import {
  ActivityIndicator,
  Card,
  Divider,
  List,
  Text,
  useTheme,
} from "react-native-paper";
import React, { useState } from "react";
import axios from "axios";

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

  const theme = useTheme();

  if (isLoading) {
    return (
      <ActivityIndicator
        testID="folder-list-loader"
        animating={true}
        color={theme.colors.primary}
      />
    );
  }

  if (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return (
        <Text>
          You're session has expired. We need you to log in again
        </Text>
      );
    }
    return <Text>{error.message}</Text>
  };

  return (
    <Card testID="workout-folders-card" mode="contained" style={styles.card}>
      {workoutFolders?.length ? (
        <List.Section testID="workout-folders-list">
          {workoutFolders!.map((folder, index) => (
            <React.Fragment key={folder.id}>
              <WorkoutFolderItem folder={folder} />
              {index !== workoutFolders.length - 1 && (
                <Divider
                  style={{
                    width: "100%",
                    alignSelf: "center",
                    backgroundColor: theme.colors.outline,
                  }}
                  testID="workout-folder-divider"
                />
              )}
            </React.Fragment>
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
