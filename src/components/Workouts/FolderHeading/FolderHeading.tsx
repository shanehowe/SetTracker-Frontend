import { StyleSheet, View } from "react-native";
import { Text, Icon, useTheme } from "react-native-paper";

interface FolderHeadingProps {
  folderName: string;
};

export const FolderHeading = ({ folderName }: FolderHeadingProps) => {
  return (
    <View style={styles.folderHeadingContainer}>
      <Text variant="titleMedium" testID="folder-heading">{folderName}</Text>
      <Icon testID="folder-heading-icon" source="information" size={23} />
    </View>
  );
};

const styles = StyleSheet.create({
  folderHeadingContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 20,
    marginBottom: 5,
    width: "90%",
    alignSelf: "center",
  }
});
