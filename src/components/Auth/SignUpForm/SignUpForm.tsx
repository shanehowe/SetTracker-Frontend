import { StyleSheet } from "react-native";
import { Surface, Text, TextInput, Button } from "react-native-paper";
import { PasswordInput } from "../../PasswordInput/PasswordInput";

export const SignUpForm = () => {
  return (
    <Surface mode="flat" style={styles.surfaceStyle}>
    <Text>Create an account</Text>
    <TextInput
      label="Email"
      mode="outlined"
      testID="email-input"
    />
    <PasswordInput
      label="Password"
      mode="outlined"
      style={styles.defaultSpacing}
      onChangeText={() => {}}
    />
    <PasswordInput
      label="Confirm Password"
      mode="outlined"
      style={styles.defaultSpacing}
      onChangeText={() => {}}
    />
    <Button
      mode="contained"
      style={[styles.extraSpacing, styles.fullWidth]}
      testID="signup-button"
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