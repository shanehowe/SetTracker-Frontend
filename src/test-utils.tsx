import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { AuthProvidor } from "./contexts/AuthContext";
import { PaperProvider } from "react-native-paper";
import { SnackbarProvider } from "./contexts/SnackbarContext";

interface WrappperArgs {
  children: React.ReactNode
};

export const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    }
  }
});

export const queryClientWrapper = ({ children }: WrappperArgs) => {

  return (
    <QueryClientProvider client={mockedQueryClient} >
      { children }
    </QueryClientProvider>
  );
}

export const AllTheProviders = ({ children }: WrappperArgs) => {
  return (
    <AuthProvidor>
      <QueryClientProvider client={mockedQueryClient} >
        <PaperProvider>
          <SnackbarProvider>
            { children }
          </SnackbarProvider>
        </PaperProvider>
      </QueryClientProvider>
    </AuthProvidor>
  );
};