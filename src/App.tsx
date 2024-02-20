import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Router } from "./routes/Router";
import { AuthProvidor } from "./contexts/AuthContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { theme } from "./theme/theme";

import React from "react";

const queryClient = new QueryClient();

export default function App() {
  const colorScheme = useColorScheme();

  const paperTheme = colorScheme === "dark" ? theme.dark : theme.light;

  return (
    <AuthProvidor>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={paperTheme}>
          <GestureHandlerRootView style= {{ flex: 1 }}>
            <SnackbarProvider>
              <Router />
              <StatusBar style="auto" />
            </SnackbarProvider>
          </GestureHandlerRootView>
        </PaperProvider>
      </QueryClientProvider>
    </AuthProvidor>
  );
}
