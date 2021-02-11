import gql from "graphql-tag";

export const GET_USER_BY_LOGIN = gql`
  mutation($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      error
      token
      user {
        id
        name
        email
        items {
          id
          title
          content
        }
      }
    }
  }
`;
