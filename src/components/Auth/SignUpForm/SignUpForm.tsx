import { Alert, StyleSheet } from "react-native";
import { Surface, Text, TextInput, Button } from "react-native-paper";
import { PasswordInput } from "../../PasswordInput/PasswordInput";
import { useSignUpWithEmailPasswordMutation } from "../../../hooks/useSignUpWithEmailPasswordMutation";
import { useAuth } from "../../../contexts/AuthContext";
import { useField } from "../../../hooks/useField";

export const SignUpForm = () => {
  const auth = useAuth();
  const signUpEmailPasswordMutation = useSignUpWithEmailPasswordMutation(
    auth.onSignInSuccess,
    console.error
  );

  const emailField = useField();
  const passwordField = useField();
  const confirmPasswordField = useField();

  const handleSignUp = () => {
    const email = emailField.value.trim().toLowerCase();
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    if (password !== confirmPassword) {
      Alert.alert("Error", "Password fields do not match");
      return;
    }

    signUpEmailPasswordMutation.mutate({ email, password });
  }

  return (
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