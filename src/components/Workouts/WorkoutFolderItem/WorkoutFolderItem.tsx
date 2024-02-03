import { Divider, List, useTheme } from "react-native-paper";
import { WorkoutFolder } from "../../../types";
import { Fragment } from "react";

interface WorkoutFolderItemProps {
  folder: WorkoutFolder;
  showDivider: boolean;
}

export const WorkoutFolderItem = ({
  folder,
  showDivider,
}: WorkoutFolderItemProps) => {
  const theme = useTheme();

  return (
    <Fragment key={folder.id}>
      <List.Item
        onPress={() => console.log(`Pressed ${folder.name}`)}
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
