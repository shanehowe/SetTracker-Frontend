import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Router } from "./routes/Router";
import { AuthProvidor } from "./contexts/AuthContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { theme } from "./theme/theme";

import React from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function App() {
  const colorScheme = useColorScheme();

  const paperTheme = colorScheme === "dark" ? theme.dark : theme.light;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvidor>
        <PaperProvider theme={paperTheme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <SnackbarProvider>
                <Router />
                <StatusBar style="auto" />
              </SnackbarProvider>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </PaperProvider>
      </AuthProvidor>
    </QueryClientProvider>
  );
}
