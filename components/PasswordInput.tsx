import React from 'react';
import { TextInput } from 'react-native-paper';

interface PasswordInputProps {
    label: string;
    onChangeText: (text: string) => void;
    mode: 'flat' | 'outlined';
}

export const PasswordInput = ({ label, onChangeText, mode }: PasswordInputProps) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const toggleShowPassword = () => setShowPassword(!showPassword);

    return (
        <TextInput
            onChangeText={onChangeText}
            label={label}
            mode={mode}
            secureTextEntry={showPassword}
            style={{width: '100%'}}
            right={
                <TextInput.Icon
                    icon={showPassword ? "eye" : "eye-off"}
                    onPress={toggleShowPassword}
                />
            }
        />
    );
};