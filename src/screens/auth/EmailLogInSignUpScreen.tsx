import { SafeAreaView, View } from "react-native";
import { useTheme } from "react-native-paper";
import { TabScreen, Tabs, TabsProvider } from "react-native-paper-tabs";
import { SignInForm } from "../../components/Auth/SignInForm/SignInForm";
import { SignUpForm } from "../../components/Auth/SignUpForm/SignUpForm";
import { AppleSignInButton } from "../../components/Auth/AppleSignInButton/AppleSignInButton";

export const EmailLogInSignUpScreen = () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.background, flex: 1}}>
      <View style={{flex: 3}}>
        <TabsProvider>
          <Tabs>
            <TabScreen label="Sign In" >
              <SignInForm />
            </TabScreen>
            <TabScreen label="Sign Up">
              <SignUpForm />
            </TabScreen>
          </Tabs>
        </TabsProvider>
      </View>
      <View style={{flex: 1, alignItems: "center"}}>
        <AppleSignInButton />
      </View>
    </SafeAreaView>
  );
};
