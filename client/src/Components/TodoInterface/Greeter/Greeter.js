import React from "react";
//mui components
import Toolbar from "@material-ui/core/Toolbar";

const Greeter = ({ activeUser, modalOpen, setModalOpen, classes }) => {
  return (
    <>
      <Toolbar />
      {!Object.keys(activeUser).length && !modalOpen ? (
        <div data-test="greeting">
          <span className={classes.signupContent}>
            need to create an account?&nbsp;&nbsp;
            <span
              data-test="signupModalOpen"
              className={classes.signupToggleParent}
              onClick={() => setModalOpen(true)}
            >
              <span className={classes.signupToggle}>Signup</span>
            </span>
          </span>
        </div>
      ) : null}
    </>
  );
};

export default Greeter;
