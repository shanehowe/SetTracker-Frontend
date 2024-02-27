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
    try {
      return exerciseService.getById(exercise);
    } catch (error) {
      return exerciseService.createCustom(exercise);
    }
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

const rename = (folderId: string, name: string) => {
  const index = workoutFolders.findIndex((folder) => folder.id === folderId);
  if (index === -1) {
    throw new Error("Folder not found");
  }
  workoutFolders[index].name = name;
  return workoutFolders[index];
};

const workoutFolderService = {
  getAll,
  create,
  getById,
  updateExercises,
  remove,
  rename,
};

export default workoutFolderService;
