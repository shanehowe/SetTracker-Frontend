import axios from "axios";
import { API_URL } from "./common";
import { User } from "../types";

export let token: string | null = null;

const setToken = (newToken: string) => {
  token = newToken;
};

const signIn = async (provider: string, token: string) => {
  const payload = {
    provider,
    token,
  };
  const response = await axios.post<User>(`${API_URL}/auth/signin/oauth`, payload);
  return response.data;
};

const authService = { signIn, setToken };

export default authService;
