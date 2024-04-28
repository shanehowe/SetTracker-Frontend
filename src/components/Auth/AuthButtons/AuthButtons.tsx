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
    googleButton: {
      backgroundColor: "#4285F4",
    },
    button: {
      marginTop: 20,
      height: 60,
      width: "90%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      borderRadius: 5,
    }
  });