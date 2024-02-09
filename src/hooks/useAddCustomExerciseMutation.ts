import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Exercise } from "../types";
import exerciseService from "../services/exercises";

export const useAddCustomExerciseMutation = (
  onSuccess: (data: Exercise) => void,
  onError: (error: Error) => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (exerciseName: string) =>
      exerciseService.createCustom(exerciseName),
    onSuccess: (createdExercise) => {
      queryClient.setQueryData<Exercise[]>(
        ["allExercises"],
        (oldExercises: any) => {
          return oldExercises
            ? [...oldExercises, createdExercise]
            : [createdExercise];
        }
      );
      onSuccess(createdExercise);
    },
    onError,
  });
};
