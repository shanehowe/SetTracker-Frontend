import { useMutation, useQueryClient } from "@tanstack/react-query";
import workoutFolderService from "../services/workoutFolders";
import { Exercise } from "../types";

export const useUpdateExercisesMutation = (
  folderId: string,
  onSuccessCallback: () => void,
  onErrorCallback: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (exercises: Exercise[]) =>
      workoutFolderService.updateFolder(folderId, { exercises }),
    onSuccess: async (updated) => {
      await queryClient.invalidateQueries({ queryKey: ["folder", folderId] });
      onSuccessCallback();
    },
    onError: (error) => {
      onErrorCallback();
    },
  });
};
