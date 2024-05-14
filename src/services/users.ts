import axios from "axios";
import { API_URL, authHeaderInterceptor } from "./common";

type Preferences = {
  theme: string;
};

const userClient = axios.create({
  baseURL: `${API_URL}/me`,
});

userClient.interceptors.request.use(authHeaderInterceptor);

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
