import React, { useState, useEffect } from "react";

//mui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { MuiThemeProvider } from "@material-ui/core/styles";
//mui icons
import DeleteIcon from "@material-ui/icons/Delete";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
// custom theme trial
import {theme} from "./headerTheme"

const Header = ({ classes }) => {
  const [user] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [attemptLogin, setAttemptLogin] = useState(false)

  useEffect(()=> {
    if(attemptLogin) {
      if (!emailError && !passwordError) {
        // perform redux thunk action and communicate with gql with apollo
        // store state in redux
        console.log(email, password);
        // send email and password to the backend and fetch a user

        // set login back to false
        setAttemptLogin(false)
      }
    }
  },[attemptLogin, emailError, passwordError, email, password])
  
  const handleLogin = () => {
    setAttemptLogin(false)
    !email ? setEmailError(true): setEmailError(false)
    !password ? setPasswordError(true): setPasswordError(false)
    if (!email || !password) return;

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    if (!regex.test(email)) {
      setEmailError(true)
    }
    setAttemptLogin(true)
    return
  }
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
            {Object.keys(user).length === 0 ? (
              <>
                <form>
                  <FormControl>
                    <MuiThemeProvider theme={theme}>
                      <Input
                        color="primary"
                        value={email}
                        className={classes.authInputs}
                        placeholder="email"
                        autoComplete="email"
                        autoFocus={true}
                        error={emailError}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError &&
                        <FormHelperText style={{color: "red"}}>must be a valid email</FormHelperText>}
                    </MuiThemeProvider>
                  </FormControl>
                  <FormControl>
                    <Input
                      color="primary"
                      value={password}
                      className={classes.authInputs}
                      placeholder="password"
                      autoComplete="current-password"
                      error={passwordError}
                      onChange={(e) => setPassword(e.target.value)}
                      />
                      {passwordError &&
                      <FormHelperText style={{color: "red"}}>invalid password</FormHelperText>}
                  </FormControl>
                  <Button 
                  onClick={handleLogin} 
                  className={classes.icon}
                  >
                    Login
                  </Button>
                </form>
              </>
            ) : (
              <Button className={classes.icon}>Logout</Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
