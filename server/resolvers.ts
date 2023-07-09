// Resolvers define the technique for fetching the types defined in the

export const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    books: () => books,
  },
};
