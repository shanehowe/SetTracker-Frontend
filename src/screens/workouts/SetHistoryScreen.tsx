import { Button, useTheme } from "react-native-paper";
import { ScreenProps } from "../../interfaces";
import { ScrollView } from "react-native";

export const SetHistoryScreen = ({ navigation }: ScreenProps) => {
  const theme = useTheme();

  return (
    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Button onPress={navigation.goBack}>Go Back</Button>
    </ScrollView>
  );
};
