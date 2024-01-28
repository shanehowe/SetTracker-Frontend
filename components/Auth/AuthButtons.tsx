import React from "react";
import { View, StyleSheet } from "react-native";
import { Divider, Button } from "react-native-paper";

export const AuthButtons = () => {
  return (
    <View style={styles.oAuthView}>

      <Button
        style={[{ marginTop: 20 }, styles.googleButton]}
        mode="contained"
        icon="google"
        onPress={() => console.log("Pressed")}
      >
        Continue with Google
      </Button>
      <Button
        style={[{ marginTop: 20 }, styles.facebookButton]}
        mode="contained"
        icon="facebook"
        onPress={() => console.log("Pressed")}
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
  });