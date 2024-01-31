import React from "react";
import { ScreenProps } from "../interfaces";
import { Button, Text, useTheme } from "react-native-paper";
import { StyleSheet, View, ScrollView } from "react-native";
import { AddWorkoutFolderFAB } from "../components/Buttons/AddWorkoutFolderFAB";
import { WorkoutFolderList } from "../components/Workouts/WorkoutFolderList";
import { AddWorkoutFolderModal } from "../components/Workouts/AddWorkoutFolderModal";

export const WorkoutFoldersScreen = ({ navigation }: ScreenProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const theme = useTheme();

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
    <ScrollView contentContainerStyle={[{ backgroundColor: theme.colors.background }]}>
      <AddWorkoutFolderModal visible={modalVisible} hideModal={hideModal} />
      
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
    </ScrollView>
    <AddWorkoutFolderFAB onPress={showModal} />
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
