import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Divider,
  RadioButton,
  Surface,
  useTheme,
} from "react-native-paper";

export const AppearanceScreen = () => {
  const [mode, setMode] = useState("");
  const theme = useTheme();

  const handleModeChange = (mode: string) => {
    setMode(mode);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: "center"
      }}
    >
      <Surface mode="flat" elevation={5} style={styles.surfaceStyle}>
        <RadioButton.Group value={mode} onValueChange={handleModeChange}>
          <RadioButton.Item label="Light" value="light" />
          <Divider bold={true} />
          <RadioButton.Item label="Dark" value="dark" />
          <Divider bold={true} />
          <RadioButton.Item label="System" value="system" />
        </RadioButton.Group>
      </Surface>
      <Button style={styles.buttonStyle} mode="contained">Save</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  surfaceStyle: {
    width: "90%",
    borderRadius: 8,
    padding: 7,
    marginTop: 20
  },
  buttonStyle: {
    width: "90%",
    marginTop: 25,
  }
});
