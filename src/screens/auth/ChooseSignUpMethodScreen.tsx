import { StyleSheet, View } from "react-native";
import { AuthButtons } from "../../components/Auth/AuthButtons";
import { useTheme, Text, Button } from "react-native-paper";
import { AvatarHeading } from "../../components/Auth/AvatarHeading";
import { ScreenProps } from "../../interfaces";

export const ChooseSignUpMethod = ({ navigation }: ScreenProps) => {
  const theme = useTheme();

  const goToSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={[{ backgroundColor: theme.colors.background, flex: 1 }]}>
      <View style={styles.container}>
        <AvatarHeading title="Choose a method of signing up" icon="lock"/>
        <View style={styles.buttonsView}>
          <Button
            mode="contained"
            style={{
              width: "100%",
              marginBottom: 20,
            }}
          >
            Sign Up Email & Password
          </Button>
          <Text>OR</Text>
          <AuthButtons />
        </View>
        <View style={styles.alreadyHaveAccountView}>
          <Button
            onPress={goToSignIn}
            mode="text"
            style={{
              width: "100%",
            }}
          >
            Already have an account? Sign In
          </Button>
        </View>
      </View>
    </View>
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
