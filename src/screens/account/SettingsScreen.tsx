import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { OptionsList } from "../../components/AccountSettings/OptionsList/OptionsList";
import { LogoutButton } from "../../components/Buttons/LogoutButton/LogoutButton";

export const SettingsScreen = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: "center",
      }}
    >
      <OptionsList />
      <LogoutButton />
    </View>
  );
};
