import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WorkoutFoldersStack } from "./WorkoutFoldersStack";
import { Icon, useTheme, Appbar } from "react-native-paper";
import { Snackbar } from "../components/Notifications/Snackbar/Snackbar";
import { SettingsScreenStack } from "./SettingsStack";
import { useContext, useEffect } from "react";
import { AppThemeContext } from "../contexts/AppThemeContext";
import { theme as savedThemes } from "../theme/theme";
import storage, { StoredConsts } from "../utils/storage";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const AppBottomTab = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const appThemeContext = useContext(AppThemeContext);
  useEffect(() => {
    const setPreferredTheme = async () => {
      const scheme = await storage.get(StoredConsts.PREFERRED_THEME);
      if (!scheme) {
        return;
      } else if (scheme === "light") {
        appThemeContext.setTheme(savedThemes.light);
      } else if (scheme === "dark") {
        appThemeContext.setTheme(savedThemes.dark);
      }
    };
    setPreferredTheme();
  }, []);

  const handleGoBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  const appThemeContext = useContext(AppThemeContext);
  useEffect(() => {
    const setPreferredTheme = async () => {
      const scheme = await storage.get(StoredConsts.PREFERRED_THEME);
      if (!scheme) {
        return;
      } else if (scheme === "light") {
        appThemeContext.setTheme(savedThemes.light);
      } else if (scheme === "dark") {
        appThemeContext.setTheme(savedThemes.dark);
      }
    };
    setPreferredTheme();
  }, []);

  return (
    <>
      <Appbar.Header
        theme={theme}
        style={{
          borderBottomColor: theme.colors.outline,
          borderBottomWidth: 1,
        }}
      >
        <Appbar.BackAction onPress={handleGoBackPress} />
        <Appbar.Content title="App name" />
      </Appbar.Header>
      <Snackbar />
      <Tab.Navigator
        initialRouteName="WorkoutFoldersTab"
        screenOptions={() => {
          return {
            tabBarStyle: {
              backgroundColor: theme.colors.background,
              borderTopColor: theme.colors.primary,
              borderTopWidth: 1,
            },
            tabBarActiveTintColor: theme.colors.primary,
          };
        }}
      >
        <Tab.Screen
          name="WorkoutFoldersTab"
          component={WorkoutFoldersStack}
          options={{
            tabBarLabel: "Workouts",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon source={"folder"} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsTab"
          component={SettingsScreenStack}
          options={{
            tabBarLabel: "Settings",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon source={"cog"} color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
