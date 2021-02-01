import React, { useState } from "react";

// core components
import Header from './Header/Header'
import Todo from './Todo/Todo'
import TodoDetails from './TodoDetails/TodoDetails'

//mui components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";

// MUI styles
import {TodoStyles} from './TodoStyles.js'
const useStyles = makeStyles((theme) => (TodoStyles(theme, "150px")));


  const _TODOS = [
    {
      id: 1,
      title: "Personal Bills",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa sapien. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Semper risus in hendrerit gravida rutrum quisque non. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Turpis massa sed elementum tempus egestas sed sed risus. Nisl condimentum id venenatis a. Gravida rutrum quisque non tellus orci ac auctor. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Laoreet non curabitur gravida arcu ac tortor dignissim. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Lacus vel facilisis volutpat est velit egestas. Pharetra sit amet aliquam id. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Tortor condimentum lacinia quis vel. Turpis massa sed elementum tempus egestas sed sed risus.",
      status: true,
      userId: 1,
    },
    {
      id: 2,
      title: "Business Stuff",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa sapien. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Semper risus in hendrerit gravida rutrum quisque non. Gravida rutrum quisque non tellus orci ac auctor. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Laoreet non curabitur gravida arcu ac tortor dignissim. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Lacus vel facilisis volutpat est velit egestas. Pharetra sit amet aliquam id. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Tortor condimentum lacinia quis vel. Turpis massa sed elementum tempus egestas sed sed risus.",
      status: false,
      userId: 1,
    },
    {
      id: 3,
      title: "This is a really long todo title just for testing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa sapien. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Lacus vel facilisis volutpat est velit egestas. Pharetra sit amet aliquam id. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Tortor condimentum lacinia quis vel. Turpis massa sed elementum tempus egestas sed sed risus.",
      status: true,
      userId: 1,
    },
    {
      id: 4,
      title: "TITLE",
      content: "line 1",
      status: false,
      userId: 1,
    },
  ];

export default function TodoInterface() {
  const classes = useStyles();
  const [active, setActive] = useState(null)

  return (
    <div className={classes.root}>
      <Header
        classes={classes}
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
            {_TODOS.map((data, index) => {
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
        { active && 
        <TodoDetails
        data={_TODOS}
        active={active}
        classes={classes}
        />
        }
      </main>
    </div>
  );
}
