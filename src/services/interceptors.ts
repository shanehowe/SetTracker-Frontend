import { InternalAxiosRequestConfig } from "axios";
import { token } from "./auth";

export const authHeaderInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
};