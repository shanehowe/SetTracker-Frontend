import { Surface, List, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useAuth } from "../../../contexts/AuthContext";

export const LogoutButton = () => {
  const { signOut } = useAuth();
  const theme = useTheme();
  return (
    <Surface
      mode="flat"
      elevation={5}
      style={styles.surfaceStyles}
      testID="logout-btn-surface"
    >
      <List.Item
        title="Log out"
        titleStyle={{ color: theme.colors.error, fontWeight: "bold" }}
        left={(props) => (
          <List.Icon {...props} color={theme.colors.error} icon={"logout"} />
        )}
        onPress={signOut}
        testID="logout-btn"
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  surfaceStyles: {
    width: "90%",
    padding: 8,
    borderRadius: 8,
    marginTop: 20,
  },
});
