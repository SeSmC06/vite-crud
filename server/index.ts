// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";
// import express from "express";
// import http from "http";
// import { typeDefs } from "./schema";
// import { resolvers } from "./resolvers";

// // Required logic for integrating with Express
// const app = express();
// // Our httpServer handles incoming requests to our Express app.
// // Below, we tell Apollo Server to "drain" this httpServer,
// // enabling our servers to shut down gracefully.
// const httpServer = http.createServer(app);

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// await server.start();

import express from "express";
import { type Handler } from "vite-plugin-mix";
import { books } from "./resolvers";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// Notice how SECRET, from `.env` is loaded like this.
// console.log(`Secret: ${env.SECRET}, hostname: ${env.HOSTNAME}`)

const app = express();

app.get("/api/todos", async (req, res) => {
  return res.json(books);
  // const { id } = req.query;

  // if (id) {
  //   const ftch = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/" + id
  //   );
  //   const json = (await ftch.json()) as Todo;
  //   return res.json([json]);
  // } else {
  //   const ftch = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const json = (await ftch.json()) as Todo[];
  //   return res.json(json);
  // }
});

// // Only serve index.html in production.
// // In development, a dev server is provided by vite and only the backend API
// // from this script is used.
// if (env.NODE_ENV?.match(/prod/i)) {
//   app.listen(env.PORT)
//   console.log(`listening at *:${env.PORT}`)
// }

export const handler: Handler = app;
