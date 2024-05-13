import React from "react";
import { TextInput } from "react-native-paper";

interface PasswordInputProps {
  label: string;
  onChangeText: (text: string) => void;
  mode: "flat" | "outlined";
  style?: object;
  testID?: string;
}

export const PasswordInput = ({
  label,
  onChangeText,
  mode,
  style,
  testID,
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
          testID="password-input-icon"
          icon={showPassword ? "eye-off" : "eye"}
          onPress={toggleShowPassword}
        />
      }
      testID={testID ? testID : "password-input"}
    />
  );
};
