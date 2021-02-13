
import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
// redux
import { useDispatch, useSelector } from "react-redux";
import { refreshSession } from "./redux/actions/authActions";
// apollo
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_ACTIVE_USER } from "./graphql/queries/getActiveUser";
// core components
import TodoInterface from "./Components/TodoInterface/TodoInterface"
// styles
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
// custom input theme trial
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#26a69a",

      text: {
        primary: "#0066ff",
      },
    },
    secondary: {
      main: "#26a69a",
    },
    error: {
      main: red[900],
    },
    warning: {
      main: "#0066ff",
    },
    // success: {
    //   main: "",
    // },
  },
  typography: {
    fontSize: 16,
    color: "red",
  },
});



const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [getActiveUser, { data, loading, error }] = useLazyQuery(
    GET_ACTIVE_USER
  );
  useEffect(() => {
    const activeToken = Cookies.get("token");
    console.log(auth.activeUser);
    if (activeToken) {
      if (!Object.keys(auth.activeUser).length) {
        console.log("query is STILL RUNNING");
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
      dispatch(refreshSession(data));
    }
  }, [data, loading, error]);


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
              <TodoInterface  />
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
