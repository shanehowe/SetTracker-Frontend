import setService from "../services/sets";
import { useQuery } from "@tanstack/react-query";
import { SetHistory } from "../types";

export const useSetHistory = (exerciseId: string) => {
  const {
    data,
    error,
    isError,
    isLoading,
  } = useQuery<SetHistory[]>({
    queryKey: ["setHistory", exerciseId],
    queryFn: () => setService.getSetHistory(exerciseId),
  });

  return {
    data,
    error,
    isError,
    isLoading,
  };
};