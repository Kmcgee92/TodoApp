import React, { useState, useEffect } from "react";
// redux
import { useSelector } from "react-redux";

// core components
import Header from './Header/Header'
import Signup from "../Auth/Signup";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import TodoDetails from "./TodoDetails/TodoDetails";
import NoTasks from "./TodoDetails/NoTasks"
import TodoList from "./TodoList/TodoList";
import Greeter from "./Greeter/Greeter";
import SaveStatus from "./SaveStatus/SaveStatus";
//mui components
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";

export function TodoInterface({ classes }) {
  const activeUser = useSelector((state) => state.auth.activeUser);
  const todoList = useSelector((state) => state.todos);
  const activeTodo = useSelector((state) => state.active);
  const [dataLoading, setDataLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeData, setActiveData] = useState({});
  const [saving, setSaving] = useState(true);

  useEffect(() => {
    if (activeTodo) {
      const [filtered] = todoList.filter((object) => {
        return Number(object.id) === activeTodo;
      });
      setActiveData(filtered);
    }
  }, [todoList, activeTodo]);

  return (
    <div data-test="Root" className={classes.root}>
      <Header
        data-test="Header"
        classes={classes}
        setDataLoading={setDataLoading}
        setModalOpen={setModalOpen}
      />
      <Drawer
        data-test="Drawer"
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <TodoList
          activeUser={activeUser}
          dataLoading={dataLoading}
          todoList={todoList}
          classes={classes}
        />
      </Drawer>
      <main className={classes.wrapper}>
        <Greeter
          activeUser={activeUser}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          classes={classes}
        />
        <SaveStatus
                      activeUser={activeUser}
                      activeTodo={activeTodo}
                      classes={classes}
                      saving={saving}
        />
        {(modalOpen || false) && (
          <Signup classes={classes} setModalOpen={setModalOpen} />
        )}
        {activeTodo && (
          <TodoDetails
            activeData={activeData}
            classes={classes}
            saving={saving}
            setSaving={setSaving}
          />
        )}
        {activeUser.items && !todoList.length && !dataLoading && (
          <NoTasks classes={classes} />
        )}
        {dataLoading && Object.keys(activeUser).length !== 0 && (
          <LoadingSpinner classes={classes} />
        )}
      </main>
    </div>
  );
}


export default TodoInterface;