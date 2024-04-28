import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChooseSignInMethodScreen } from '../screens/auth/ChooseSignInMethodScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName='SignIn'>
            <Stack.Screen 
                name="SignIn"
                component={ChooseSignInMethodScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}