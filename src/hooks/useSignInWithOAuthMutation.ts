import { useMutation } from "@tanstack/react-query";
import authService from "../services/auth";
import { User } from "../types";

export const useSignInWithOAuthMutation = (
  onSuccessCallback: (user: User) => void,
  onErrorCallback: (error: Error) => void
) => {
  return useMutation({
    mutationFn: async ({
      provider,
      token,
    }: {
      provider: string;
      token: string;
    }) => await authService.signInOAuth(provider, token),
    onSuccess: (user: User) => {
      onSuccessCallback(user);
    },
    onError: (error) => {
      onErrorCallback(error);
    },
  });
};
