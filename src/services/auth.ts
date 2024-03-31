import Constants from "expo-constants";
import axios from "axios";

const API_URL = Constants.expoConfig?.extra?.apiUrl;

export let token: string | null = null;

const setToken = (newToken: string) => {
  token = newToken;
};

const signIn = async (provider: string, token: string) => {
  const payload = {
    provider,
    token,
  };
  const response = await axios.post(`${API_URL}/auth/signin`, payload);
  return response.data;
};

const authService = { signIn, setToken };

export default authService;
