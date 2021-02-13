import React, { useState, useEffect } from "react";
// redux
import { useSelector } from "react-redux";

// core components
import Header from './Header/Header'
import Todo from './Todo/Todo'
import TodoDetails from "./TodoDetails/TodoDetails";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import Signup from "../Auth/Signup";
//mui components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
// MUI styles
import {TodoStyles} from './TodoStyles.js'

const useStyles = makeStyles((theme) => (TodoStyles(theme, "150px")));

  // const data = [
  //   {
  //     id: 1,
  //     title: "Personal Bills",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa sapien. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Semper risus in hendrerit gravida rutrum quisque non. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Turpis massa sed elementum tempus egestas sed sed risus. Nisl condimentum id venenatis a. Gravida rutrum quisque non tellus orci ac auctor. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Laoreet non curabitur gravida arcu ac tortor dignissim. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Lacus vel facilisis volutpat est velit egestas. Pharetra sit amet aliquam id. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Tortor condimentum lacinia quis vel. Turpis massa sed elementum tempus egestas sed sed risus.",
  //     status: true,
  //     userId: 1,
  //   },
  //   {
  //     id: 2,
  //     title: "Business Stuff",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa sapien. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Semper risus in hendrerit gravida rutrum quisque non. Gravida rutrum quisque non tellus orci ac auctor. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Laoreet non curabitur gravida arcu ac tortor dignissim. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Lacus vel facilisis volutpat est velit egestas. Pharetra sit amet aliquam id. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Tortor condimentum lacinia quis vel. Turpis massa sed elementum tempus egestas sed sed risus.",
  //     status: false,
  //     userId: 1,
  //   },
  //   {
  //     id: 3,
  //     title: "This is a really long todo title just for testing",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa sapien. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Lacus vel facilisis volutpat est velit egestas. Pharetra sit amet aliquam id. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Tortor condimentum lacinia quis vel. Turpis massa sed elementum tempus egestas sed sed risus.",
  //     status: true,
  //     userId: 1,
  //   },
  //   {
  //     id: 4,
  //     title: "TITLE",
  //     content: "line 1",
  //     status: false,
  //     userId: 1,
  //   },
  //   ];
export default function TodoInterface() {
  const activeUser = useSelector((state) => state.auth.activeUser);
  const classes = useStyles();
  const [dataLoading, setDataLoading] = useState(false);
  const [active, setActive] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {}, [activeUser, modalOpen]);

  return (
    <div className={classes.root}>
      <Header
        classes={classes}
        setDataLoading={setDataLoading}
        setModalOpen={setModalOpen}
        setActive={setActive}
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
              activeUser.items.map((data, index) => {
                return (
                  <Todo
                    key={index}
                    active={active}
                    setActive={setActive}
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
        {active && (
          <TodoDetails
            data={activeUser.items}
            active={active}
            classes={classes}
          />
        )}
        {dataLoading && Object.keys(activeUser).length !== 0 && (
          <LoadingSpinner classes={classes} />
        )}
        {/* {true && <LoadingSpinner classes={classes}        />} */}
      </main>
    </div>
  );
}
