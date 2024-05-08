import { WorkoutFolder } from "../types";
import { token } from "./auth";
import axios from "axios";
import { API_URL } from "./common";

const workoutFolderClient = axios.create({
  baseURL: `${API_URL}/workout-folders`,
});

workoutFolderClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const getAll = async () => {
  const response = await workoutFolderClient.get<WorkoutFolder[]>("/");
  return response.data;
};

const create = async (folderName: string) => {
  const payload = {
    name: folderName,
  };
  const response = await workoutFolderClient.post<WorkoutFolder>("/", payload);
  return response.data;
};

const getById = async (folderId: string) => {
  const response = await workoutFolderClient.get<WorkoutFolder>(`/${folderId}`);
  return response.data;
};

const updateFolder = async (
  folderId: string,
  folder: Partial<WorkoutFolder>
) => {
  const response = await workoutFolderClient.put<WorkoutFolder>(
    `/${folderId}`,
    folder
  );
  return response.data;
};

const remove = async (folderId: string) => {
  const response = await workoutFolderClient.delete(`/${folderId}`);
  return response.data;
};

const workoutFolderService = {
  getAll,
  create,
  getById,
  remove,
  updateFolder,
};

export default workoutFolderService;
