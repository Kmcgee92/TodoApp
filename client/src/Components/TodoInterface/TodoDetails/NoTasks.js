import React from "react";
import BeenhereIcon from "@material-ui/icons/Beenhere";

const NoTasks = ({ classes }) => {
  return (
    <div className={classes.noTasks}>
      <BeenhereIcon color="secondary" />
      <div>Looks like you dont have any tasks to do!</div>
    </div>
  );
};

export default NoTasks;
