import { AxiosError } from "axios";
import { ApiException } from "../types";

export const getUserFriendlyMessageFromAxiosError = (error: AxiosError<ApiException>) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        return handle401Error(error);
    }
  }
};

const handle401Error = (error: AxiosError<ApiException>) => {
  if (error.response?.data?.detail === "Token expired") {
    return "Your session has expired. Please log in again.";
  } else {
    return "Invalid credentials.";
  }
};