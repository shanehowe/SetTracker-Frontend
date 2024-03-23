import Constants from "expo-constants";
import axios from "axios";

// @ts-ignore
const API_URL = Constants.expoConfig?.extras?.apiUrl;

let token: string | null = null;

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
