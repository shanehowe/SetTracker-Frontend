import { useMutation, useQueryClient } from "@tanstack/react-query";
import workoutFolderService from "../services/workoutFolders";
import { WorkoutFolder } from "../types";

export const useRenameFolderMutation = (
  folderId: string,
  onSuccessCallback: (renamedFolder: WorkoutFolder) => void,
  onErrorCallback: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (name: string) =>
      workoutFolderService.updateFolder(folderId, { name }),
    onSuccess: (data) => {
      queryClient.setQueryData(["folder", folderId], data);
      queryClient.invalidateQueries({
        queryKey: ["workoutFolders"],
      });
      onSuccessCallback(data);
    },
    onError: (error) => {
      onErrorCallback();
    },
  });
};
