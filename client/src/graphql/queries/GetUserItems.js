import gql from "graphql-tag";

export const GET_USER_ITEMS = gql`
  query {
    UserItems(userId: 1) {
      id
      title
      content
      userId
    }
  }
`;
// ! Use useLazyQuery to assign function name and call on user action
// import { gql, useLazyQuery } from "@apollo/client";

// const GET_GREETING = gql`
//   query GetGreeting($language: String!) {
//     greeting(language: $language) {
//       message
//     }
//   }
// `;

// function Hello() {
//   const [loadGreeting, { called, loading, data }] = useLazyQuery(GET_GREETING, {
//     variables: { language: "english" },
//   });
//   if (called && loading) return <p>Loading ...</p>;
//   if (!called) {
//     return <button onClick={() => loadGreeting()}>Load greeting</button>;
//   }
//   return <h1>Hello {data.greeting.message}!</h1>;
// }
