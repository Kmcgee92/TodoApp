import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../../redux/actions/authActions";
// apollo
import { useMutation } from "@apollo/react-hooks";
// import { GET_USER } from "../../graphql/queries/GetUser";
import { GET_USER_BY_LOGIN } from "../../graphql/mutations/login";

// mui components
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const Login = ({ classes, setDataLoading, setModalOpen }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("demo@bcf.com");
  const [password, setPassword] = useState("password");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [noUserFound, setNoUserFound] = useState(false);

  let [getUserByLogin, { data, loading, error }] = useMutation(
    GET_USER_BY_LOGIN
  );
  useEffect(() => {
    if (!error && data && !loading) {
      if (!data.Login) {
        setNoUserFound(true);
        return;
      }
      dispatch(loginHandler(data));
    }
  }, [dispatch, error, data, loading]);

  useEffect(() => {
    if (loading) {
      setDataLoading(true);
      //! setting timeout to make loader visible
      // directly based off query for user info loading param
      setTimeout(() => setDataLoading(false), 2800);
    }
  }, [loading, setDataLoading]);

  // error handling for login and perform DB Query which should be done in redux thunk
  const handleLogin =  () => {
    setModalOpen(false);
    setNoUserFound(false);
    setEmailError(false);
    setPasswordError(false);
    let emailCurrentError = false;
    let passwordCurrentError = false;

    if (!email) {
      emailCurrentError = true;
      setEmailError(true);
    }

    if (!password) {
      passwordCurrentError = true;
      setPasswordError(true);
    }

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(email)) {
      emailCurrentError = true;
      setEmailError(true);
    }

    if (!emailCurrentError && !passwordCurrentError) {
      setDataLoading(true);
      getUserByLogin({
        variables: {
          email: email,
          password: password,
        },
      });
    }
    setDataLoading(false);
  };

  return (
    <div>
      <form className={classes.signinForm}>
        {auth.error && (
          <FormHelperText className={classes.serverError}>
            {`${auth.error}`}
          </FormHelperText>
        )}
        {(emailError || passwordError) && (
          <FormHelperText style={{ color: "red" }}>
            please fill out all fields.
          </FormHelperText>
        )}
        {noUserFound && (
          <FormHelperText style={{ color: "red" }}>
            500: Seems to be an issue with the server
          </FormHelperText>
        )}
        <FormControl>
          <Input
            required
            data-test="loginEmail"
            value={email}
            className={classes.authInputs}
            placeholder="email"
            autoComplete="email"
            autoFocus={true}
            error={emailError}
            onChange={(e) => setEmail(e.target.value)}
            onClick={() => setModalOpen(false)}
            />
        </FormControl>
        <FormControl>
          <Input
            required
            data-test="loginPassword"
            value={password}
            type="password"
            className={classes.authInputs}
            placeholder="password"
            autoComplete="current-password"
            error={passwordError}
            onChange={(e) => setPassword(e.target.value)}
            onClick={() => setModalOpen(false)}
          />
        </FormControl>
        <Button
          data-test="loginButton"
          onClick={handleLogin}
          className={classes.icon}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;