import { WorkoutFolder } from "../types";

// Mock data for now
const workoutFolders: WorkoutFolder[] = [
  {
    id: "1",
    name: "Chest Day",
    exercises: [
      { id: "1", name: "Bent Over Row" },
      { id: "2", name: "Pull Ups" },
      { id: "3", name: "Bicep Curls" },
    ],
  },
  {
    id: "2",
    name: "Back and Biceps",
    exercises: [
      { id: "1", name: "Bent Over Row" },
      { id: "2", name: "Pull Ups" },
      { id: "3", name: "Bicep Curls" },
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

const workoutFolderService = {
  getAll,
  create,
  getById,
};

export default workoutFolderService;