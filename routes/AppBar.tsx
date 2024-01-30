import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WorkoutFoldersStack } from "./WorkoutFoldersStack";
import { Icon, useTheme, Appbar } from "react-native-paper";

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
        <Appbar.Content title="Workout Tracker" />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
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
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "WorkoutFoldersTab") {
                iconName = "folder";
                if (!focused) {
                  iconName += "-outline";
                }
              } else if (route.name === "AccountTab") {
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
