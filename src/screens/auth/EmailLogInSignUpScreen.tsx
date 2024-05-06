import { SafeAreaView, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { TabScreen, Tabs, TabsProvider } from "react-native-paper-tabs";
import { SignInForm } from "../../components/Auth/SignInForm/SignInForm";

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
              <Text>Hello</Text>
            </TabScreen>
          </Tabs>
        </TabsProvider>
      </View>
    </SafeAreaView>
  );
};
