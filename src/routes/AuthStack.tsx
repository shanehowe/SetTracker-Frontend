import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChooseSignInMethodScreen } from "../screens/auth/ChooseSignInMethodScreen";
import { EmailLogInSignUpScreen } from "../screens/auth/EmailLogInSignUpScreen";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="SignIn"
        component={ChooseSignInMethodScreen}
      />
      <Stack.Screen
        name="EmailLogInSignUpScreen"
        component={EmailLogInSignUpScreen}
      />
    </Stack.Navigator>
  );
};
