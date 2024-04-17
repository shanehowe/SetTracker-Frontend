import { Card, Text } from "react-native-paper";
import { SetItem } from "../SetItem/SetItem";
import { StyleSheet, View } from "react-native";
import { ExerciseSet } from "../../../types";
import { formartUtcDateToLocalDateString } from "../../../utils/dateUtils";

interface SetItemGroupProps {
  date: string
  sets: ExerciseSet[];
}

export const SetItemGroup = ({ date, sets }: SetItemGroupProps) => {
  return (
    <View testID="set-item-group-container">
      <View style={{ width: '90%', alignSelf: 'center' }}>
        <Text variant="titleSmall">{formartUtcDateToLocalDateString(date)}</Text>
      </View>
      <Card mode="contained" style={styles.card}>
        {sets.map((set) => <SetItem key={set.id} set={set} />)}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
  },
});
