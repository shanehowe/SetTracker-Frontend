import { ExerciseSet, SetHistory } from "../types";
import axios from "axios";
import { token } from "./auth";
import { API_URL } from "./common";

const setClient = axios.create({
  baseURL: `${API_URL}/sets`,
});

setClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

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
