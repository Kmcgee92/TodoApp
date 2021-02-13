
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// core components
import TodoInterface from "./Components/TodoInterface/TodoInterface"
// styles
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { orange, red } from "@material-ui/core/colors";
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
  // const { data, loading, error } = useQuery(GET_ACTIVE_USER);
  // if (error) return <h1>Database isn't connected properly</h1>;
  // if (loading) return <h1>Loading...</h1>;
  // console.log(data);;


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
