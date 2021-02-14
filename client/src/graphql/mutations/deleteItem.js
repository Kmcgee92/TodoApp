import gql from "graphql-tag";

export const DELETE_ITEM = gql`
  mutation($itemId: ID!) {
    DeleteItem(itemId: $itemId) {
      id
      title
      content
      userId
      completed
    }
  }
`;
