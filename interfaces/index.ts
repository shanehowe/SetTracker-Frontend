import { NavigationProp } from "@react-navigation/native";

export interface ScreenProps {
  navigation: NavigationProp<any, any>;
}

export interface SnackbarService {
  success: (message: string) => void;
  info: (message: string) => void;
  error: (message: string) => void;
  close: () => void;
}