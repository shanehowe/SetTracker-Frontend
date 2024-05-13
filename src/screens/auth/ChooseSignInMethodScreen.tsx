import { View, SafeAreaView } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import { AuthScreenProps } from "../../interfaces";
import { AvatarHeading } from "../../components/Auth/AvatarHeading/AvatarHeading";
import * as AppleAuthentication from "expo-apple-authentication";
import { AppleSignInButton } from "../../components/Auth/AppleSignInButton/AppleSignInButton";
import { useEffect, useState } from "react";
import { SignInForm } from "../../components/Auth/SignInForm/SignInForm";
import { Banner } from "../../components/Notifications/Banner/Banner";

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
      <Banner />
      <View style={styles.headingView}>
        <AvatarHeading title="Sign In" icon="lock" />
      </View>
      <View style={styles.mainContainer}>
        <SignInForm />
        {appleSignInIsAvailable && (
          <>
            <View style={styles.orStyle}>
              <Text variant="titleMedium">OR</Text>
            </View>
            <View style={styles.appleButtonView}>
              <AppleSignInButton />
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  orStyle: {
    marginVertical: 20,
    alignItems: "center",
  },
  appleButtonView: {
    alignItems: "center",
  },
  mainContainer: {
    flex: 4,
  },
  headingView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
