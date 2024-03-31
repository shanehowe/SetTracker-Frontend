import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { AuthProvidor } from "./contexts/AuthContext";
import { PaperProvider } from "react-native-paper";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { NavigationContainer } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface WrappperArgs {
  children: React.ReactNode;
}

export const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const queryClientWrapper = ({ children }: WrappperArgs) => {
  return (
    <QueryClientProvider client={mockedQueryClient}>
      {children}
    </QueryClientProvider>
  );
};

export const AllTheProviders = ({ children }: WrappperArgs) => {
  return (
      <QueryClientProvider client={mockedQueryClient}>
        <PaperProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <NavigationContainer>
                <SnackbarProvider>{children}</SnackbarProvider>
              </NavigationContainer>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </PaperProvider>
      </QueryClientProvider>
  );
};
