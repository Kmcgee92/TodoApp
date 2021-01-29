
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Apollo GQL
import { useQuery } from "@apollo/react-hooks";
import {GET_USER_ITEMS} from "./graphql/queries/GetUserItems"

// redux
import { useSelector, useDispatch } from "react-redux";
// core 
import LandingPage from './Components/LandingPage/LandingPage'




const App = () => {
  const { loading, error, data } = useQuery(GET_USER_ITEMS);

  if (error) return <h1>Database isn't connected properly</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <div>
        Header Component: links will alter based off what route you are on
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          {/* <Route exact path="/manageProfiles">
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
          </Route> */}
        </Switch>
        {/* temp */}
      </BrowserRouter>
      <h1>React is being served</h1>
      <div></div>
      <div>
        !!!---(
        
        
        {data.UserItems ? data.UserItems[0].title : "Database did not connect"}
        )---!!!
      </div>
    </div>
  );
};


export default App;
