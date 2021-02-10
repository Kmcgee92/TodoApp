import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../../redux/actions/authActions";
// apollo
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { GET_USER } from "../../graphql/queries/GetUser";


// mui components

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { MuiThemeProvider } from "@material-ui/core/styles";
// custom theme trial
import {theme} from "../TodoInterface/Header/headerTheme"

const Login = ({classes}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("demo@bcf.com");
  const [password, setPassword] = useState("password");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [noUserFound, setNoUserFound] = useState(false);
  const [triggerRedux, setTriggerRedux] = useState(false);

  let [getUserByLogin, { error, loading, data }] = useLazyQuery(GET_USER);

useEffect(() => {
  if (!error && data && !loading) {
    if(!data.User) {
      setNoUserFound(true)
      return
    }
    dispatch(loginHandler(data));
  }
}, [error, data, loading]);

  // error handling for login and perform DB Query which should be done in redux thunk
  const handleLogin = () => {
    setNoUserFound(false)
    setEmailError(false)
    setPasswordError(false)
    let emailCurrentError = false
    let passwordCurrentError = false

    if(!email) {
      emailCurrentError = true
      setEmailError(true)
    }
    
    if(!password) {
      passwordCurrentError = true
      setPasswordError(true)
    }

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(email)) {
      emailCurrentError = true
      setEmailError(true);
    }

    if(!emailCurrentError && !passwordCurrentError) {
      getUserByLogin({
        fetchPolicy: "network-only",
        variables: {
          email: email,
          password: password
        },
      });
    }
  };

  return (
    <div className={classes.signinForm}>
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
                      {emailError && (
                        <FormHelperText style={{ color: "red" }}>
                          must be a valid email
                        </FormHelperText>
                      )}
                      {noUserFound && (
                        <FormHelperText style={{ color: "red" }}>
                          There seems to be an issue finding your account. Try again.
                        </FormHelperText>
                      )}
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
                    {passwordError && (
                      <FormHelperText style={{ color: "red" }}>
                        invalid password
                      </FormHelperText>
                    )}
                  </FormControl>
                  <Button onClick={handleLogin} className={classes.icon}>
                    Login
                  </Button>
                </form>
    </div>
  )};

export default Login;