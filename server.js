
import { GraphQLServer } from "graphql-yoga";
import express from "express";
// import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

import { schema } from "./src/schema.js";
import main from "./prisma/seed.js";


const __dirname = path.resolve();
dotenv.config();
const server = new GraphQLServer({
  schema,
});

// need to find a way to seed once deployed
if (process.env.NODE_ENV === "production") {
  // main()
  //   .catch((e) => {
  //     console.error(e);
  //     process.exit(1);
  //   })
  //   .finally(async () => {
  //     await prisma.$disconnect();
  //   });

  server.use(express.static(path.join(__dirname, "client", "build")));

  server.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


const options = {
  port: process.env.PORT || 5000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  // playground: "/playground",
  playground: "/playground",
};

server.start(options, ({ port }) =>
  console.log(`GraphQL server is running on port:${port}`)
);
