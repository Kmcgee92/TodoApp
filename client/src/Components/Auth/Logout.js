import React from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import {logoutHandler} from "../../redux/actions/authActions"
import {setActive} from "../../redux/actions/activeActions"
import { clearTodos } from "../../redux/actions/userTodoActions";


//mui components
import Button from "@material-ui/core/Button";

const Logout = ({ classes }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {

    dispatch(setActive(""))
    dispatch(clearTodos());
    dispatch(logoutHandler());
  };
  return (
    <div>
      <Button onClick={() => handleLogout()} className={classes.icon}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
