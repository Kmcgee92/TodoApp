import { makeExecutableSchema } from "graphql-tools";

import { resolvers } from "./resolvers.js";

const typeDefs = `
  type Query {
    User: User
    Items: [Item]
  }
  type User {
    id: ID
    name: String
  }
  type Item {
    id: ID
    title: String
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
