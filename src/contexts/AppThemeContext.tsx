import React, { createContext, useEffect, useState } from "react";
import { theme } from "../theme/theme";
import { PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";

interface AppThemeProviderProps {
  children: React.ReactNode;
}

type AppThemeContextType = {
  appTheme: typeof theme.light;
  setTheme: (themeToSet: typeof theme.light) => void;
};

export const AppThemeContext = createContext<AppThemeContextType>({
  appTheme: theme.light,
  setTheme: () => {},
});

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [appTheme, setAppTheme] = useState(theme.light);
  const colorScheme = useColorScheme();

  useEffect(() => {
    colorScheme === "dark" ? setAppTheme(theme.dark) : setAppTheme(theme.light);
  }, []);

  return (
    <AppThemeContext.Provider value={{ appTheme, setTheme: setAppTheme }}>
      <PaperProvider theme={appTheme}>
          {children}
      </PaperProvider>
    </AppThemeContext.Provider>
  )
};
