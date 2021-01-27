import express from "express";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import { schema } from "./src/schema.js";
import console from "console";

const app = express();

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
  })
);

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
  })
);

app.get("/", (req, res) => {
  res.json("hello Kasey");
});

const port = process.env.PORT;
app.listen(port, () =>
  console.log(`GraphQL Server is now running on http://localhost:${port}`)
);
