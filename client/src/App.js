
import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Apollo GQL
import { useQuery } from "@apollo/react-hooks";
import {GET_USER_ITEMS} from "./graphql/queries/GetUserItems"

// redux
// import { useSelector, useDispatch } from "react-redux";
// core 
import TodoInterface from "./Components/TodoInterface/TodoInterface"




const App = () => {
  // const { data, loading, error } = useQuery(GET_ACTIVE_USER);
  // if (error) return <h1>Database isn't connected properly</h1>;
  // if (loading) return <h1>Loading...</h1>;
  // console.log(data);;


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TodoInterface/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};;

export default App;




/* <Route exact path="/manageProfiles">
<ProfileManager />
</Route>

<Route exact path="/browse">
<Browse />
</Route>

<Route exact path="/history">
<History />
</Route>

<Route exact path="/watchlist">
<Watchlist />
</Route>

<Route exact path="/login">
<Signin />
</Route>

<Route exact path="/signup">
<Signup />
</Route>

<Route component={NotFound}>
<NotFound />
</Route> */
