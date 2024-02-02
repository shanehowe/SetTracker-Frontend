import { View, SafeAreaView } from "react-native";
import { Avatar, Text, useTheme, Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { AuthButtons } from "../../components/Auth/AuthButtons";
import { ScreenProps } from "../../interfaces";
import { DontHaveAnAccountButton } from "../../components/Buttons/DontHaveAnAccountButton";
import { AvatarHeading } from "../../components/Auth/AvatarHeading/AvatarHeading";

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
        <AvatarHeading title="Choose a method of signing in" icon="lock"/>
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
          <DontHaveAnAccountButton />
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
