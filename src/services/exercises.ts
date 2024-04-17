import { Exercise } from "../types";
import axios from "axios";
import { token } from "./auth";
import { API_URL } from "./common";

const exercises: Exercise[] = [
  { id: "1", name: "Bench" },
  { id: "2", name: "Squat" },
  { id: "3", name: "Shoulder Press" },
  { id: "4", name: "Leg extension" },
  { id: "5", name: "Bent Over Row" },
];

const getAll = async () => {
  const headers = {
    "Authorization": `Bearer ${token}`
  }
  const response = await axios.get<Exercise[]>(`${API_URL}/exercises/`, { headers });
  return response.data;
};

const getById = (exerciseId: string): Exercise => {
  const exercise =  exercises.find((exercise) => exercise.id === exerciseId);
  if (!exercise) {
    throw new Error("Exercise not found");
  }
  return exercise;
};

const createCustom = async (exerciseName: string): Promise<Exercise> => {
  const headers = {
    "Authorization": `Bearer ${token}`
  }
  const payload = {
    name: exerciseName
  };
  const response = await axios.post<Exercise>(`${API_URL}/exercises/`, payload, { headers });
  return response.data;
};

const exerciseService = {
  getAll,
  getById,
  createCustom,
};

export default exerciseService;
