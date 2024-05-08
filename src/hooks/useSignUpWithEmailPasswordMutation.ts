import { useMutation } from "@tanstack/react-query";
import { User } from "../types";
import authService from "../services/auth";

export const useSignUpWithEmailPasswordMutation = (
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
    }) =>
      await authService.signUpEmailPassword(email, password),
    onSuccess: (user) => onSuccessCallback(user),
    onError: (error) => onErrorCallback(error)
  });
};
