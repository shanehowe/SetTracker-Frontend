import axios from "axios";
import { token } from "./auth";
import { API_URL } from "./common";

type Preferences = {
  theme: string;
};

const userClient = axios.create({
  baseURL: `${API_URL}/me`,
});

userClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const updatePreferences = async (
  updatedPreferences: Partial<Preferences>
): Promise<void> => {
  const response = await userClient.put<void>(
    "/preferences",
    updatedPreferences
  );
  return response.data;
};

const userService = {
  updatePreferences,
};

export default userService;
