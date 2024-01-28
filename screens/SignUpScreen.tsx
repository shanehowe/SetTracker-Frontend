import { SafeAreaView, StyleSheet, View } from "react-native";
import { AuthButtons } from "../components/Auth/AuthButtons";
import {  useTheme, Text, Avatar, Button } from "react-native-paper";
import { ScreenProps } from "../interfaces";

export const SignUpScreen = ({ navigation }: ScreenProps) => {
    const theme = useTheme();

    const goToSignIn = () => {
        navigation.navigate("SignIn");
    }

    return (
        <SafeAreaView 
            style={[
                {backgroundColor: theme.colors.background, flex: 1}
            ]}
        >
            <View style={styles.container}>
                <View style={styles.avatarSection}>
                    <Avatar.Icon
                        style={{
                            backgroundColor: theme.colors.primary,
                            alignSelf: "center",
                            flex: 0,
                            marginBottom: 20,
                        }}
                        size={100}
                        icon="lock"
                    />
                    <Text variant="titleMedium" style={styles.text}>
                        Choose a sign up method
                    </Text>
                </View>
                <View style={styles.buttonsView}>
                    <Button mode="contained" style={{
                        width: '100%',
                        marginBottom: 20
                    }}>
                        Sign Up Email & Password
                    </Button>
                    <Text>OR</Text>
                    <AuthButtons />
                </View>
                <View style={styles.alreadyHaveAccountView}>
                    <Button onPress={goToSignIn} mode="text" style={{
                        width: '100%'
                    }}>
                        Already have an account? Sign In
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        marginVertical: 10,
        textAlign: "center",
    },
    avatarSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonsView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
    },
    alreadyHaveAccountView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        paddingTop: 20
    },
});