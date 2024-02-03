import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

export const DontHaveAnAccountButton = () => {
  const navigation = useNavigation();

  const goToChooseSignUpMethod = () => {
    // @ts-ignore
    navigation.navigate('SignUp');
  };

  return (
    <Button
      onPress={goToChooseSignUpMethod}
      mode="text"
      style={{
        width: "100%",
      }}
      testID="dont-have-account-button"
    >
      Don't have an account yet? Sign Up
    </Button>
  );
};
