import { Exercise, WorkoutFolder } from "../types";
import exerciseService from "./exercises";

// Mock data for now
const workoutFolders: WorkoutFolder[] = [
  {
    id: "1",
    name: "Chest Day",
    exercises: [
      { id: "1", name: "Bench" },
      { id: "2", name: "Squat" },
      { id: "3", name: "Shoulder Press" },
    ],
  },
  {
    id: "2",
    name: "Back and Biceps",
    exercises: [
      { id: "1", name: "Bench" },
      { id: "2", name: "Squat" },
      { id: "3", name: "Shoulder Press" },
    ],
  },
];

const getAll = () => {
  return workoutFolders;
};

const create = (folderName: string) => {
  const newFolder: WorkoutFolder = {
    id: Math.floor(Math.random() * 1000).toString(),
    name: folderName,
    exercises: [],
  };
  return newFolder;
};

const getById = (folderId: string) => {
  const folder = workoutFolders.find((folder) => folder.id === folderId);
  if (!folder) {
    throw new Error("Folder not found");
  }
  return folder;
};

const updateExercises = (folderId: string, exercises: string[]) => {
  const folder = workoutFolders.find((folder) => folder.id === folderId);
  if (!folder) {
    throw new Error("Folder not found");
  }
  folder.exercises = exercises.map((exercise) => {
    return exerciseService.getById(exercise);
  });
  return folder;
};

const workoutFolderService = {
  getAll,
  create,
  getById,
  updateExercises,
};

export default workoutFolderService;
