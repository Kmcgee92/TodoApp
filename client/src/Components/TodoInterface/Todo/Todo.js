import React, { useState, useEffect } from "react";
// redux
import { useSelector } from "react-redux";
//mui components
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// mui icons
import AssignmentIcon from "@material-ui/icons/Assignment";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

// nodejs library that concatenates classes
import classNames from "classnames";

const Todo = ({ classes, data, active, setActive }) => {
  console.log(data);
  const [abvTitle, setAbvTitle] = useState(null);
  useEffect(() => {
    if (data.title.length > 9) {
      setAbvTitle(`${data.title.slice(0, 9)}...`);
    } else {
      setAbvTitle(data.title);
    }
  }, [data]);

  const handleActive = () => {
    setActive(data.id);
  };

  const todoStyles = classNames({
    [classes.active]: active === data.id,
    [classes.drawerItem]: true,
  });
  return (
    <div onClick={() => handleActive()}>
      <ListItem id={data.id} className={todoStyles} button key={abvTitle}>
        {data.status ? (
          <>
            <CheckCircleOutlineIcon
              style={{ marginRight: "5px", color: "green" }}
            />
            <ListItemText className={classes.crossout} primary={abvTitle} />
          </>
        ) : (
          <>
            <AssignmentIcon style={{ marginRight: "5px" }} />
            <ListItemText primary={abvTitle} />
          </>
        )}
      </ListItem>
    </div>
  );
};

export default Todo;
