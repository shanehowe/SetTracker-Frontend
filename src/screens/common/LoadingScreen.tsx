import { ActivityIndicator,Text, useTheme } from "react-native-paper";
import { View } from "react-native";

export const LoadingScreen = () => {
  const theme = useTheme();

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      justifyContent: "center",
      gap: 30
    }}>
      <View>
        <ActivityIndicator />
      </View>
      <View>
        <Text>Hang on while we get that for you...</Text>
      </View>
    </View>
  );
};