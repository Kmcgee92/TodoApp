import React from "react";

//mui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

//mui icons
import DeleteIcon from "@material-ui/icons/Delete";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

const Header = ({ classes }) => {
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
          <Button className={classes.icon}>Logout</Button>
          <Button className={classes.icon}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
