import gql from "graphql-tag";

export const GET_ACTIVE_USER = gql`
  query($token: String!) {
    GetActiveUser(token: $token) {
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
          completed
        }
      }
    }
  }
`;
