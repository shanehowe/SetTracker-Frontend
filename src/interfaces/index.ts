import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";

export interface ScreenProps {
  navigation: NavigationProp<RootStackParamList>;
}

export interface SnackbarService {
  success: (message: string) => void;
  info: (message: string) => void;
  error: (message: string) => void;
  close: () => void;
}