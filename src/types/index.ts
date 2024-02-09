export type WorkoutFolder = {
  id: string;
  name: string;
  exercises: string[];
};

export type Exercise = {
  id: string;
  name: string;
};

export type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "info" | "error" | undefined;
};

export type SnackbarAction = {
  type: "OPEN_SNACKBAR" | "CLOSE_SNACKBAR";
  payload?: SnackbarState;
};

export type ValidationResult = {
  isValid: boolean;
  message: string;
};
