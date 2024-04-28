import axios from "axios";
import { token } from "./auth";
import { API_URL } from "./common";

type Preferences = {
  theme: string;
};

const updatePreferences = async (
  updatedPreferences: Partial<Preferences>
): Promise<void> => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const response = await axios.put<void>(
    `${API_URL}/me/preferences`,
    updatedPreferences,
    { headers }
  );
  return response.data;
};

const userService = {
  updatePreferences,
};

export default userService;
