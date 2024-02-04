import {
  Modal,
  Portal,
  Text,
  TextInput,
  Button,
  useTheme,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import workoutFolderService from "../../../services/workoutFolders";
import { useState } from "react";
import { useSnack } from "../../../contexts/SnackbarContext";
import { isValidFolderName } from "../../../utils/validation";

interface AddWorkoutFolderModalProps {
  visible: boolean;
  hideModal: () => void;
}

export const AddWorkoutFolderModal = ({
  visible,
  hideModal,
}: AddWorkoutFolderModalProps) => {
  const [folderName, setFolderName] = useState("");

  const theme = useTheme();
  const queryClient = useQueryClient();
  const snackService = useSnack();

  const addWorkoutFolderMutation = useMutation({
    mutationFn: async (folderName: string) => {
      const response = await workoutFolderService.create(folderName);
      return response;
    },
    onSuccess: (createdFolder) => {
      queryClient.setQueryData(["workoutFolders"], (oldFolders: any) => [
        ...oldFolders,
        createdFolder,
      ]);
      hideModal();
      setFolderName("");
      snackService.success(`Created folder ${createdFolder.name}`);
    },
    onError: (error) => {
      snackService.error(error.message);
    },
  });

  const handleFolderNameChange = (text: string) => {
    setFolderName(text);
  };

  const handleAddFolder = () => {
    const trimmedFolderName = folderName.trim();
    console.log(trimmedFolderName)
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
          { backgroundColor: theme.colors.background },
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
          <Button mode="outlined" onPress={hideModal}>
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
