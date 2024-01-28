import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { PasswordInput } from "../PasswordInput";
import { useField } from "../../hooks/useField";

interface SignInFormProps {
  navigation: NavigationProp<any>;
}

export const SignInForm = ({ navigation }: SignInFormProps) => {
  const [showForm, setShowForm] = useState(false);

  const emailField = useField("email");
  const passwordField = useField("password");

  const gotoSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleSignIn = () => {
    Alert.alert(`Signing in with ${emailField.value} and ${passwordField.value}`)
  };

  return (
    <>
      {showForm ? (
        <View style={{ width: "100%" }}>
          <View style={{ width: "100%" }}>
            <TextInput
              label="Email"
              mode="outlined"
              style={{ marginBottom: 10 }}
              onChangeText={emailField.onChange}
            />
            <PasswordInput
              label="Password"
              mode="outlined"
              onChangeText={passwordField.onChange}
            />

            <Button
              style={{ marginTop: 20 }}
              mode="contained"
              onPress={handleSignIn}
            >
              Sign In
            </Button>
          </View>
          <Button style={{ marginTop: 10 }} mode="text" onPress={() => console.log("Pressed")}>
            Forgot your password?
          </Button>
        </View>
      ) : (
        <Button
          style={{ marginTop: 20, width: "100%" }}
          mode="contained"
          onPress={() => setShowForm(true)}
        >
          Sign in with email
        </Button>
      )}
      <View style={{ marginTop: 3, width: "100%" }}>
        <Button mode="text" onPress={gotoSignUp}>
          <Text style={styles.text}>Don't have an account? Sign Up</Text>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
    textAlign: "center",
  },
  oAuthView: {
    width: "100%",
  },
  facebookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#4285F4",
  },
});
