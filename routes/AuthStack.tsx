import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../screens/SignInScreen';
import { ChooseSignUpMethod } from '../screens/ChooseSignUpMethodScreen';

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
                component={ChooseSignUpMethod}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}