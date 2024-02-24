import { Button, Card, useTheme, Text } from "react-native-paper";
import { ScreenProps } from "../../interfaces";
import { ScrollView, StyleSheet, View } from "react-native";
import { SetItem } from "../../components/Workouts/SetItem/SetItem";
import { SetItemGroup } from "../../components/Workouts/SetItemGroup/SetItemGroup";

const sets = [
  {
    id: "1",
    timeStamp: new Date().toLocaleTimeString(),
    weight: 50,
    reps: 10
  },
  {
    id: "2",
    timeStamp: new Date().toLocaleTimeString(),
    weight: 50,
    reps: 10
  }
]

export const SetHistoryScreen = ({ navigation }: ScreenProps) => {
  const theme = useTheme();

  return (
    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Button onPress={navigation.goBack}>Go Back</Button>
        <SetItemGroup sets={sets} date={new Date().toDateString()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
});