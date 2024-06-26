export type WorkoutFolder = {
  id: string;
  name: string;
  exercises: Exercise[];
  user_id: string;
};

export type Exercise = {
  id: string;
  name: string;
};

export type ExerciseSet = {
  id: string;
  dateCreated: string;
  weight: number;
  reps: number;
  exerciseId: string
}

export type SetHistory = {
  dateCreated: string,
  sets: ExerciseSet[]
}

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

export type RootStackParamList = {
  WorkoutFolders: undefined;
  AllExercises: undefined;
  FolderExercises: { folderId: string, updated?: boolean };
  AddExercises: { folderId: string };
  SetHistory: { exerciseId: string };
};

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type SettingsStackParamList = {
  Settings: undefined;
  Appearance: undefined;
}

export type User = {
  id: string;
  token: string;
  preferences?: UserPreferences;
};

type UserPreferences = {
  theme: string;
}

export type ApiException = {
  detail: string
}