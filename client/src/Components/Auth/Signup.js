import React, { useEffect, useState } from "react";
// redux
import { useDispatch } from "react-redux";
import { signupHandler } from "../../redux/actions/authActions";
// apollo
import { useMutation } from "@apollo/react-hooks";
// import { GET_USER } from "../../graphql/queries/GetUser";
import { GET_USER_BY_SIGNUP } from "../../graphql/mutations/signup";
// animxyz animation
import "@animxyz/core";
// mui components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
// mui icons
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
// concat classes
import clsx from "clsx";



const Signup = ({ classes, setModalOpen }) => {
  const dispatch = useDispatch();
  const [passVisibility, setPassVisibility] = useState(false);
  const [confirmPassVisibility, setConfirmPassVisibility] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [creatingUserLoader, setCreatingUserLoader] = useState(false);
  const [overThirty, setOverThirty] = useState(false);
  const [serverError, setServerError] = useState("");

  let [getUserBySignup, { data, loading, error }] = useMutation(
    GET_USER_BY_SIGNUP
  );

  useEffect(() => {
    setServerError("");
    if (!error && data && !loading) {
      if (data.Signup.error) {
        setServerError(data.Signup.error);
        return;
      }
      dispatch(signupHandler(data));
      setModalOpen(false);
    }
  }, [setModalOpen, dispatch, error, data, loading]);
  // Loading bar
  useEffect(() => {
    if (loading) {
      setCreatingUserLoader(true);
    }
    let timeoutName = setTimeout(() => setCreatingUserLoader(false), 2800);
    return () => clearTimeout(timeoutName);
  }, [loading, creatingUserLoader, setCreatingUserLoader]);

  // over 30 error
  useEffect(() => {
    setOverThirty(false);
    if (name.length > 30) {
      setOverThirty(true);
    }
  }, [name, overThirty]);

  // password and confirm requirements
  useEffect(() => {
    if (password.length >= 8) {
      setPasswordError(false);
    }
    setConfirmPasswordError(false);
    if (password !== confirmPassword && confirmPassword) {
      setConfirmPasswordError(true);
    }
  }, [password, confirmPassword, setPasswordError]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setNameError(false);
    setPasswordError(false);
    let nameCurrErr = false;
    let passCurrErr = false;
    let confirmPassCurrErr = false;

    if (password.length < 8) {
      passCurrErr = true;
      setPasswordError(true);
    }
    if (confirmPasswordError) {
      confirmPassCurrErr = true;
    }

    const regex = /^[a-z ]{3,30}$/i;
    if (!regex.test(name)) {
      nameCurrErr = true;
      setNameError(true);
    }

    if (!nameCurrErr && !passCurrErr && !confirmPassCurrErr) {
      setCreatingUserLoader(true);
      await getUserBySignup({
        variables: {
          name: name,
          email: email,
          password: password,
        },
      });
    }

    setCreatingUserLoader(false);
  };

  const nameHelperText = () => {
    const handleOverThirty = clsx({
      [classes.nameLength]: !overThirty,
      [classes.nameLengthError]: overThirty,
    });
    if (nameError) {
      return (
        <>
          <span className={handleOverThirty}>{name.length} of 30</span>
          <span>
            must be between 3 and 30 characters and must not contain special
            characters `!@#$%&*` or numbers.
          </span>
        </>
      );
    } else {
      return <span className={handleOverThirty}>{name.length} of 30</span>;
    }
  };

  return (
    <>
      <div className={classes.modalContainer}>
        <div className="xyz-in" xyz="inherit down">
          <div className={classes.modalContent}>
            <header className={classes.signupHeader}>
              <h2>Create an Account</h2>
            </header>
            <span style={{ padding: "0 20px", color: "black" }}>
              * indicates required fields
            </span>
            {serverError ? (
              <div className={classes.serverErrorStyles}>
                <span className={classes.serverErrorStyles}>
                  {serverError}
                </span>
              </div>
            ) : null}
            <form onSubmit={handleSignup} className={classes.signupForm}>
              <TextField
                required
                data-test="nameField"
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameHelperText()}
                label="Name"
                type="name"
                autoComplete="name"
                variant="outlined"
                className={classes.signupInput}
                InputProps={{
                  className: classes.signupInputChildren,
                  endAdornment: <PersonOutlineIcon />,     
                }}
                autoFocus={true}
                />
              <TextField
                required
                data-test="emailField"
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                type="email"
                autoComplete="email"
                variant="outlined"
                className={classes.signupInput}
                InputProps={{
                  className: classes.signupInputChildren,
                  endAdornment: <HttpsOutlinedIcon />,
                }}
                />
              <TextField
                required
                data-test="passwordField"
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
                helperText={
                  passwordError &&
                  "password must be at least 8 characters long "
                }
                color="primary"
                label="Password"
                name="password"
                type={!passVisibility ? "password" : "reveal"}
                variant="outlined"
                autoComplete="currentPassword"
                className={classes.signupInput}
                InputProps={{
                  className: classes.signupInputChildren,
                  endAdornment: passVisibility ? (
                    <VisibilityOutlinedIcon
                    onClick={() => setPassVisibility(false)}
                    className={classes.visibilityIcon}
                    style={{ color: "white" }}
                    />
                    ) : (
                      <VisibilityOffOutlinedIcon
                      onClick={() => setPassVisibility(true)}
                      className={classes.visibilityIcon}
                      />
                      ),
                    }}
                    />
              <TextField
                required
                data-test="confirmPasswordField"
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={confirmPasswordError}
                helperText={
                  confirmPasswordError &&
                  "confirmation does not match password field."
                }
                label="Confirm Password"
                type={!confirmPassVisibility ? "password" : "reveal"}
                variant="outlined"
                autoComplete="current-password"
                className={classes.signupInput}
                InputProps={{
                  className: classes.signupInputChildren,
                  endAdornment: confirmPassVisibility ? (
                    <VisibilityOutlinedIcon
                      onClick={() => setConfirmPassVisibility(false)}
                      style={{ color: "white" }}
                    />
                  ) : (
                    <VisibilityOffOutlinedIcon
                      onClick={() => setConfirmPassVisibility(true)}
                      className={classes.visibilityIcon}
                    />
                  ),
                }}
              />
              {!creatingUserLoader ? (
                <>
                  <Button style={{ color: "white" }} type="submit">
                    Create Account
                  </Button>

                  <Button
                    className={classes.cancelButton}
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <LinearProgress style={{ margin: "20px" }} />
                  <Button
                    className={classes.cancelButton}
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
