
import React from "react";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_USERS = gql`
  query {
    UserItems(userId: 1) {
      id
      title
      content
      userId
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>React is being served</h1>
      <div>Data below was fetched</div>
      <div>
        !!!---({data.UserItems ? data.UserItems[0].title : "fetch failed"}
        )---!!!
      </div>
    </div>
  );
};


export default App;
