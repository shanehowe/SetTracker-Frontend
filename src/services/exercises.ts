import { Exercise } from "../types";


const exercises: Exercise[] = [
  { id: "1", name: "Bench" },
  { id: "2", name: "Squat" },
  { id: "3", name: "Shoulder Press" },
  { id: "4", name: "Leg extension" },
  { id: "5", name: "Bent Over Row" },
];

const getAll = (): Exercise[] => {
  return exercises;
};

const getById = (exerciseId: string): Exercise => {
  const exercise =  exercises.find((exercise) => exercise.id === exerciseId);
  if (!exercise) {
    throw new Error("Exercise not found");
  }
  return exercise;
};

const createCustom = (exerciseName: string): Exercise => {
  const id = Math.floor(Math.random() * 1000).toString();
  exercises.push({ id, name: exerciseName });
  return { id, name: exerciseName };
};

const exerciseService = {
  getAll,
  getById,
  createCustom,
};

export default exerciseService;
