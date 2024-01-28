import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName='SignIn'>
            <Stack.Screen 
                name="SignIn"
                component={SignInScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUpScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}