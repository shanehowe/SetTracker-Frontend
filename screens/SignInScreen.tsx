import { View, SafeAreaView } from "react-native";
import { Avatar, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import { SignInForm } from "../components/Auth/SignInForm";
import { AuthButtons } from "../components/Auth/AuthButtons";

export const SignInScreen = () => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <Avatar.Icon
          style={{
            backgroundColor: theme.colors.primary,
            alignSelf: "center",
            flex: 0,
            marginBottom: 20,
          }}
          size={100}
          icon="lock"
        />
        <SignInForm />

        <AuthButtons />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
  },
});
