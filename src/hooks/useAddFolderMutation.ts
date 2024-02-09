import { useMutation, useQueryClient } from "@tanstack/react-query";
import workoutFolderService from "../services/workoutFolders";
import { WorkoutFolder } from "../types";

export const useAddFolderMutation = (
  onSuccess: (data: WorkoutFolder) => void,
  onError: (error: Error) => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (folderName: string) =>
      workoutFolderService.create(folderName),
    onSuccess: (createdFolder) => {
      queryClient.setQueryData<WorkoutFolder[]>(
        ["workoutFolders"],
        (oldFolders) => {
          return oldFolders ? [...oldFolders, createdFolder] : [createdFolder];
        }
      );
      onSuccess(createdFolder);
    },
    onError,
  });
};
