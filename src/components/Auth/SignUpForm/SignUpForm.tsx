import { Alert, StyleSheet } from "react-native";
import { Surface, Text, TextInput, Button } from "react-native-paper";
import { PasswordInput } from "../../PasswordInput/PasswordInput";
import { useSignUpWithEmailPasswordMutation } from "../../../hooks/useSignUpWithEmailPasswordMutation";
import { useAuth } from "../../../contexts/AuthContext";
import { useField } from "../../../hooks/useField";
import { Banner } from "../../Notifications/Banner/Banner";
import { useBanner } from "../../../contexts/BannerContext";
import { isAxiosError } from "axios";

export const SignUpForm = () => {
  const auth = useAuth();
  const { show: showBanner } = useBanner();

  const onSignUpError = (error: Error) => {
    if (isAxiosError(error)) {
      // 422 Unprocessable Entity. Only email field is validated.
      if (error.response?.status === 422) {
        showBanner("Please provide a valid email address to continue.");
      } else {
        showBanner(error.response?.data.detail);
      }
    } else {
      showBanner("An unexpected error occurred. Please try again later.");
    }
  }

  const signUpEmailPasswordMutation = useSignUpWithEmailPasswordMutation(
    auth.onSignInSuccess,
    onSignUpError
  );

  const emailField = useField();
  const passwordField = useField();
  const confirmPasswordField = useField();

  const handleSignUp = () => {
    const email = emailField.value.trim().toLowerCase();
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    if (password !== confirmPassword) {
      showBanner("Password fields do not match");
      return;
    }

    signUpEmailPasswordMutation.mutate({ email, password });
  }

  return (
    <>
    <Banner />
    <Surface mode="flat" style={styles.surfaceStyle}>
    <Text>Create an account</Text>
    <TextInput
      label="Email"
      mode="outlined"
      testID="email-input"
      onChangeText={emailField.onChange}
    />
    <PasswordInput
      label="Password"
      mode="outlined"
      style={styles.defaultSpacing}
      onChangeText={passwordField.onChange}
    />
    <PasswordInput
      label="Confirm Password"
      mode="outlined"
      style={styles.defaultSpacing}
      onChangeText={confirmPasswordField.onChange}
    />
    <Button
      mode="contained"
      style={[styles.extraSpacing, styles.fullWidth]}
      testID="signup-button"
      onPress={handleSignUp}
    >
      Sign Up
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
    height: 375,
    justifyContent: "center",
    marginTop: 50,
    borderRadius: 8,
  },
});