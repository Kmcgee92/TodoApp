import React from "react";

//mui components
import Button from "@material-ui/core/Button";

const Logout = ({ classes }) => {
  return (
    <div>
      <Button className={classes.icon}>Logout</Button>
    </div>
  );
};

export default Logout;
