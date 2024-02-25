import { TextInput, View, StyleSheet } from "react-native";
import { IconButton, useTheme, Text } from "react-native-paper";

interface NumberInputProps {
  increment: number;
  decrement: number;
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export const NumberInput = ({
  increment,
  decrement,
  value,
  onChange,
  label,
}: NumberInputProps) => {
  const theme = useTheme();

  const dynamicStyles = StyleSheet.create({
    outerContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.surface,
      paddingVertical: 16,
    },
    innerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 8,
      width: "90%",
      backgroundColor: theme.colors.surface,
      gap: 12,
    },
    input: {
      textAlign: "center",
      padding: 8,
      borderRadius: 8,
      width: "50%",
      borderColor: theme.colors.outline,
      borderWidth: 1,
      color: theme.colors.onBackground,
      backgroundColor: theme.colors.background,
      height: 45,
      fontSize: 16,
    },
  });

  const handleIncrement = () => {
    let newValue = Number(value) + increment;
    if (isNaN(newValue)) {
      newValue = 0;
    }
    onChange(newValue.toString());
  };

  const handleDecrement = () => {
    let newValue = Number(value) - decrement;
    if (isNaN(newValue)) {
      newValue = 0;
    }

    if (newValue < 0) {
      newValue = 0;
    }
    onChange(newValue.toString());
  };

  return (
    <View 
      style={dynamicStyles.outerContainer}
      testID="number-input"
    >
      <View>
        <Text variant="labelMedium">{label}</Text>
      </View>
      <View style={dynamicStyles.innerContainer}>
        <IconButton
          icon="minus"
          size={25}
          mode="contained-tonal"
          onPress={handleDecrement}
          testID="minus-button"
        />
        <TextInput
          value={value}
          onChangeText={onChange}
          keyboardType="numeric"
          placeholder={label}
          maxLength={6}
          returnKeyType="done"
          style={dynamicStyles.input}
        />
        <IconButton
          icon="plus"
          size={25}
          mode="contained-tonal"
          onPress={handleIncrement}
          testID="plus-button"
        />
      </View>
    </View>
  );
};
