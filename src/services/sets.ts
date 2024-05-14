import { ExerciseSet, SetHistory } from "../types";
import axios from "axios";
import { API_URL } from "./common";
import { authHeaderInterceptor } from "./interceptors";

const setClient = axios.create({
  baseURL: `${API_URL}/sets`,
});

setClient.interceptors.request.use(authHeaderInterceptor);

const getSetHistory = async (exerciseId: string): Promise<SetHistory[]> => {
  const response = await setClient.get<SetHistory[]>(`/${exerciseId}`);
  return response.data;
};

const createSet = async (exerciseId: string, weight: number, reps: number) => {
  const response = await setClient.post<ExerciseSet>("/", {
    exerciseId,
    weight,
    reps,
  });
  return response.data;
};

const remove = async (setId: string) => {
  const response = await setClient.delete(`/${setId}`);
  return response.data;
};

const setService = {
  getSetHistory,
  createSet,
  remove,
};

export default setService;
