import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    User: () => ({
      id: 1,
      name: "kasey",
      email: "todo@apple",
      password: "password",
    }),
    Items: () => items,
    Users() {
      return prisma.users();;
    },
  },
};
