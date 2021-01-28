//? prisma init schema.prisma old file
// datasource db {
//   provider = "postgresql"
//   url      = env("DATABASE_URL")
// }

// generator client {
//   provider = "prisma-client-js"
// }

// model User {
//   id        Int      @id @default(autoincrement())
//   email     String   @unique
//   name      String?
//   password  String
//   items     Item[]
// }
// model Item {
//   id        Int      @id @default(autoincrement())
//   title     String
//   content   String
//   user    User?    @relation(fields: [userId], references: [id])
//   userId  Int?
// }

//! tested queries in sandbox
// Write your query or mutation here
// query {
//   Users {
//     id
//     name
//     email
//     password
//     items {
//       title
//       content
//     }
//   }
// }

// mutation {
//   createUser(
//     name: "Dog",
//   	email: "Dog@prisma.io",
//     password: "password"
//   ) {
//     name
//     email
//     password
//   }
// }

// mutation {
//   createItem(
//     title: "Makayla",
//     content: "Tell her she pregnant",
//     userId: 4
//   ){
//     id
//     title
//     content
//     userId
//   }
// }

// query {
//   UserItems(userId: 4) {
//     id
//     title
//     content
//     userId
//   }
// }
