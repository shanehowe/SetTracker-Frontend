import { useQuery } from "@tanstack/react-query";
import exerciseService from "../services/exercises";
import { useMemo } from "react";

export const useExercises = (filter: string) => {
  const { error, isError, isLoading, data } = useQuery({
    queryKey: ["allExercises"],
    queryFn: exerciseService.getAll,
  });

  const exercises = useMemo(() => {
    if (!data) return [];

    return data.filter((exercise) => {
      return exercise.name.toLowerCase().includes(filter.toLowerCase());
    });
  }, [data, filter]); 

  return {
    error,
    isError,
    isLoading,
    exercises
  };
};
