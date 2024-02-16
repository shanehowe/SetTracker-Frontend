import { StyleSheet } from "react-native";
import { useState } from "react";
import { useSnack } from "../../../contexts/SnackbarContext";
import { isValidFolderName } from "../../../utils/validation";
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
  const snackService = useSnack();

  const onAddWorkoutFolderSuccess = (data: WorkoutFolder) => {
    snackService.success(`Created folder ${data.name}`);
    hideModal();
    setFolderName("");
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
      snackService.error(validationResult.message);
      return;
    }
    addWorkoutFolderMutation.mutate(trimmedFolderName);
  };

  return (
    <TextInputModal
      visible={visible}
      onDismiss={hideModal}
      title="Add Workout Folder"
      placeholder="Folder Name"
      onChageText={handleFolderNameChange}
      onSubmit={handleAddFolder}
      testID="add-workout-folder-modal"
    />
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    height: 300,
    justifyContent: "space-around",
  },
  footer: {
    gap: 10,
    justifyContent: "space-evenly",
    alignContent: "center",
  },
});
