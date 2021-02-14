import gql from "graphql-tag";

export const CREATE_ITEM = gql`
  mutation($userId: ID!, $title: String, $content: String) {
    CreateItem(userId: $userId, title: $title, content: $content) {
      id
      title
      content
      userId
      completed
    }
  }
`;
