import { Text, useTheme } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { ScreenProps } from "../../interfaces";
import { WorkoutFolderFabGroup } from "../../components/Workouts/WorkoutFolderFabGroup/WorkoutFolderFabGroup";
import { FolderHeading } from "../../components/Workouts/FolderHeading/FolderHeading";
import { FolderExercises } from "../../components/Workouts/FolderExercises/FolderExercises";
import { useFolder } from "../../hooks/useFolder";
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import { TextInputModal } from "../../components/Modals/TextInputModal/TextInputModal";
import { useRenameFolderMutation } from "../../hooks/useRenameFolderMutation";
import { useSnack } from "../../contexts/SnackbarContext";
import { WorkoutFolder } from "../../types";
import { ConfirmDeleteModal } from "../../components/Modals/ConfirmDeleteModal/ConfirmDeleteModal";
import { useDeleteFolderMutation } from "../../hooks/useDeleteFolderMutation";
import { LoadingScreen } from "../common/LoadingScreen";
import { isValidFolderName } from "../../validation/workoutFolderValidation";

interface FolderExercisesScreenProps extends ScreenProps {
  route: {
    params: {
      folderId: string;
      updated?: boolean;
    };
  };
}

export const FolderExercisesScreen = ({
  route,
  navigation,
}: FolderExercisesScreenProps) => {
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [formError, setFormError] = useState("");

  const theme = useTheme();
  const snack = useSnack();

  const folderId = route.params.folderId;
  const { isError, error, isLoading, folder } = useFolder(folderId);

  const renameFolderOnSuccessCallback = (updatedFolder: WorkoutFolder) => {
    snack.success(`Folder renamed to ${updatedFolder.name}!`);
  };
  const renameFolderOnErrorCallback = () => {
    snack.error("Failed to rename folder");
  };

  const renameFolderMutation = useRenameFolderMutation(
    folderId,
    renameFolderOnSuccessCallback,
    renameFolderOnErrorCallback
  );

  const handleRenameFolder = () => {
    const validationResult = isValidFolderName(newFolderName);
    if (!validationResult.isValid) {
      setFormError(validationResult.message);
      return
    }
    renameFolderMutation.mutate(newFolderName);
    setModalVisible(false);
  };

  const deleteFolderOnSuccessCallback = () => {
    snack.success("Folder deleted");
    navigation.navigate("WorkoutFolders");
  };

  const deleteFolderOnErrorCallback = () => {
    snack.error("Error deleting folder");
  };

  const deleteFolderMutation = useDeleteFolderMutation(
    folderId,
    deleteFolderOnSuccessCallback,
    deleteFolderOnErrorCallback
  );

  const handleDeleteFolder = () => {
    deleteFolderMutation.mutate();
    setDeleteModalVisible(false);
  };

  const handleDismissRenameFolderModal = () => {
    setModalVisible(false);
    setFormError("");
    setNewFolderName("")
  }

  useFocusEffect(() => {
    setVisible(true);
    return () => {
      setVisible(false);
    };
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
    <ScrollView
      contentContainerStyle={{
        backgroundColor: theme.colors.background,
        marginTop: 30,
      }}
    >
      <FolderHeading folderName={folder!.name} />
      <FolderExercises exercises={folder!.exercises} folderId={folderId} />
      
    </ScrollView>
    <WorkoutFolderFabGroup
        visible={visible}
        folderId={folderId}
        handleRenameFolderClick={() => setModalVisible(true)}
        handleDeleteFolderClick={() => setDeleteModalVisible(true)}
      />
      <TextInputModal
        visible={modalVisible}
        placeholder="Folder Name"
        title="Rename Folder"
        onDismiss={handleDismissRenameFolderModal}
        onSubmit={handleRenameFolder}
        onChageText={(text) => setNewFolderName(text)}
        errorMessage={formError}
        testID="rename-folder-modal"
      />
      <ConfirmDeleteModal
        visible={deleteModalVisible}
        onDismiss={() => setDeleteModalVisible(false)}
        onConfirm={handleDeleteFolder}
        title="Delete Folder"
        message="Are you sure you want to delete this folder?"
      />
    </View>
  );
};
