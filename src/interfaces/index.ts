import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList, AuthStackParamList } from "../types";

export interface ScreenProps {
  navigation: NavigationProp<RootStackParamList>;
}

export interface AuthScreenProps {
  navigation: NavigationProp<AuthStackParamList>;
}

export interface SnackbarService {
  success: (message: string) => void;
  error: (message: string) => void;
  close: () => void;
}