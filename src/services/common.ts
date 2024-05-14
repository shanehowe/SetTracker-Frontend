import { Platform } from "react-native";
import Constants from "expo-constants";

export const API_URL =
  Platform.OS == "web"
    ? Constants.expoConfig?.extra?.webUrl
    : Constants.expoConfig?.extra?.apiUrl;
