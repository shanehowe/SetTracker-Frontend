import { Card, Divider, List } from "react-native-paper";

export const FolderExercises = () => {
  return (
    <Card
      testID="folder-exercises-container"
      mode="contained"
      style={{
        width: "95%",
        alignSelf: 'center'
      }}
    >
      <List.Section>
        <List.Item title="Hello" />
        <Divider />
        <List.Item title="Hello" />
        <Divider />
        <List.Item title="Hello" />
      </List.Section>
    </Card>
  );
};