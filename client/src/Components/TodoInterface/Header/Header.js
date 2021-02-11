import React, { useState, useEffect } from "react";
//redux
import { useSelector } from "react-redux"

// core components
import Login from '../../Auth/Login'
import Logout from '../../Auth/Logout'
//mui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
//mui icons
import DeleteIcon from "@material-ui/icons/Delete";
import NoteAddIcon from "@material-ui/icons/NoteAdd";


const Header = ({ classes, setDataLoading }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.header}>
          <div style={{ display: "flex" }}>
            <Typography className={classes.appName} noWrap>
              Todo List App
            </Typography>
            <NoteAddIcon className={classes.icon} />
            <Divider
              flexItem={true}
              orientation="vertical"
              variant="middle"
              className={classes.divider}
            />
            <DeleteIcon className={classes.icon} />
          </div>
          <div className={classes.signinForm}>
            {Object.keys(auth.activeUser).length === 0 ? (
              <Login classes={classes} setDataLoading={setDataLoading} />
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
