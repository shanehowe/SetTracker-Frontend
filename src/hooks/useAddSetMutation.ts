import { useMutation, useQueryClient } from "@tanstack/react-query";
import setService from "../services/sets";
import { ExerciseSet } from "../types";

export const useAddSetMutation = (
  onSuccessCallback: (createdSet: ExerciseSet) => void,
  onErrorCallback: (error: Error) => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (setData: {
      exerciseId: string;
      weight: number;
      reps: number;
    }) => setService.createSet(setData.exerciseId, setData.weight, setData.reps),
    onSuccess: (createdSet) => {
      queryClient.invalidateQueries({ queryKey: ["setHistory"] });
      onSuccessCallback(createdSet);
    },
    onError: (error) => {
      onErrorCallback(error);
    }
  });
};
