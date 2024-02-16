import { Text, useTheme } from "react-native-paper";
import { ScrollView } from "react-native";
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

  useFocusEffect(() => {
    setVisible(true);
    return () => {
      setVisible(false);
    };
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <FolderHeading folderName={folder!.name} />
      <FolderExercises exercises={folder!.exercises} />
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
        onDismiss={() => setModalVisible(false)}
        onSubmit={handleRenameFolder}
        onChageText={(text) => setNewFolderName(text)}
        testID="rename-folder-modal"
      />
      <ConfirmDeleteModal
        visible={deleteModalVisible}
        onDismiss={() => setDeleteModalVisible(false)}
        onConfirm={handleDeleteFolder}
        title="Delete Folder"
        message="Are you sure you want to delete this folder?"
      />
    </ScrollView>
  );
};
