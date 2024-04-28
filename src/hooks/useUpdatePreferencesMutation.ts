import { useMutation } from "@tanstack/react-query";
import userService from "../services/users";

export const useUpdatePreferences = (
  onSuccessCallback: () => void,
  onErrorCallback: (error: Error) => void
) => {
  return useMutation({
    mutationFn: userService.updatePreferences,
    onSuccess: onSuccessCallback,
    onError: onErrorCallback
  })
};