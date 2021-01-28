
import { makeExecutableSchema } from "graphql-tools";

import { resolvers } from "./resolvers.js";

const typeDefs = `
  type Query {
    Users: [User]
    User(email: String!): User!
    Items: [Item]
  }

  type Mutation {
    createUser(
      name: String!, 
      email: String!, 
      password: String!)
      : User
  }
  type User {
    id: ID
    name: String
    email: String
    password: String
    items: [Item!]!
  }
  type Item {
    id: ID
    title: String
    content: String
  }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
