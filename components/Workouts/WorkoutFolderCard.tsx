import { Card, Icon, useTheme } from "react-native-paper";
import { WorkoutFolder } from "../../types";

interface WorkoutFolderCardProps {
  folder: WorkoutFolder;
}

export const WorkoutFolderCard = ({ folder }: WorkoutFolderCardProps) => {
  const theme = useTheme();

  return (
    <Card
      mode="contained"
      key={folder.id}
      onPress={() => console.log("Pressed")}
      style={{ width: "95%" }}
    >
      <Card.Title
        title={folder.name}
        left={(props) => (
          <Icon {...props} source="folder" color={theme.colors.primary} />
        )}
        subtitle={folder.exercises.length + " exercises"}
      />
    </Card>
  );
};
