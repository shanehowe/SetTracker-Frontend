import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../screens/SignInScreen';

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
        </Stack.Navigator>
    );
}