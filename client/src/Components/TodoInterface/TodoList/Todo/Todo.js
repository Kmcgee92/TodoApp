import React, { useState, useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../../../redux/actions/activeActions";
//mui components
import ListItem from "@material-ui/core/ListItem";
// mui icons
import AssignmentIcon from "@material-ui/icons/Assignment";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

// nodejs library that concatenates classes
import classNames from "classnames";

const Todo = ({ classes, data }) => {
  const dispatch = useDispatch();
  const activeTodo = useSelector((state) => state.active);
  const [abvTitle, setAbvTitle] = useState(null);
  useEffect(() => {
    if (data.title.length > 9) {
      setAbvTitle(`${data.title.slice(0, 9)}...`);
    } else {
      if (data.title === " ") {
        setAbvTitle("ADD TITLE");
      } else {
        setAbvTitle(data.title);
      }
    }
  }, [data]);
  useEffect(() => {}, [activeTodo]);
  const handleActive = () => {
    dispatch(setActive(data.id));
  };

  const todoStyles = classNames({
    [classes.active]: activeTodo === Number(data.id),
    [classes.drawerItem]: true,
  });
  return (
    <div onClick={() => handleActive()}>
      <ListItem id={data.id} className={todoStyles} button key={abvTitle}>
        {data.completed ? (
          <>
            <CheckCircleOutlineIcon className={classes.circleOutlineIcon} />
            <div className={classes.crossout}>{abvTitle}</div>
          </>
        ) : (
          <>
            <AssignmentIcon className={classes.assignmentIcon} />
            <div className={classes.itemText}>{abvTitle}</div>
          </>
        )}
      </ListItem>
    </div>
  );
};

export default Todo;
