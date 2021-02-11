
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
    Login(email: String!, password: String!): AuthPayload
    Signup(
      name: String!, 
      email: String!, 
      password: String!)
      : AuthPayload,
    CreateItem(
      title: String!,
      content: String!,
      userId: ID!
    ): Item
    DeleteItem(itemId: ID!): Item
    UpdateItem(itemId: ID!): Item
  }
  type AuthPayload {
    error: String
    token: String
    user: User
  }
  type User {
    id: ID
    name: String
    email: String
    password: String
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
