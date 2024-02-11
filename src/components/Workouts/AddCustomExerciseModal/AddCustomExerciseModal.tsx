import { View, StyleSheet } from "react-native";
import {
  Modal,
  Button,
  Text,
  Portal,
  TextInput,
  useTheme,
} from "react-native-paper";
import { useKeyboardAdjustment } from "../../../hooks/useKeyboardAdjustment";
import { useAddCustomExerciseMutation } from "../../../hooks/useAddCustomExerciseMutation";
import { useSnack } from "../../../contexts/SnackbarContext";
import { Exercise } from "../../../types";
import { useState } from "react";

interface AddCustomExerciseModalProps {
  visible: boolean;
  hideModal: () => void;
  handleSearchChange: (text: string) => void;
}

export const AddCustomExerciseModal = ({
  visible,
  hideModal,
  handleSearchChange
}: AddCustomExerciseModalProps) => {
  const [exerciseName, setExerciseName] = useState("");
  const bottom = useKeyboardAdjustment();
  const theme = useTheme();
  const snackService = useSnack();

  const handleAddCustomExerciseSuccess = (createdExercise: Exercise) => {
    snackService.success(`Added ${createdExercise.name}!`);
    hideModal();
    setExerciseName("");
    handleSearchChange(createdExercise.name);
  };

  const handleAddCustomExerciseError = (error: Error) => {
    snackService.error(error.message);
  };

  const addCustomExerciseMutation = useAddCustomExerciseMutation(
    handleAddCustomExerciseSuccess,
    handleAddCustomExerciseError
  );

  return (
    <Portal>
      <Modal
        onDismiss={hideModal}
        testID="add-custom-exercise-modal"
        visible={visible}
        contentContainerStyle={[
          styles.modal,
          { backgroundColor: theme.colors.surface, bottom },
        ]}
      >
        <View style={styles.contentContainer}>
          <View>
            <Text>Add Custom Exercise</Text>
          </View>

          <View>
            <TextInput
              onChangeText={(text) => setExerciseName(text)}
              mode="outlined"
              label="Exercise Name"
              testID="exercise-name-input"
            />
          </View>
          <View style={styles.footer}>
            <Button
              testID="add-button"
              mode="contained"
              onPress={() => addCustomExerciseMutation.mutate(exerciseName)}
            >
              Add Exercise
            </Button>

            <Button testID="cancel-button" onPress={hideModal} mode="outlined">
              Cancel
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    height: 300,
  },
  footer: {
    gap: 10,
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  contentContainer: {
    justifyContent: "space-evenly",
    height: "100%",
  },
});
