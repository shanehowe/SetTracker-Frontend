import { View, SafeAreaView } from "react-native";
import { Avatar, Text, useTheme, Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { AuthButtons } from "../components/Auth/AuthButtons";
import { ScreenProps } from "../interfaces";

export const ChooseSignInMethodScreen = ({ navigation }: ScreenProps) => {
  const theme = useTheme();

  const goToChooseSignUpMethod = () => {
    navigation.navigate("SignUp");
  };

  const goToSignInEmailPassword = () => {
    navigation.navigate("SignInEmailPassword");
  };

  return (
    <SafeAreaView
      style={[{ backgroundColor: theme.colors.background, flex: 1 }]}
    >
      <View style={styles.container}>
        <View style={styles.avatarSection}>
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
          <Text variant="titleMedium" style={styles.text}>
            Sign in to your account
          </Text>
        </View>
        <View style={styles.buttonsView}>
          <Button
            mode="contained"
            style={{
              width: "100%",
              marginBottom: 20,
            }}
            onPress={goToSignInEmailPassword}
          >
            Sign In Email & Password
          </Button>
          <Text>OR</Text>
          <AuthButtons />
        </View>
        <View style={styles.alreadyHaveAccountView}>
          <Button
            onPress={goToChooseSignUpMethod}
            mode="text"
            style={{
              width: "100%",
            }}
          >
            Don't have an account yet? Sign Up
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    marginVertical: 10,
    textAlign: "center",
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  alreadyHaveAccountView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 20,
  },
});
