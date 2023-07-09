import { v4 as uuidV4 } from "uuid";

export const todos = [
  {
    id: uuidV4(),
    message: "Go to costco",
    isDone: false,
  },
  {
    id: uuidV4(),
    message: "Buy two Razors",
    isDone: false,
  },
  {
    id: uuidV4(),
    message: "Shower on saturday",
    isDone: false,
  },
];
