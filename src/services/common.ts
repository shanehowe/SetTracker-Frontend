import { Platform } from "react-native";
import Constants from "expo-constants";
import { InternalAxiosRequestConfig } from "axios";
import { token } from "./auth";

export const API_URL =
  Platform.OS == "web"
    ? Constants.expoConfig?.extra?.webUrl
    : Constants.expoConfig?.extra?.apiUrl;

export const authHeaderInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
};
