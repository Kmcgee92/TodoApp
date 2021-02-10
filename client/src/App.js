
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Apollo GQL
import { useQuery } from "@apollo/react-hooks";
import {GET_USER_ITEMS} from "./graphql/queries/GetUserItems"

// redux
// import { useSelector, useDispatch } from "react-redux";
// core 
import LandingPageWrapper from "./Components/LandingPageWrapper/LandingPageWrapper";




const App = () => {
  // const { loading, error } = useQuery(GET_USER_ITEMS);
  // const { loading, error, data } = useQuery(GET_USER_ITEMS);
  // if (error) return <h1>Database isn't connected properly</h1>;
  // if (loading) return <h1>Loading...</h1>;
  // console.log(data);;

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPageWrapper />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <div>
        {data.UserItems 
        ? <div>Database Connected!: returned "{data.UserItems[0].content}"</div> 
        : "Database did not connect"
        }
      </div> */}
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
