import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../screens/account/SettingsScreen";
import { AppearanceScreen } from "../screens/account/AppearanceScreen";
import { SettingsStackParamList } from "../types/index"

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export const SettingsScreenStack = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true
      }}
      initialRouteName="Settings"
    >
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        name="Appearance"
        component={AppearanceScreen}
      />
    </SettingsStack.Navigator>
  )
};
