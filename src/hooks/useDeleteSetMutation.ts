import { useMutation, useQueryClient } from "@tanstack/react-query";
import setService from "../services/sets";

export const useDeleteSetMutation = (
  onSuccessCallback: () => void,
  onErrorCallback: (error: Error) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (setId: string) => setService.remove(setId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["setHistory"] });
      onSuccessCallback();
    },
    onError: (error) => onErrorCallback(error),
  });
};
