import * as AppleAuthentication from "expo-apple-authentication";
import { useAuth } from "../../../contexts/AuthContext";
import { useSignInWithOAuthMutation } from "../../../hooks/useSignInWithOAuthMutation";

export const AppleSignInButton = () => {
  const auth = useAuth();

  const signInOAuthMutation = useSignInWithOAuthMutation(
    auth.onSignInSuccess,
    console.error
  );

  const handleSignIn = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [AppleAuthentication.AppleAuthenticationScope.EMAIL],
      });

      if (credential && credential.identityToken) {
        signInOAuthMutation.mutate({
          token: credential.identityToken,
          provider: "apple",
        });
      }
    } catch (e: Error | any) {
      if (e.code === "ERR_REQUEST_CANCELED") {
        console.log("User cancelled Apple Sign in.");
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
