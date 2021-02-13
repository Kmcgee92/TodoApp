import gql from "graphql-tag";

export const GET_USER_BY_SIGNUP = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    Signup(name: $name, email: $email, password: $password) {
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
