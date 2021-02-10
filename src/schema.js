
import { makeExecutableSchema } from "graphql-tools";

import { resolvers } from "./resolvers.js";

//  by querying the user you also query their items!
//! need to remove Query and update schema in node_modules schema file
// UserItems(userId: ID!): [Item]

const typeDefs = `
  type Query {
    Users: [User!]!
    User(email: String!, password: String!): User
    UserItems(userId: ID!): [Item]
  }
  
  type Mutation {
    login(email: String!, password: String!): AuthPayload
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
  type AuthPayload {
    token: String
    user: User
  }
  type User {
    id: ID
    name: String
    email: String
    password: String
    jwt: String
    items: [Item!]
  }
  type Item {
    id: ID!
    title: String
    content: String
    userId: ID!
    completed: Boolean
  }

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
