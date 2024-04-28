import { StatusBar } from "expo-status-bar";
import { Router } from "./routes/Router";
import { AuthProvidor } from "./contexts/AuthContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { AppThemeProvider } from "./contexts/AppThemeContext";

import React from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvidor>
        <AppThemeProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <SnackbarProvider>
                <Router />
                <StatusBar style="auto" />
              </SnackbarProvider>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </AppThemeProvider>
      </AuthProvidor>
    </QueryClientProvider>
  );
}
