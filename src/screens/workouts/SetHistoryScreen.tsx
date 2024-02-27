import { FAB, useTheme } from "react-native-paper";
import { ScreenProps } from "../../interfaces";
import { ScrollView, StyleSheet, View } from "react-native";
import { SetItemGroup } from "../../components/Workouts/SetItemGroup/SetItemGroup";
import { useCallback, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { AddSetBottomSheet } from "../../components/Workouts/AddSetBottomSheet/AddSetBottomSheet";

const sets = [
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
];

export const SetHistoryScreen = ({ navigation }: ScreenProps) => {
  const theme = useTheme();
  const ref = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    ref.current?.present();
  }, []);

  const handleModalClose = useCallback(() => {
    ref.current?.close();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView
        contentContainerStyle={{ backgroundColor: theme.colors.background, marginTop: 30}}
      >
        <SetItemGroup sets={sets} date={new Date().toDateString()} />
      </ScrollView>
      <AddSetBottomSheet
        ref={ref}
        handleSheetChanges={handleSheetChanges}
        handleModalClose={handleModalClose}
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
