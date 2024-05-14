import { Exercise } from "../types";
import axios from "axios";
import { API_URL, authHeaderInterceptor } from "./common";

const exerciseClient = axios.create({
  baseURL: `${API_URL}/exercises`,
});

exerciseClient.interceptors.request.use(authHeaderInterceptor);

const getAll = async () => {
  const response = await exerciseClient.get<Exercise[]>("/");
  return response.data;
};

const createCustom = async (exerciseName: string): Promise<Exercise> => {
  const response = await exerciseClient.post<Exercise>("/", {
    name: exerciseName,
  });
  return response.data;
};

const exerciseService = {
  getAll,
  createCustom,
};

export default exerciseService;
