import { FAB, useTheme } from "react-native-paper";
import { ScreenProps } from "../../interfaces";
import { ScrollView, StyleSheet, View } from "react-native";
import { useCallback, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { AddSetBottomSheet } from "../../components/Workouts/AddSetBottomSheet/AddSetBottomSheet";
import { SetHistory } from "../../components/Workouts/SetHistory/SetHistory";


const history = [
  {
    date: new Date().toDateString(),
    sets: [
      {
        id: "1",
        timeStamp: new Date().toLocaleTimeString(),
        weight: 50,
        reps: 10,
      },
      {
        id: "2",
        timeStamp: new Date().toLocaleTimeString(),
        weight: 50,
        reps: 10,
      },
    ],
  },
  {
    date: new Date("2020-03-01").toDateString(),
    sets: [
      {
        id: "4",
        timeStamp: new Date().toLocaleTimeString(),
        weight: 50,
        reps: 10,
      },
      {
        id: "5",
        timeStamp: new Date().toLocaleTimeString(),
        weight: 50,
        reps: 10,
      },
    ],
  }
]

export const SetHistoryScreen = ({ navigation }: ScreenProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date());
  const theme = useTheme();
  const ref = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    setDate(new Date());
    setTime(new Date());
    ref.current?.present();
  }, []);

  const handleModalClose = useCallback(() => {
    ref.current?.close();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView
        contentContainerStyle={{ backgroundColor: theme.colors.background, marginTop: 30}}
      >
        <SetHistory history={history} />
      </ScrollView>
      <AddSetBottomSheet
        ref={ref}
        handleModalClose={handleModalClose}
        date={date}
        time={time}
        setDate={setDate}
        setTime={setTime}
      />
      <FAB
        icon={"plus"}
        style={styles.fabStyle}
        onPress={handlePresentModalPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fabStyle: {
    position: "absolute",
    margin: 16,
    bottom: 20,
    alignSelf: "center",
  },
});
