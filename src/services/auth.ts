let token: string | null = null;

const setToken = (newToken: string) => {
  token = newToken;
};

type AppleSignInData = {
  email: string;
  identityToken: string;
}

type ProviderData = AppleSignInData;

// For now just apple, but we could add more providers
const signIn = async (provider: string, data: ProviderData) => {
  
};