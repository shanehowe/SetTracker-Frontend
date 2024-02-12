import { StyleSheet, View } from "react-native";
import { Text, Icon } from "react-native-paper";

interface FolderHeadingProps {
  folderName: string;
};

export const FolderHeading = ({ folderName }: FolderHeadingProps) => {
  return (
    <View style={styles.folderHeadingContainer}>
      <Text variant="titleLarge" testID="folder-heading">{folderName}</Text>
      <Icon testID="folder-heading-icon" source="folder-open" size={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  folderHeadingContainer: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginTop: 12
  }
});
