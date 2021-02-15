
import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
// redux
import { useDispatch, useSelector } from "react-redux";
import { refreshSession } from "./redux/actions/authActions";
import { refreshList } from "./redux/actions/userTodoActions";
// apollo
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_ACTIVE_USER } from "./graphql/queries/getActiveUser";
// core components
import TodoInterface from "./Components/TodoInterface/TodoInterface"
// styles
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./AppTheme";


const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [getActiveUser, { data, loading, error }] = useLazyQuery(
    GET_ACTIVE_USER
  );
  // OnMount will check to see if session needs to be refreshed
  useEffect(() => {
    const activeToken = Cookies.get("token");
    if (activeToken) {
      if (!Object.keys(auth.activeUser).length) {
        getActiveUser({
          variables: {
            token: activeToken,
          },
          fetchPolicy: "network-only",
        });
      }
    }
  }, [auth.activeUser]);

  useEffect(() => {
    if (data) {
      if  (!data.error)  {
        dispatch(refreshSession(data));
      }
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (Object.keys(auth.activeUser).length) {

      dispatch(refreshList(auth.activeUser.items));
    }
  }, [auth, data]);

  if (error) {
    return <h1>Database isn't connected properly or there is an error.</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <TodoInterface />
            </Route>
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
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
