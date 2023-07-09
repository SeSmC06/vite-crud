import express from "express";
import { type Handler } from "vite-plugin-mix";
import { resolvers } from "./resolvers";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";

const app = express();

const apolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

await apolloServer.start();

apolloServer.applyMiddleware({ app });

export const handler: Handler = app;
