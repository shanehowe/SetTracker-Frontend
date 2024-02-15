import { Text, useTheme } from "react-native-paper";
import { ScrollView } from "react-native";
import { ScreenProps } from "../../interfaces";
import { WorkoutFolderFabGroup } from "../../components/Workouts/WorkoutFolderFabGroup/WorkoutFolderFabGroup";
import { FolderHeading } from "../../components/Workouts/FolderHeading/FolderHeading";
import { FolderExercises } from "../../components/Workouts/FolderExercises/FolderExercises";
import { useFolder } from "../../hooks/useFolder";
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import { TextInputModal } from "../../components/Workouts/TextInputModal/TextInputModal";
import { useRenameFolderMutation } from "../../hooks/useRenameFolderMutation";
import { useSnack } from "../../contexts/SnackbarContext";
import { WorkoutFolder } from "../../types";

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
  const [newFolderName, setNewFolderName] = useState("");

  const theme = useTheme();
  const snack = useSnack();

  const folderId = route.params.folderId;
  const { isError, error, isLoading, folder } = useFolder(folderId);

  const onSuccessCallback = (updatedFolder: WorkoutFolder) => {
    snack.success(`Folder renamed to ${updatedFolder.name}!`);
  };
  const onErrorCallback = () => {
    snack.error("Failed to rename folder");
  };

  const renameFolderMutation = useRenameFolderMutation(
    folderId,
    onSuccessCallback,
    onErrorCallback
  );

  const handleRenameFolder = () => {
    renameFolderMutation.mutate(newFolderName);
    setModalVisible(false);
  }

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
    </ScrollView>
  );
};
