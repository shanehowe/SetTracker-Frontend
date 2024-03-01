import { StyleSheet, View } from "react-native";
import { SetHistory as SetHistoryType } from "../../../types";
import { SetItemGroup } from "../SetItemGroup/SetItemGroup";
import { Card, Text } from "react-native-paper";

interface SetHistoryProps {
  history: SetHistoryType[];
}

export const SetHistory = ({ history }: SetHistoryProps) => {
  let content;
  if (history.length === 0) {
    content = (
      <Card mode="contained" style={styles.card}>
        <Text variant="titleMedium" style={styles.text}>
          No history to display
        </Text>
        <Text variant="titleMedium" style={styles.text}>
          Press below to get started
        </Text>
      </Card>
    );
  } else {
    content = history.map((item) => (
      <SetItemGroup key={item.date} date={item.date} sets={item.sets} />
    ));
  }
  return (
    <View style={styles.container} testID="set-history">
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 25,
  },
  text: {
    textAlign: "center",
  },
  card: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 20,
  },
});
