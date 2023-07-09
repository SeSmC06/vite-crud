import { gql } from "apollo-server-express";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql`
  #graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type ToDo {
    id: String
    message: String
    isDone: Boolean
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    todos: [ToDo]
  }

  type Mutation {
    createToDo(message: String!, isDone: Boolean!): CreateToDoResopnse
    updateToDo(
      id: String!
      isDone: Boolean!
      message: String!
    ): UpdateToDoResponse
    deleteToDo(id: String!): DeleteToDoResponse
  }

  type CreateToDoResopnse {
    success: Boolean!
    message: String
    todos: [ToDo]
  }

  type UpdateToDoResponse {
    success: Boolean!
    message: String
    todos: [ToDo]
  }

  type DeleteToDoResponse {
    success: Boolean!
    message: String
    todos: [ToDo]
  }
`;
