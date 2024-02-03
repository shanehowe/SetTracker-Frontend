import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export const AuthButtons = () => {
  return (
    <View style={styles.oAuthView}>

      <Button
        style={[styles.button, styles.googleButton]}
        mode="contained"
        icon="google"
        onPress={() => console.log("Pressed")}
        testID="google-auth-button"
      >
        Continue with Google
      </Button>
      <Button
        style={[styles.button, styles.facebookButton]}
        mode="contained"
        icon="facebook"
        onPress={() => console.log("Pressed")}
        testID="facebook-auth-button"
      >
        Continue with Facebook
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: "center",
    },
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
    button: {
      marginTop: 20,
    }
  });