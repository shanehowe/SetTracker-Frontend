import { SetHistory } from "../types";
import Constants from "expo-constants";
import axios from "axios";
import { token } from "./auth";

const API_URL = Constants.expoConfig?.extra?.apiUrl;

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

const setService = {
  getSetHistory,
};

export default setService;
