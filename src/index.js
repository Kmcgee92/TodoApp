const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    Hello: String
    Item(id: Int!): Item
    Items: [Item]
  }
  type Item {
    id: Int
    title: String
    content: String
  }
`);

let posts = [
  {
    id: 1,
    title: "first",
    content: "first",
  },
  {
    id: 2,
    title: "second",
    content: "second",
  },
  {
    id: 3,
    title: "third",
    content: "third",
  },
];

const resolver = {
  Hello: () => "Hello world!",
  Item: (args) => {
    return posts.find((post) => post.id === args.id);
  },
  Items: () => posts,
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true,
  })
);
app.listen(3000, () =>
  console.log("graphql server is live on localhost:3000/graphql")
);
