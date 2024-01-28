import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useState } from "react";

export const SignInForm = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <View style={{ width: "100%" }}>
          <View style={{ width: "100%" }}>
            <TextInput
              label="Email"
              mode="outlined"
              style={{ marginBottom: 10 }}
            />
            <TextInput label="Password" mode="outlined" />

            <Button
              style={{ marginTop: 20 }}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Sign In
            </Button>
          </View>
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
      <View style={{ marginTop: 20, width: "100%" }}>
        <Button mode="text" onPress={() => console.log("Pressed")}>
          Forgot your password?
        </Button>
        <Text style={styles.text}>Don't have an account? Sign Up</Text>
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
