import { useContext, useEffect, useState } from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import {
  Button,
  Divider,
  RadioButton,
  Surface,
  useTheme,
} from "react-native-paper";
import storage, { StoredConsts } from "../../utils/storage";
import { useUpdatePreferences } from "../../hooks/useUpdatePreferencesMutation";
import { AppThemeContext } from "../../contexts/AppThemeContext";
import { theme as savedThemes } from "../../theme/theme";
import { useSnack } from "../../contexts/SnackbarContext";

export const AppearanceScreen = () => {
  const [mode, setMode] = useState("");
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const snack = useSnack();
  const appThemeContext = useContext(AppThemeContext);

  useEffect(() => {
    const setModeIfInStorage = async () => {
      const storedModeString = await storage.get(StoredConsts.PREFERRED_THEME);
      if (storedModeString === null) {
        setMode("system");
      }
      setMode(storedModeString as string);
    }
    setModeIfInStorage();
  }, []);

  const updatePreferencesOnSuccess = async () => {
    await storage.set(StoredConsts.PREFERRED_THEME, mode);
    if (mode == "dark") {
      appThemeContext.setTheme(savedThemes.dark);
    } else if (mode === "light") {
      appThemeContext.setTheme(savedThemes.light);
    } else {
      const themeToSet = colorScheme === "dark" ? savedThemes.dark : savedThemes.light;
      appThemeContext.setTheme(themeToSet);
    }
    snack.success("Appearence updated");
  }

  const updatePreferencesMutation = useUpdatePreferences(
    updatePreferencesOnSuccess,
    (error) => { console.error(error) }
  );

  const handleModeChange = (mode: string) => {
    setMode(mode);
  }

  const handleSave = () => {
    updatePreferencesMutation.mutate({ theme: mode });
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
      <Button style={styles.buttonStyle} mode="contained" onPress={handleSave}>Save</Button>
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
