import React from "react";
import { ScreenProps } from "../../interfaces";
import { Button, Text, useTheme } from "react-native-paper";
import { StyleSheet, View, ScrollView } from "react-native";
import { AddWorkoutFolderFAB } from "../../components/Buttons/AddWorkoutFolderFAB/AddWorkoutFolderFAB";
import { WorkoutFolderList } from "../../components/Workouts/WorkoutFolderList/WorkoutFolderList";
import { AddWorkoutFolderModal } from "../../components/Workouts/AddWorkoutFolderModal/AddWorkoutFolderModal";

export const WorkoutFoldersScreen = ({ navigation }: ScreenProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const theme = useTheme();

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
    <ScrollView contentContainerStyle={[{ backgroundColor: theme.colors.background, marginTop: 30 }]}>
      <AddWorkoutFolderModal visible={modalVisible} hideModal={hideModal} />
      
      <View style={styles.allExercisesButtonContainer}>
        <Button
          mode="contained"
          style={styles.allExercisesButton}
          onPress={() => navigation.navigate("AllExercises")}
        >
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
    width: "100%",
    marginBottom: 20,
  },
  allExercisesButton: {
    width: "90%",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
