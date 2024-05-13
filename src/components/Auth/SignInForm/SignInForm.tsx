import { StyleSheet } from "react-native";
import { TextInput, Button, Surface } from "react-native-paper";
import { PasswordInput } from "../../PasswordInput/PasswordInput";
import { useField } from "../../../hooks/useField";
import { useAuth } from "../../../contexts/AuthContext";
import { isAxiosError } from "axios";
import { useSignInWithEmailPasswordMutation } from "../../../hooks/useSignInWithEmailPasswordMutation";
import { useBanner } from "../../../contexts/BannerContext";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../../../types";

export const SignInForm = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const auth = useAuth();
  const emailField = useField();
  const passwordField = useField();
  const { show: showBanner } = useBanner();

  const onSignInError = (error: Error) => {
    if (isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 422) {
        showBanner("Please provide a valid email address to continue.");
      } else {
        showBanner(error.response?.data.detail);
      }
    } else {
      showBanner("An unexpected error occurred. Please try again later.");
    }
  };

  const signInEmailPassswordMutation = useSignInWithEmailPasswordMutation(
    auth.onSignInSuccess,
    onSignInError
  );

  const handleSignIn = () => {
    const trimmedEmail = emailField.value.trim().toLowerCase();
    const trimmedPassword = passwordField.value.trim();
    if (trimmedEmail && trimmedPassword) {
      signInEmailPassswordMutation.mutate({
        email: trimmedEmail,
        password: trimmedPassword,
      });
    } else {
      showBanner("Please fill in all fields to continue.");
    }
  };

  return (
    <>
      <Surface style={styles.surfaceStyle}>
        <TextInput
          label="Email"
          mode="outlined"
          onChangeText={emailField.onChange}
          testID="email-input"
        />
        <PasswordInput
          label="Password"
          mode="outlined"
          onChangeText={passwordField.onChange}
          style={styles.defaultSpacing}
        />
        <Button
          mode="contained"
          style={[styles.extraSpacing, styles.fullWidth]}
          onPress={handleSignIn}
          testID="login-button"
        >
          Sign In
        </Button>

        <Button
          style={[styles.defaultSpacing, styles.fullWidth]}
          onPress={() => navigation.navigate("SignUp")}
        >
          I don't have an account
        </Button>
      </Surface>
    </>
  );
};

const styles = StyleSheet.create({
  defaultSpacing: {
    marginTop: 20,
  },
  extraSpacing: {
    marginTop: 40,
  },
  fullWidth: {
    width: "100%",
  },
  surfaceStyle: {
    alignSelf: "center",
    width: "95%",
    padding: 20,
    alignContent: "center",
    height: 300,
    justifyContent: "center",
    borderRadius: 8,
  },
});
