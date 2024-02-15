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
  workoutFolders.push(newFolder);
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

const remove = (folderId: string) => {
  const folderIndex = workoutFolders.findIndex((folder) => folder.id === folderId);
  if (folderIndex === -1) {
    throw new Error("Folder not found");
  }
  workoutFolders.splice(folderIndex, 1);
  return true;
};

const workoutFolderService = {
  getAll,
  create,
  getById,
  updateExercises,
  remove,
};

export default workoutFolderService;
