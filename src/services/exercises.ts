import { Exercise } from "../types";


const getAll = (): Exercise[] => {
  return [
    { name: "Bench" },
    { name: "Squat" },
    { name: "Shoulder Press" },
    { name: "Leg extension" },
    { name: "Bent Over Row" },
  ];
};

const exerciseService = {
  getAll,
};

export default exerciseService;
