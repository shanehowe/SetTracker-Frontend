import { ExerciseSet, SetHistory } from "../types";
import axios from "axios";
import { token } from "./auth";
import { API_URL } from "./common";

const getSetHistory = async (exerciseId: string): Promise<SetHistory[]> => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const response = await axios.get<SetHistory[]>(
    `${API_URL}/sets/${exerciseId}`,
    { headers }
  );
  return response.data;
};

const createSet = async (exerciseId: string, weight: number, reps: number) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const response = await axios.post<ExerciseSet>(
    `${API_URL}/sets/`,
    { exerciseId, weight, reps },
    { headers }
  );
  return response.data;
};

const setService = {
  getSetHistory,
  createSet
};

export default setService;
