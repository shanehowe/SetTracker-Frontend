import { Divider, List, Surface } from "react-native-paper";
import { StyleSheet } from "react-native";

export const OptionsList = () => {
  return (
    <Surface
      mode="flat"
      style={styles.surfaceStyles}
      elevation={5}
      testID="options-list-surface"
    >
      <List.Item
        title="Account"
        left={(props) => <List.Icon {...props} icon={"account"} />}
        right={(props) => <List.Icon {...props} icon={"chevron-right"} />}
      />
      <Divider bold={true} />
      <List.Item
        title="Appearance"
        left={(props) => <List.Icon {...props} icon={"eye"} />}
        right={(props) => <List.Icon {...props} icon={"chevron-right"} />}
      />
      <Divider bold={true} />
      <List.Item
        title="Feedback"
        left={(props) => <List.Icon {...props} icon={"message"} />}
        right={(props) => <List.Icon {...props} icon={"chevron-right"} />}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  surfaceStyles: {
    width: "90%",
    padding: 8,
    borderRadius: 8,
    marginTop: 20,
  },
});