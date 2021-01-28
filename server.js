import express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";

import { schema } from "./src/schema.js";

const __dirname = path.resolve();
dotenv.config();

const app = express();

//middleware
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
  })
);

app.use(
  "/graphiql",
  bodyParser.json(),
  graphiqlExpress({
    endpointURL: "/graphql",
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.get("/", (_req, res) => {
  res.json("hello");
});
//routes
app.get(/\/(?!api)*/, (req, res) => {
  // res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
});


app.listen(process.env.PORT, () =>
  console.log(`GraphQL Server is now running on port: ${process.env.PORT}`)
);