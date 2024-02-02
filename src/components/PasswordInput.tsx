import React from "react";
import { TextInput } from "react-native-paper";

interface PasswordInputProps {
  label: string;
  onChangeText: (text: string) => void;
  mode: "flat" | "outlined";
  style?: object;
}

export const PasswordInput = ({
  label,
  onChangeText,
  mode,
  style,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  style = style ? style : { width: "100%" };

  return (
    <TextInput
      onChangeText={onChangeText}
      label={label}
      mode={mode}
      secureTextEntry={!showPassword}
      style={style}
      right={
        <TextInput.Icon
          icon={showPassword ? "eye-off" : "eye"}
          onPress={toggleShowPassword}
        />
      }
      testID="password-input"
    />
  );
};
