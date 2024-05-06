import { Alert, StyleSheet } from "react-native";
import { TextInput, Button, Surface, Text } from "react-native-paper";
import { PasswordInput } from "../../PasswordInput/PasswordInput";
import { useField } from "../../../hooks/useField";
import { useAuth } from "../../../contexts/AuthContext";

export const SignInForm = () => {
  const auth = useAuth();
  const emailField = useField("email");
  const passwordField = useField("password");

  const handleSignIn = () => {
    const trimmedEmail = emailField.value.trim();
    const trimmedPassword = passwordField.value.trim();
    if (trimmedEmail && trimmedPassword) {
      // Do nothing for now. Not implemented yet.
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  return (
    <Surface mode="flat" style={styles.surfaceStyle}>
      <Text>Sign in to your account</Text>
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
    height: 300,
    justifyContent: "center",
    marginTop: 50,
    borderRadius: 8,
  },
});
