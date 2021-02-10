import gql from "graphql-tag";

export const GET_USER = gql`
  query($email: String!, $password: String!) {
    User(email: $email, password: $password) {
      id
      name
      email
      jwt
      items {
        id
        title
        content
      }
    }
  }
`;

// // TEST
// export const GET_USER = gql`
//   query {
//     Users {
//       id
//       name
//       email
//       password
//     }
//   }
// `;
