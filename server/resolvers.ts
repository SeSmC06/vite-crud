// Resolvers define the technique for fetching the types defined in the

import { todos } from "../lib/fake";
import { v4 as uuidV4 } from "uuid";

// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    todos: () => todos,
  },
  Mutation: {
    createToDo: (_, { message, isDone }) => {
      const newToDo = {
        message,
        isDone,
        id: uuidV4(),
      };
      const updatedToDos = [...todos, newToDo];
      return {
        todos: updatedToDos,
        success: true,
        message: "nicely done",
      };
    },
    updateToDo: (_, { id, message, isDone }) => {
      const currentToDo = todos.findIndex((todo) => todo.id === id);
      if (currentToDo === -1) {
        return {
          success: false,
          message: "failed to update",
          todos: [],
        };
      }

      todos[currentToDo] = { ...todos[currentToDo], ...{ message, isDone } };
      return {
        todos,
        success: true,
        message: "updated",
      };
    },
    deleteToDo: (_, { id }) => {
      const currentToDo = todos.findIndex((todo) => todo.id === id);
      if (currentToDo === -1) {
        return {
          success: false,
          message: "failed to update",
          todos: [],
        };
      }
      todos.splice(currentToDo, 1);
      return {
        todos,
        success: true,
        message: "deleted",
      };
    },
  },
};
