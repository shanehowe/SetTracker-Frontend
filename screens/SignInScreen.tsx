import { View, Text, Alert } from "react-native";
import { StyleSheet } from "react-native";

export const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Sign In Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});