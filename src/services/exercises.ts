import { Exercise } from "../types";


const getAll = (): Exercise[] => {
  return [
    { id: "1", name: "Bench" },
    { id: "2", name: "Squat" },
    { id: "3", name: "Shoulder Press" },
    { id: "4", name: "Leg extension" },
    { id: "5", name: "Bent Over Row" },
  ];
};

const createCustom = (exerciseName: string): Exercise => {
  const id = Math.floor(Math.random() * 1000).toString();
  return { id, name: exerciseName };
};

const exerciseService = {
  getAll,
  createCustom,
};

export default exerciseService;
