import React, { useState } from "react";
// animxyz animation
import "@animxyz/core";
// mui components
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

// mui icons
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";


const Signup = ({ classes, setModalOpen }) => {
  const [passVisibility, setPassVisibility] = useState(false);
  const [confirmPassVisibility, setConfirmPassVisibility] = useState(false);
  return (
    <>
      {true && (
        <div className={classes.modalContainer}>
          <div className="xyz-in" xyz="inherit down">
            <div className={classes.modalContent}>
              <header className={classes.signupHeader}>
                <h2>Create an Account</h2>
              </header>
              <form className={classes.signupForm}>
                <TextField
                  label="Name"
                  type="name"
                  autoComplete="current-password"
                  variant="outlined"
                  className={classes.signupInput}
                  InputProps={{
                    endAdornment: <PersonOutlineIcon />,
                  }}
                  autoFocus={true}
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  className={classes.signupInput}
                  InputProps={{
                    endAdornment: <HttpsOutlinedIcon />,
                  }}
                />
                <TextField
                  color="secondary"
                  label="Password"
                  type={!passVisibility && "password"}
                  variant="outlined"
                  autoComplete="current-password"
                  className={classes.signupInput}
                  InputProps={{
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
                  label="Confirm Password"
                  type={!confirmPassVisibility && "password"}
                  variant="outlined"
                  autoComplete="current-password"
                  className={classes.signupInput}
                  InputProps={{
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
              </form>
              <footer className={classes.signupFooter}>
                <div>
                  <button onClick={() => setModalOpen(false)}>
                    CLICK ME TO CLOSE
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
