var items = [
  {
    id: "0",
    title: "www.howtographql.com",
    content: "Fullstack tutorial for GraphQL",
  },
  {
    id: "1",
    title: "title",
    content: "content",
  },
];

export const resolvers = {
  Query: {
    User: () => ({
      id: 1,
      name: "kasey",
    }),
    Items: () => items,
  },
};
