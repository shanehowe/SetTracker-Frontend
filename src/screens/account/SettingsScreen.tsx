import { StyleSheet, View } from "react-native";
import { Divider, List, Surface, useTheme } from "react-native-paper";
import { useAuth } from "../../contexts/AuthContext";

export const SettingsScreen = () => {
  const theme = useTheme();
  const { signOut } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: "center",
      }}
    >
      <Surface mode="flat" style={styles.surfaceStyles} elevation={5}>
        <List.Item
          title="Account"
          left={(props) => <List.Icon {...props} icon={"account"} />}
          right={(props) => <List.Icon {...props} icon={"chevron-right"} />}
        />
        <Divider bold={true} />
        <List.Item
          title="Appearance"
          left={(props) => <List.Icon {...props} icon={"eye"} />}
          right={(props) => <List.Icon {...props} icon={"chevron-right"} />}
        />
        <Divider bold={true} />
        <List.Item
          title="Feedback"
          left={(props) => <List.Icon {...props} icon={"message"} />}
          right={(props) => <List.Icon {...props} icon={"chevron-right"} />}
        />
      </Surface>
      <Surface mode="flat" elevation={5} style={styles.surfaceStyles}>
        <List.Item
          title="Log out"
          titleStyle={{ color: theme.colors.error, fontWeight: "bold" }}
          left={props => <List.Icon {...props} color={theme.colors.error} icon={"logout"} />}
          onPress={signOut}
        />
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  surfaceStyles: {
    width: "90%",
    padding: 8,
    borderRadius: 8,
    marginTop: 20
  },
});
