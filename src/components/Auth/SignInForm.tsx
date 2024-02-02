import { Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { PasswordInput } from "../PasswordInput";
import { useField } from "../../hooks/useField";
import { useAuth } from "../../contexts/AuthContext";


export const SignInForm = () => {

  const auth = useAuth();
  const emailField = useField("email");
  const passwordField = useField("password");

  const handleSignIn = () => {
    const trimmedEmail = emailField.value.trim();
    const trimmedPassword = passwordField.value.trim();
    if (trimmedEmail && trimmedPassword) {
      auth.signIn(trimmedEmail, trimmedPassword);
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  return (
    <>
      <TextInput
        label="Email"
        mode="outlined"
        onChangeText={emailField.onChange}
      />
      <PasswordInput
        label="Password"
        mode="outlined"
        onChangeText={passwordField.onChange}
        style={{ marginTop: 20 }}
      />
      <Button
        mode="contained"
        style={{
          width: "100%",
          marginTop: 40,
        }}
        onPress={handleSignIn}
      >
        Log In
      </Button>

      <Button
        mode="outlined"
        style={{
          width: "100%",
          marginTop: 20,
        }}
      >
        Forgot Password?
      </Button>
    </>
  );
};
