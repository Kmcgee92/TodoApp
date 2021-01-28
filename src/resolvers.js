import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export const resolvers = {
  //! QUERY
  Query: {
    User: async (_parent, args) => {
      return await prisma.user.find((user) => {
        if (user.email === args.email) {
          return user;
        } else return [];
      });
    },
    Users: async () => {
      const allUsers = await prisma.user.findMany({
        include: {
          items: true,
        },
      });
      console.dir(allUsers, { depth: null });
      return allUsers;
    },
    UserItems: (_parent, args) => {
      const userItems = prisma.item.findMany({
        where: {
          userId: Number(args.userId),
        },
      });
      return userItems;
    },
  },

  //! MUTATIONS
  Mutation: {
    createUser: async (_parent, args) => {
      const newUser = await prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          password: args.password,
        },
      });
      return newUser;
    },
    createItem: async (_parent, args) => {

      const newItem = await prisma.item.create({
        data: {
          title: args.title,
          content: args.content,
          userId: Number(args.userId)
        }
      })
      return newItem
    },
  },
};
