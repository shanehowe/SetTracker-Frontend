import { useState } from "react";
import { useSnack } from "../../../contexts/SnackbarContext";
import { isValidFolderName } from "../../../validation/workoutFolderValidation";
import { WorkoutFolder } from "../../../types";
import { useAddFolderMutation } from "../../../hooks/useAddFolderMutation";
import { TextInputModal } from "../../Modals/TextInputModal/TextInputModal";

interface AddWorkoutFolderModalProps {
  visible: boolean;
  hideModal: () => void;
}

export const AddWorkoutFolderModal = ({
  visible,
  hideModal,
}: AddWorkoutFolderModalProps) => {
  const [folderName, setFolderName] = useState("");
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const snackService = useSnack();

  const onAddWorkoutFolderSuccess = (data: WorkoutFolder) => {
    snackService.success(`Created folder ${data.name}`);
    hideModal();
    setFolderName("");
    setFormErrorMessage("");
  };

  const onAddWorkoutFolderError = (error: Error) => {
    snackService.error(error.message);
  };

  const addWorkoutFolderMutation = useAddFolderMutation(
    onAddWorkoutFolderSuccess,
    onAddWorkoutFolderError
  );

  const handleFolderNameChange = (text: string) => {
    setFolderName(text);
  };

  const handleAddFolder = () => {
    const trimmedFolderName = folderName.trim();
    const validationResult = isValidFolderName(trimmedFolderName);
    if (!validationResult.isValid) {
      setFormErrorMessage(validationResult.message);
      return;
    }
    addWorkoutFolderMutation.mutate(trimmedFolderName);
  };

  const handleModalDismiss = () => {
    setFormErrorMessage("");
    hideModal();
  }

  return (
    <TextInputModal
      errorMessage={formErrorMessage}
      visible={visible}
      onDismiss={handleModalDismiss}
      title="Add Workout Folder"
      placeholder="Folder Name"
      onChageText={handleFolderNameChange}
      onSubmit={handleAddFolder}
      testID="add-workout-folder-modal"
    />
  );
};

