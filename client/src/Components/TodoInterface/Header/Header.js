import React, { useState, useEffect } from "react";
//redux
import { useSelector } from "react-redux"

// core components
import Login from '../../Auth/Login'
import Logout from '../../Auth/Logout'
import Add from "../Todo/Add";
import Delete from "../Todo/Delete";
//mui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
//mui icons
import DeleteIcon from "@material-ui/icons/Delete";
import NoteAddIcon from "@material-ui/icons/NoteAdd";


const Header = ({ classes, setDataLoading, setModalOpen }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.header}>
          <div style={{ display: "flex" }}>
            <Typography className={classes.appName} noWrap>
              Todo List App
            </Typography>
            { auth.token && 
            <>
              <Add classes={classes}  />
              <Divider
                flexItem={true}
                orientation="vertical"
                variant="middle"
                className={classes.divider}
              />
              <Delete classes={classes}  />
            </>
            }
          </div>
          <div className={classes.signinForm}>
            {Object.keys(auth.activeUser).length === 0 ? (
              <Login
                classes={classes}
                setDataLoading={setDataLoading}
                setModalOpen={setModalOpen}
              />
            ) : (
              <Logout classes={classes} />
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
