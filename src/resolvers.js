import pkg from "@prisma/client";
const { PrismaClient } = pkg;
//! WORK ON PASSWORD HASHING / USER AUTH IN THE MORNING!!!
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const prisma = new PrismaClient();

export const resolvers = {
  //! QUERY
  Query: {
    User: async (_parent, args, context, info) => {
      console.log(args);
      // return await prisma.user.findOne((user) => {
      const existingUser = await prisma.user.findUnique({
        where: {
          email: args.email,
        },
        include: {
          items: true,
        },
      });

      console.log(existingUser);
      return { ...existingUser, jwt: true };
    },

    Users: async () => {
      const allUsers = await prisma.user.findMany({
        include: {
          items: true,
        },
      });
      // console.dir(allUsers, { depth: null });
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
    // user Auth
    Login: async (_parents, args, context, info) => {
      console.log(args);
      const existingUser = await prisma.user.findUnique({
        where: {
          email: args.email,
        },
        include: {
          items: true,
        },
      });
      const {password} = existingUser 

      // check hashed password to password in args
      bcrypt.compare(args.password, password);

      // create jwt token 
      const token = jwt.sign({ userId: existingUser.id }, "ENV VARIABLE APP SECRET");
      // return responses accordingly
      return { token, user: existingUser };
    },
    // replace CreateUser with Signup
    Signup: async (_parent, args, context, info) => {
      console.log(args)
      const hashedPass = await bcrypt.hash(args.password, 10)

      const user = await prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          password: hashedPass,
        },
      });
      const token = jwt.sign({ userId: user.id }, "ENV VARIABLE APP SECRET")

        return {
          token,
          user,
        }
      },
    // CreateUser: async (_parent, args) => {
    //   const newUser = await prisma.user.create({
    //     data: {
    //       name: args.name,
    //       email: args.email,
    //       password: args.password,
    //     },
    //   });
    //   return newUser;
    // },
    CreateItem: async (_parent, args) => {
      const newItem = await prisma.item.create({
        data: {
          title: args.title,
          content: args.content,
          userId: Number(args.userId),
        },
      });
      return newItem;
    },
  },
};
