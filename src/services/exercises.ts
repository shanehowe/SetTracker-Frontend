import { Exercise } from "../types";
import axios from "axios";
import { token } from "./auth";
import { API_URL } from "./common";

const getAll = async () => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const response = await axios.get<Exercise[]>(`${API_URL}/exercises/`, {
    headers,
  });
  return response.data;
};

const createCustom = async (exerciseName: string): Promise<Exercise> => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const payload = {
    name: exerciseName,
  };
  const response = await axios.post<Exercise>(
    `${API_URL}/exercises/`,
    payload,
    { headers }
  );
  return response.data;
};

const exerciseService = {
  getAll,
  createCustom,
};

export default exerciseService;
