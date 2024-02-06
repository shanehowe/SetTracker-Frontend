import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

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