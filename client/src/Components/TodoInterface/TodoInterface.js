import React, { useState, useEffect } from "react";
// redux
import { useSelector } from "react-redux";

// core components
import Header from './Header/Header'
import Signup from "../Auth/Signup";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import Todo from './Todo/Todo'
import TodoDetails from "./TodoDetails/TodoDetails";
import NoTasks from "./TodoDetails/NoTasks"
//mui components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";

// MUI styles
import {TodoStyles} from './TodoStyles.js'

const useStyles = makeStyles((theme) => (TodoStyles(theme, "150px")));

export default function TodoInterface() {
  const activeUser = useSelector((state) => state.auth.activeUser);
  const todoList = useSelector((state)=>state.todos)
  const activeTodo = useSelector(state => state.active)
  console.log(activeTodo)
  const classes = useStyles();
  const [dataLoading, setDataLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeData, setActiveData] = useState({})

  useEffect(() => {
    if(activeTodo) {
      const [filtered] = todoList.filter((object)=> {
        return Number(object.id) === activeTodo
      })
      setActiveData(filtered)
    }
  }, [activeTodo]);


  return (
    <div className={classes.root}>
      <Header
        classes={classes}
        setDataLoading={setDataLoading}
        setModalOpen={setModalOpen}
      />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {activeUser.items &&
              !dataLoading &&
              todoList.map((data, index) => {
                return (
                  <Todo
                    key={index}
                    data={data}
                    classes={classes}
                  />
                );
              })}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {!Object.keys(activeUser).length && !modalOpen ? (
          <div className={classes.signupContent}>
            <span>
              need to create an account?{" "}
              <span
                className={classes.signupToggle}
                onClick={() => setModalOpen(true)}
              >
                Signup
              </span>
            </span>
          </div>
        ) : null}
        {(modalOpen || false) && (
          <Signup classes={classes} setModalOpen={setModalOpen} />
        )}
        {activeTodo && (
          <TodoDetails
            data={activeData}
            classes={classes}
          />
          // <Test data={activeData} classes={classes}/>
        )}
        {activeUser.items && !todoList.length && !dataLoading && <NoTasks classes={classes}/>}
        {dataLoading && Object.keys(activeUser).length !== 0 && (
          <LoadingSpinner classes={classes} />
        )}
      </main>
    </div>
  );
}
