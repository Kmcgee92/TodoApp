
import React from "react";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_USERS = gql`
  {
    User {
      id
      name
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  console.log(data);
  return <div>REACT SIDE</div>;
};


export default App;
