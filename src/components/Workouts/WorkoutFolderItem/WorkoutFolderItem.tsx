import { Divider, List, useTheme } from "react-native-paper";
import { WorkoutFolder, RootStackParamList } from "../../../types";
import { Fragment } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface WorkoutFolderItemProps {
  folder: WorkoutFolder;
  showDivider: boolean;
}

export const WorkoutFolderItem = ({
  folder,
  showDivider,
}: WorkoutFolderItemProps) => {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToFolderExercises = () => {
    navigation.navigate("FolderExercises", {
      folderId: folder.id,
    });
  };

  return (
    <Fragment>
      <List.Item
        onPress={goToFolderExercises}
        title={folder.name}
        left={(props) => (
          <List.Icon
            {...props}
            icon="folder"
            color={theme.colors.primary}
          />
        )}
        right={(props) => <List.Icon {...props} icon="chevron-right" />}
        testID="workout-folder-item"
      />

      {showDivider && (
        <Divider
          style={{
            width: "100%",
            alignSelf: "center",
            backgroundColor: theme.colors.outline,
          }}
          testID="workout-folder-divider"
        />
      )}
    </Fragment>
  );
};
