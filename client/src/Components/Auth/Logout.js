import React from "react";
// redux
import {useDispatch} from "react-redux"
import {logoutHandler} from "../../redux/actions/authActions"


//mui components
import Button from "@material-ui/core/Button";

const Logout = ({ classes }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        onClick={() => dispatch(logoutHandler())}
        className={classes.icon}
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
