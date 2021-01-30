import React, { useState, useRef } from "react";

import Header from "./Header/Header";

//mui components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
// mui icons
import AssignmentIcon from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

// nodejs library that concatenates classes
import classNames from "classnames";

const drawerWidth = "150px";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "rgb(40,40,40, 1)",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: "rgb(50,50,50, 1)",
    width: drawerWidth,
    color: "white",
  },
  drawerContainer: {
  },
  drawerItem: {
    overflow: "hidden",
  },
  drawerItemText: {
    textDecoration: "line-through",
    // minWidth: "100px"
  },
  content: {
    color: "white",
    backgroundColor: "rgb(77, 79, 90, 1)",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function TodoInterface() {
  const classes = useStyles();
  const [crossout] = useState(false)

  const _TODOS = [
    {
      id: 1,
      title: "Personal Bills",
      content: "Content of the Todo",
      status: true
    },
    {
      id: 1,
      title: "Business Stuff",
      content: "Content of the Todo",
      status: false
    },
    {
      id: 1,
      title: "Dog Park",
      content: "Content of the Todo",
      status: false
    },
    
  ];
  
  // let intViewportWidth = window.innerWidth;
  // console.log(intViewportWidth);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Todo List App
          </Typography>
        </Toolbar>
      </AppBar>
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
              if (data.title.length > 9) {
                data.title = `${data.title.slice(0, 9)}...`;
              }
              return (
                <ListItem
                  className={classes.drawerItem}
                  button
                  key={data.title}
                >
                  {/* <Divider /> */}
                  {data.status ? (
                    <CheckCircleOutlineIcon
                      style={{ marginRight: "5px", color: "green" }}
                    />
                  ) : (
                    <AssignmentIcon style={{ marginRight: "5px" }} />
                  )}
                  <ListItemText
                    className={crossout && classes.drawerItemText}
                    primary={data.title}
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <header>
          <Typography gutterBottom variant="h6">
            This is the Title of the todo
          </Typography>
          <div style={{ color: "lightgreen", filter: "saturate(4)" }}>
            Complete
          </div>
          {/* <div style={{ color: "darkred", filter: "saturate(10)"}}>Incomplete</div> */}
        </header>
        <Divider style={{ backgroundColor: "grey", marginBottom: "20px" }} />
        <Typography paragraph>
          <span>{"Content of the Todo. "}</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      </main>
    </div>
  );
}
