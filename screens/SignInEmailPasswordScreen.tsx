import React from 'react';
import { ScreenProps } from '../interfaces';
import { SafeAreaView, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export const SignInEmailPasswordScreen = ({ navigation }: ScreenProps) => {
    const theme = useTheme();

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <View>
                <Text>Sign In Email & Password</Text>
            </View>
        </SafeAreaView>
    );
};