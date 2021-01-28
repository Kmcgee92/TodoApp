import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    User: () => ([{
      id: 1,
      name: "kasey",
      email: "todo@apple",
      password: "password",
    }]),
    Items: () => items,
    Users() {
      const allUsers = prisma.user.findMany({ 
        include: { 
          items: true,
        },
      });

      console.dir(allUsers, { depth: null });
      return allUsers
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const User = {
        id: "db-1",
        name: args.name,
        email: args.email,
        password: args.password
      }
      return User
    }
  }
};
