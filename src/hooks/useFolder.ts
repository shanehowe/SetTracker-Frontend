import { useQuery } from "@tanstack/react-query";
import workoutFolderService from "../services/workoutFolders";

export const useFolder = (id: string) => {
  const { isLoading, isError, error, data: folder} = useQuery({
    queryKey: ["folder", id],
    queryFn: () => workoutFolderService.getById(id),
  });

  return {
    isLoading,
    isError,
    error,
    folder
  };
};