import { Button } from "react-native-paper";
import { ScreenProps } from "../../interfaces";

export const SetHistoryScreen = ({ navigation }: ScreenProps) => {
  return (
    <Button onPress={navigation.goBack}>
        Go Back
    </Button>
  )
};