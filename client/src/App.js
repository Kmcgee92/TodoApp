
import React, { useEffect } from "react";
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
//mui components
import { makeStyles } from "@material-ui/core/styles";
// styles
import { TodoStyles } from "./MUIStyles";

const App = () => {
  const interactiveDrawer = "80px";
  const useStyles = makeStyles((styles) =>
    TodoStyles(styles, "180px", interactiveDrawer)
  );
  const classes = useStyles();

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
  }, [getActiveUser, auth.activeUser]);

  useEffect(() => {
    if (data) {
      if (!data.error) {
        dispatch(refreshSession(data));
      }
    }
  }, [dispatch, data, loading, error]);

  useEffect(() => {
    if (Object.keys(auth.activeUser).length) {
      dispatch(refreshList(auth.activeUser.items));
    }
  }, [dispatch, auth, data]);

  if (error) {
    return <h1>Database isn't connected properly or there is an error.</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  
  return <TodoInterface classes={classes} />;
};

export default App;
