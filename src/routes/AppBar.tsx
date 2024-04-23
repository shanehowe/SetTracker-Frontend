import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WorkoutFoldersStack } from "./WorkoutFoldersStack";
import { Icon, useTheme, Appbar } from "react-native-paper";
import { Snackbar } from "../components/Notifications/Snackbar/Snackbar";
import { SettingsScreenStack } from "./SettingsStack";

const Tab = createBottomTabNavigator();

export const AppBottomTab = () => {
  const theme = useTheme();

  return (
    <>
      <Appbar.Header
        theme={theme}
        style={{
          borderBottomColor: theme.colors.outline,
          borderBottomWidth: 1,
        }}
      >
        <Appbar.Content title="App name" />
        <Appbar.Action icon="menu" />
      </Appbar.Header>
      <Snackbar />
      <Tab.Navigator
        initialRouteName="WorkoutFoldersTab"
        screenOptions={({ route }) => {
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
