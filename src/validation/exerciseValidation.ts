import { ValidationResult } from "../types";

export const isValidExerciseName = (name: string): ValidationResult => {
  const MIN_LENGTH = 5;
  const MAX_LENGTH = 30;

  const validLength = name.length >= MIN_LENGTH && name.length <= MAX_LENGTH;
  if (!validLength) {
    return {
      isValid: false,
      message: `Exercise name must be between ${MIN_LENGTH} and ${MAX_LENGTH}`,
    };
  }
  return { isValid: true, message: "Valid" };
};
