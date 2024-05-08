import axios from "axios";
import { API_URL } from "./common";
import { User } from "../types";

export let token: string | null = null;

const setToken = (newToken: string) => {
  token = newToken;
};

const authClient = axios.create({
  baseURL: `${API_URL}/auth`,
});

const signInOAuth = async (provider: string, token: string) => {
  const payload = {
    provider,
    token,
  };
  const response = await authClient.post<User>("/signin/oauth", payload);
  return response.data;
};

const handleSignInUp = async (
  email: string,
  password: string,
  path: string
) => {
  const payload = {
    email,
    password,
  };
  const response = await authClient.post<User>(`/${path}`, payload);
  return response.data;
};

const signInEmailPassword = async (email: string, password: string) => {
  return handleSignInUp(email, password, "signin");
};

const signUpEmailPassword = async (email: string, password: string) => {
  return handleSignInUp(email, password, "signup");
};

const authService = {
  signInOAuth,
  setToken,
  signInEmailPassword,
  signUpEmailPassword,
};

export default authService;
