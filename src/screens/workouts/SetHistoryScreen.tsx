import { FAB, Text, useTheme } from "react-native-paper";
import { ScreenProps } from "../../interfaces";
import { ScrollView, StyleSheet, View } from "react-native";
import { useCallback, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { AddSetBottomSheet } from "../../components/Workouts/AddSetBottomSheet/AddSetBottomSheet";
import { SetHistory } from "../../components/Workouts/SetHistory/SetHistory";
import { useSetHistory } from "../../hooks/useSetHistory";

interface SetHistoryScreenProps extends ScreenProps {
  route: {
    params: {
      exerciseId: string;
    };
  };
}

export const SetHistoryScreen = ({
  navigation,
  route,
}: SetHistoryScreenProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date());
  const exerciseId = route.params.exerciseId;
  const theme = useTheme();
  const ref = useRef<BottomSheetModal>(null);

  const {
    data: history,
    isError,
    isLoading,
    error,
  } = useSetHistory(exerciseId);

  const handlePresentModalPress = useCallback(() => {
    setDate(new Date());
    setTime(new Date());
    ref.current?.present();
  }, []);

  const handleModalClose = useCallback(() => {
    ref.current?.close();
  }, []);

  let content;
  if (isLoading || !history) {
    content = <Text>Loading...</Text>;
  } else if (isError && error) {
    content = <>{error.message}</>;
  } else {
    content = <SetHistory history={history} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: theme.colors.background,
          marginTop: 30,
        }}
      >
        {content}
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
