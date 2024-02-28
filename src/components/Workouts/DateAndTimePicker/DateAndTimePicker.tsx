import { StyleSheet, View, Platform, useColorScheme } from "react-native";
import { useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Button } from "react-native-paper";

interface DateAndTimePickerProps {
  date: Date;
  setDate: (date: Date) => void;
  time: Date;
  setTime: (time: Date) => void;
}

export const DateAndTimePicker = ({
  date,
  time,
  setDate,
  setTime,
}: DateAndTimePickerProps) => {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const themeVariant = useColorScheme();

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === "ios");
    setDate(currentDate);
  };

  const handleTimeChange = (
    event: DateTimePickerEvent,
    selectedTime?: Date
  ) => {
    const currentTime = selectedTime || time;
    setShowTime(Platform.OS === "ios");
    setTime(currentTime);
  };

  return (
    <View style={styles.container} testID="date-time-picker">
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setShowTime(!showTime)}
          testID="time-picker-button"
        >
          {showTime ? "Hide" : "Set Custom Time"}
        </Button>
        {showTime && (
          <DateTimePicker
            testID="time-picker"
            value={date}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={handleTimeChange}
            maximumDate={new Date()}
            themeVariant={themeVariant ?? "light"}
          />
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setShowDate(!showDate)}
          testID="date-picker-button"
        >
          {showDate ? "Hide" : "Set Custom Date"}
        </Button>
        {showDate && (
          <DateTimePicker
            testID="date-picker"
            value={time}
            mode="date"
            display="default"
            onChange={handleDateChange}
            maximumDate={new Date()}
            themeVariant={themeVariant ?? "light"}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "60%",
    alignSelf: "center",
  },
  container: {
    alignItems: "center",
    width: "100%",
  },
});
