import { ScrollView, StyleSheet, View } from "react-native";
import { Searchbar } from "../../components/Workouts/Searchbar/Searchbar";
import { ExerciseCheckboxList } from "../../components/Workouts/ExerciseCheckboxList/ExerciseCheckboxList";
import { useState } from "react";
import { useExercises } from "../../hooks/useExercises";
import { ScreenProps } from "../../interfaces";
import { Button, Text, useTheme } from "react-native-paper";
import { useCheckboxGroup } from "../../hooks/useCheckboxGroup";
import { Exercise } from "../../types";
import { useFolder } from "../../hooks/useFolder";
import { useUpdateExercisesMutation } from "../../hooks/useUpdateExercisesMutation";
import { useSnack } from "../../contexts/SnackbarContext";
import { EmptyExerciseList } from "../../components/Workouts/EmptyExerciseList/EmptyExerciseList";
import { AddCustomExerciseModal } from "../../components/Workouts/AddCustomExerciseModal/AddCustomExerciseModal";

interface AddExercisesScreenProps extends ScreenProps {
  route: {
    params: {
      folderId: string;
    };
  };
}

export const AddExercisesScreen = ({
  navigation,
  route,
}: AddExercisesScreenProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [addExerciseModalVisible , setAddExerciseModalVisible] = useState(false);

  const folderData = useFolder(route.params.folderId);

  const compareFunction = (item: Exercise, compareItem: Exercise) => {
    return item.id === compareItem.id;
  }

  const { selected, handleSelect } = useCheckboxGroup<Exercise>(
    folderData.folder?.exercises.map((exercise: Exercise) => exercise) || [],
    compareFunction
  );

  const { isLoading, isError, error, exercises } = useExercises(searchQuery);

  const theme = useTheme();
  const snack = useSnack();

  const hideModal = () => setAddExerciseModalVisible(false);
  const showModal = () => setAddExerciseModalVisible(true);

  const onSuccessCallback = () => {
    navigation.navigate("FolderExercises", {
      folderId: route.params.folderId,
      updated: true,
    });
    snack.success("Exercises updated");
  };

  const onErrorCallback = () => {
    snack.error("Error updating exercises");
  };

  const updateExercisesMutation = useUpdateExercisesMutation(
    route.params.folderId,
    onSuccessCallback,
    onErrorCallback
  );

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const handleCancel = () => navigation.goBack();
  const handleConfirm = () => updateExercisesMutation.mutate(selected);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <AddCustomExerciseModal
        visible={addExerciseModalVisible}
        handleSearchChange={onChangeSearch}
        hideModal={hideModal}
      />
      <View style={styles.searchbarContainer}>
        <Searchbar
          searchFilter={searchQuery}
          handleSearchChange={onChangeSearch}
        />
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.checkboxContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <ExerciseCheckboxList
          exercises={exercises}
          selectedExercises={selected}
          onExerciseSelect={handleSelect}
        />
        {exercises.length === 0 && <EmptyExerciseList showModal={showModal} />}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleConfirm}>
          Confirm Selection
        </Button>

        <Button onPress={handleCancel}>Cancel</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbarContainer: {
    padding: 10,
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
  },

  checkboxContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    alignSelf: "center",
    marginTop: 16,
  },
  buttonContainer: {
    justifyContent: "space-around",
    margin: 10,
    gap: 10,
    width: "90%",
    alignSelf: "center",
  },
});
