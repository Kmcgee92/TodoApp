import pkg from "@prisma/client";
const { PrismaClient } = pkg;

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const resolvers = {
  //! QUERY
  Query: {
    User: async (_parent, args, context, info) => {
      const existingUser = await prisma.user.findUnique({
        where: {
          email: args.email,
        },
        include: {
          items: true,
        },
      });
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
    GetActiveUser: async (_parent, args, _context, _info) => {
      // extract user from token
      const decoded = jwt.verify(args.token, process.env.APP_SECRET);
      var userId = decoded.userId;
      const activeUser = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        include: {
          items: true,
        },
      });
      return {
        token: args.token,
        user: activeUser,
      };
    },
  },
  //! MUTATIONS
  Mutation: {
    // user Auth
    Login: async (_parents, args, _context, _info) => {
      try {
        const existingUser = await prisma.user.findUnique({
          where: {
            email: args.email,
          },
          include: {
            items: true,
          },
        });
        const { password } = existingUser;

        // check hashed password to password in args
        if (!(await bcrypt.compare(args.password, password))) {
          return { error: "Invalid Credentials" };
        }

        // create jwt token
        const token = jwt.sign(
          { userId: existingUser.id },
          process.env.APP_SECRET
        );
        // return responses accordingly
        return { token, user: existingUser };
      } catch (e) {
        return {
          error:
            "There was an issue finding that email or an invalid password. Please try again.",
        };
      }
    },
    Signup: async (_parent, args, _context, _info) => {
      if (!args.password) {
        return { error: "all credentials are required" };
      }
      const hashedPass = await bcrypt.hash(args.password, 10);
      const alreadyUser = await prisma.user.findUnique({
        where: {
          email: args.email,
        },
      });
      try {
        if (alreadyUser) {
          return { error: "there is already an account with that email." };
        }
        const user = await prisma.user.create({
          data: {
            name: args.name,
            email: args.email,
            password: hashedPass,
          },
        });
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

        return {
          token,
          user,
        };
      } catch (e) {
        return { error: "Error creating Account." };
      }
    },
    CreateItem: async (_parent, args) => {
      console.log(args);
      const newItem = await prisma.item.create({
        data: {
          title: args.title,
          content: args.content,
          userId: Number(args.userId),
          completed: false,
        },
      });
      return newItem;
    },
    DeleteItem: async (_parent, args) => {
      try {
        const deletedItem = await prisma.item.delete({
          where: {
            id: Number(args.itemId),
          },
        });
        return deletedItem;
      } catch (e) {
        return {error: "something went wrong on the server!"};
      }
    },
    UpdateItem: async (_parent, args) => {
      console.log(args)
      try {
        // find the item delete it and resave it
        const currentItem = await prisma.item.delete({
          where: {
            id: Number(args.itemId) 
          }
        })
        const {
          id,
          title,
          content,
          userId,
          completed
        } = currentItem

        const newItem = await prisma.item.create({
          data: {
            id,
            userId,
            title: args.title || "",
            content: args.content || "",
            completed: args.completed || false
          }
        })
        return newItem
      } catch (e) {
        return {error: "Please refresh your browser. There was an error with the server"};
      }
    },
  },
};
