import React, { useState, useEffect } from "react";

const SaveStatus = ({ classes, saving, activeTodo, activeUser }) => {
  const [time, setTime] = useState(
    `${new Date().toDateString()},&nbsp${new Date().toLocaleTimeString()}`
  );
  useEffect(() => {
    const tick = () => {
      setTime(
        `${new Date().toDateString()}, ${new Date().toLocaleTimeString()}`
      );
    };
    let interval;
    tick();
    if (Object.keys(activeUser).length) {
      interval = window.setInterval(tick, 1000);
    }
    return () => window.clearInterval(interval);
  }, [activeUser]);
  return (
    <>
      <div className={classes.savedWrapper}>
        {Object.keys(activeUser).length ? (
          <div>
            <span>{time}</span>
          </div>
        ) : null}
        {saving && activeTodo ? (
          <div>
            <div className={classes.saved}>saved</div>
          </div>
        ) : null}
        {!saving && activeTodo ? (
          <div className={classes.notSaved}>unsaved....</div>
        ) : null}
      </div>
    </>
  );
};

export default SaveStatus;
