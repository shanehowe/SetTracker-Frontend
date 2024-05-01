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
import { isValidExerciseName } from "../../../validation/exerciseValidation";
import { TextInputModal } from "../../Modals/TextInputModal/TextInputModal";

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
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const snackService = useSnack();

  const handleAddCustomExerciseSuccess = (createdExercise: Exercise) => {
    snackService.success(`Added ${createdExercise.name}!`);
    hideModal();
    setExerciseName("");
    setFormErrorMessage("");
    handleSearchChange(createdExercise.name);
  };

  const handleAddCustomExerciseError = (error: Error) => {
    snackService.error(error.message);
  };

  const addCustomExerciseMutation = useAddCustomExerciseMutation(
    handleAddCustomExerciseSuccess,
    handleAddCustomExerciseError
  );

  const handleAddCustomExercise = () => {
    const result = isValidExerciseName(exerciseName);
    if (!result.isValid) {
      setFormErrorMessage(result.message);
      return;
    }
    addCustomExerciseMutation.mutate(exerciseName);
  }

  const handleModalDismiss = () => {
    setFormErrorMessage("");
    setExerciseName("");
    hideModal();
  }

  return (
    <TextInputModal
      visible={visible}
      title="Create custom exercise"
      onDismiss={handleModalDismiss}
      placeholder="exercise name..."
      onChageText={(text) => setExerciseName(text)}
      onSubmit={handleAddCustomExercise}
      testID="add-custom-exercise-modal"
      errorMessage={formErrorMessage}
    />
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
