
import { GraphQLServer } from "graphql-yoga";
import express from "express";
// import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";

import { schema } from "./src/schema.js";


const __dirname = path.resolve();
dotenv.config();
const server = new GraphQLServer({
  schema,
});
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "development") {
  server.use(express.static(path.join(__dirname, "build")));
  
  server.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
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
