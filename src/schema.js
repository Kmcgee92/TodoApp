
import { gql } from "apollo-server";

import { makeExecutableSchema } from "graphql-tools";

import { resolvers } from "./resolvers.js";

const typeDefs = gql`
  type Query {
    Users: [User]
    User(email: String!): User!
    Items: [Item]
  }
  type User {
    id: ID
    name: String
    email: String
    password: String
  }
  type Item {
    id: ID
    title: String
  }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
