import * as AppleAuthentication from 'expo-apple-authentication';

export const AppleSignInButton = () => {
  
  const handleSignIn = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      console.log(
        JSON.stringify(credential, null, 2)
      );
    } catch (e: Error | any) {
      if (e.code === 'ERR_CANCELED') {
        console.log('User cancelled Apple Sign in.');
      } else {
        console.log(e.code, e.message);
      }
    }
  };

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={{ width: "90%", height: 60 }}
      onPress={handleSignIn}
    />
  );
};