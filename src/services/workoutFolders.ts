import { WorkoutFolder } from "../types";
import {token} from "./auth";
import Constants from "expo-constants";
import axios from "axios";

const API_URL = Constants.expoConfig?.extra?.apiUrl;

const getAll = async () => {
  const headers = {
    "Authorization": `Bearer ${token}`
  };
  const response = await axios.get<WorkoutFolder[]>(
    `${API_URL}/workout-folders/`,
    { headers }
  );
  return response.data;
};

const create = async (folderName: string) => {
  const headers = {
    "Authorization": `Bearer ${token}`
  };
  const payload = {
    name: folderName
  };

  const response = await axios.post<WorkoutFolder>(
    `${API_URL}/workout-folders/`,
    payload,
    { headers }
  );
  return response.data;
};

const getById = (folderId: string) => {
};

const updateExercises = (folderId: string, exercises: string[]) => {
};

const remove = (folderId: string) => {
};

const rename = (folderId: string, name: string) => {
};

const workoutFolderService = {
  getAll,
  create,
  getById,
  updateExercises,
  remove,
  rename,
};

export default workoutFolderService;
