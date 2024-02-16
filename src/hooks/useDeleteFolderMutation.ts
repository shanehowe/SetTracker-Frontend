import { useMutation, useQueryClient } from "@tanstack/react-query";
import workoutFolderService from "../services/workoutFolders";
import { WorkoutFolder } from "../types";

export const useDeleteFolderMutation = (
  folderId: string,
  onSuccessCallback: () => void,
  onErrorCallback: () => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => workoutFolderService.remove(folderId),
    onSuccess: () => {
      queryClient.setQueryData<WorkoutFolder[]>(["workoutFolders"], (oldData) => {
        return oldData?.filter((folder) => folder.id !== folderId) || [];
      });
      onSuccessCallback();
    },
    onError: () => {
      onErrorCallback();
    },
  });
};