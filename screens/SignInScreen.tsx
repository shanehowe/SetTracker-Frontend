import { View, SafeAreaView } from "react-native";
import { Avatar, Divider, useTheme } from "react-native-paper";
import { NavigationProp } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { SignInForm } from "../components/Auth/SignInForm";
import { AuthButtons } from "../components/Auth/AuthButtons";

interface SignInScreenProps {
  navigation: NavigationProp<any>
}

export const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View
        style={[styles.container]}
      >
        <Avatar.Icon
          style={{
            backgroundColor: theme.colors.primary,
            alignSelf: "center",
            flex: 0,
            marginBottom: 20,
          }}
          size={100}
          icon="lock"
        />
        <SignInForm navigation={navigation} />
        <Divider style={{ marginVertical: 20 }} theme={{ colors: { primary: 'black' }}} />
        <AuthButtons />
      </View>
    </SafeAreaView>
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
});
