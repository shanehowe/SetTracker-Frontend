import {
  Modal,
  Portal,
  Text,
  TextInput,
  Button,
  useTheme,
} from "react-native-paper";
import {
  Keyboard,
  Platform,
  StyleSheet,
  View,
  KeyboardEvent,
} from "react-native";
import { useEffect, useState } from "react";
import { useSnack } from "../../../contexts/SnackbarContext";
import { isValidFolderName } from "../../../utils/validation";
import { WorkoutFolder } from "../../../types";
import { useAddFolderMutation } from "../../../hooks/useAddFolderMutation";
import { useKeyboardAdjustment } from "../../../hooks/useKeyboardAdjustment";

interface AddWorkoutFolderModalProps {
  visible: boolean;
  hideModal: () => void;
}

export const AddWorkoutFolderModal = ({
  visible,
  hideModal,
}: AddWorkoutFolderModalProps) => {
  const [folderName, setFolderName] = useState("");
  const bottom = useKeyboardAdjustment();

  const theme = useTheme();
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
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={[
          styles.modal,
          { backgroundColor: theme.colors.background, bottom },
        ]}
        testID="add-workout-folder-modal"
      >
        <View>
          <Text variant="titleMedium">Add Workout Folder</Text>
        </View>

        <View>
          <TextInput
            onChangeText={handleFolderNameChange}
            mode="outlined"
            label="Folder Name"
            testID="add-folder-text-input"
          />
        </View>

        <View style={styles.footer}>
          <Button
            mode="contained"
            onPress={handleAddFolder}
            testID="add-button"
          >
            Add Folder
          </Button>
          <Button
            mode="outlined"
            onPress={hideModal}
            testID="cancel-modal-button"
          >
            Cancel
          </Button>
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
    justifyContent: "space-around",
  },
  footer: {
    gap: 10,
    justifyContent: "space-evenly",
    alignContent: "center",
  },
});
