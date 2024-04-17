import { Platform } from "react-native";
import Constants from "expo-constants";


export const API_URL = Platform.OS == "web" ? Constants.manifest.extra.webUrl : Constants.manifest.extra.apiUrl;