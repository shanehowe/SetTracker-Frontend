import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WorkoutFoldersStack } from "./WorkoutFoldersStack";
import { Icon, useTheme, Appbar } from "react-native-paper";
import { Snackbar } from "../components/Notifications/Snackbar";

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
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "WorkoutFoldersTab") {
                iconName = "folder";
              } else if (route.name === "AccountTab") {
                iconName = "account";
              }
              return (
                <Icon
                  source={
                    route.name === "WorkoutFoldersTab" ? "folder" : "account"
                  }
                  color={color}
                  size={size}
                />
              );
            },
          };
        }}
      >
        <Tab.Screen
          name="WorkoutFoldersTab"
          component={WorkoutFoldersStack}
          options={{
            tabBarLabel: "Workouts",
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
};
