import { WorkoutFolder } from "../types";

// Mock data for now
const workoutFolders: WorkoutFolder[] = [
  {
    id: "1",
    name: "Chest Day",
    exercises: ["Bench Press", "Incline Bench Press", "Decline Bench Press"],
  },
  {
    id: "2",
    name: "Back and Biceps",
    exercises: ["Deadlift", "Pull Ups", "Rows"],
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

const workoutFolderService = {
  getAll,
  create,
};

export default workoutFolderService;