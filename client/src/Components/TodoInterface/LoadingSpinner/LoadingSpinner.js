import React from "react";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import CachedIcon from "@material-ui/icons/Cached";

const LoadingSpinner = ({ classes }) => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
    [classes.dataLoading]: !success,
  });

  React.useEffect(() => {
    setSuccess(false);
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <>
      <div className={classes.spinner}>
        <Fab aria-label="save" className={buttonClassname}>
          {success ? <CheckIcon /> : <CachedIcon />}
        </Fab>
        {loading && (
          <CircularProgress size={68} className={classes.fabProgress} />
        )}
      </div>
      <div className={classes.spinner}></div>
    </>
  );
};

export default LoadingSpinner;
