
import { GraphQLServer } from "graphql-yoga";
// import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";

import { schema } from "./src/schema.js";


const __dirname = path.resolve();
dotenv.config();
const server = new GraphQLServer({
  schema,
});

//routes
// server.get(/\/(?!api)*/, (req, res) => {
//   // res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
// });
const options = {
  port: process.env.PORT,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  // playground: "/playground",
  playground: "/graphql",
};

server.start(options, ({ port }) =>
  console.log(`GraphQL server is running on localhost:${port}`)
);
