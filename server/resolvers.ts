// Resolvers define the technique for fetching the types defined in the

import { books } from "../lib/fake";

// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    books: () => books,
  },
};
