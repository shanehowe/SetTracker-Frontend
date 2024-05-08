import { useMutation } from "@tanstack/react-query";
import authService from "../services/auth";
import { User } from "../types";

export const useSignInWithEmailPasswordMutation = (
  onSuccessCallback: (user: User) => void,
  onErrorCallback: (error: Error) => void
) => {
  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => await authService.signInEmailPassword(email, password),
    onSuccess: (user: User) => {
      onSuccessCallback(user);
    },
    onError: (error) => {
      onErrorCallback(error);
    },
  });
};
