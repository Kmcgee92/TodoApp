import React from "react";
// core components
import Todo from "./Todo/Todo";
//mui components
import List from "@material-ui/core/List";
const TodoList = ({ activeUser, dataLoading, todoList, classes }) => {
  return (
    <div className={classes.drawerContainer}>
      <List>
        {activeUser.items &&
          !dataLoading &&
          todoList.map((data, index) => {
            return <Todo key={index} data={data} classes={classes} />;
          })}
      </List>
    </div>
  );
};

export default TodoList;
