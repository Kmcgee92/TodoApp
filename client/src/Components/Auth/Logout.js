import React from "react";
// redux
import {useDispatch} from "react-redux"
import {logoutHandler} from "../../redux/actions/authActions"


//mui components
import Button from "@material-ui/core/Button";

const Logout = ({ classes, setActive }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    setActive(null)
    dispatch(logoutHandler())
  }
  return (
    <div>
      <Button
        onClick={() => handleLogout()}
        className={classes.icon}
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
