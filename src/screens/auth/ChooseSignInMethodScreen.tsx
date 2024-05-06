import { View, SafeAreaView } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import { AuthScreenProps } from "../../interfaces";
import { AvatarHeading } from "../../components/Auth/AvatarHeading/AvatarHeading";
import * as AppleAuthentication from "expo-apple-authentication";
import { AppleSignInButton } from "../../components/Auth/AppleSignInButton/AppleSignInButton";
import { useEffect, useState } from "react";

export const ChooseSignInMethodScreen = ({ navigation }: AuthScreenProps) => {
  const [appleSignInIsAvailable, setAppleSignInIsAvailable] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const checkAppleSignInAvailability = async () => {
      const isAvailable = await AppleAuthentication.isAvailableAsync();
      setAppleSignInIsAvailable(isAvailable);
    };

    checkAppleSignInAvailability();
  }, []);

  return (
    <SafeAreaView
      style={[{ backgroundColor: theme.colors.background, flex: 1 }]}
    >
      <View style={styles.container}>
        <AvatarHeading title="Choose a method of signing in" icon="lock" />
        <View style={styles.buttonsView}>
          {appleSignInIsAvailable && <AppleSignInButton />}
          <Button
            labelStyle={{
              fontSize: 16,
            }}
            mode="contained"
            style={styles.continueWithEmailButton}
            onPress={() => navigation.navigate("EmailLogInSignUpScreen")}
          >
            Sign In/Up with email and password
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonsView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  continueWithEmailButton: {
    marginTop: 20,
    width: "90%",
    borderRadius: 10,
    paddingVertical: 10,
  },
});
