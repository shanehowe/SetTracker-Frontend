import React from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { Button, useTheme } from "react-native-paper";

interface WeightIncrementToolbarProps {
  onIncrement: (value: number) => void;
}

export const WeightIncrementToolbar = ({
  onIncrement,
}: WeightIncrementToolbarProps) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: theme.colors.tertiary,
      alignItems: "center"
    },
    button: {
      margin: 4,
    },
  });

  return (
    <View style={styles.container}>
      <Button
        textColor={theme.colors.onTertiary}
        style={styles.button}
        onPress={() => onIncrement(1)}
      >
        +1
      </Button>
      <Button
        textColor={theme.colors.onTertiary}
        style={styles.button}
        onPress={() => onIncrement(2.5)}
      >
        +2.5
      </Button>
      <Button
        textColor={theme.colors.onTertiary}
        style={styles.button}
        onPress={() => onIncrement(5)}
      >
        +5
      </Button>
      <Button
        textColor={theme.colors.onTertiary}
        style={styles.button}
        onPress={() => onIncrement(10)}
      >
        +10
      </Button>
      <Button onPress={Keyboard.dismiss} textColor={theme.colors.onTertiary}>
        Done
      </Button>
    </View>
  );
};
