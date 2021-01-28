
import { makeExecutableSchema } from "graphql-tools";

import { resolvers } from "./resolvers.js";

const typeDefs = `
  type Query {
    Users: [User!]!
    User(email: String!): User!
    UserItems(userId: ID!): [Item]
  }

  type Mutation {
    createUser(
      name: String!, 
      email: String!, 
      password: String!)
      : User,
    createItem(
      title: String!,
      content: String!,
      userId: ID!
    ): Item
    deleteItem(itemId: ID!): Item
    updateItem(itemId: ID!): Item
  }
  type User {
    id: ID!
    name: String
    email: String!
    password: String!
    items: [Item!]!
  }
  type Item {
    id: ID!
    title: String
    content: String
    userId: ID!
  }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
