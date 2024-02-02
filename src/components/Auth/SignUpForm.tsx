import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { AuthButtons } from "./AuthButtons";

export const SignUpForm = () => {
    return (
        <>
            <View style={{width: '100%'}}>
                <Button mode="contained">
                    <Text >Sign Up Email & Password</Text>
                </Button>
            </View>
        </>
    );
};