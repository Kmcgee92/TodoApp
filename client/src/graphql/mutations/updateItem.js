import gql from "graphql-tag";

export const UPDATE_ITEM = gql`
  mutation(
    $itemId: ID!
    $title: String
    $content: String
    $completed: Boolean
  ) {
    UpdateItem(
      itemId: $itemId
      title: $title
      content: $content
      completed: $completed
    ) {
      id
      title
      content
      userId
      completed
    }
  }
`;
