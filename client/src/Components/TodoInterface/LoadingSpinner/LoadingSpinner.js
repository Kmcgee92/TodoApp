import React, {useState, useEffect} from "react";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import CachedIcon from "@material-ui/icons/Cached";

export const LoadingSpinnerUX = ({classes, loading, setLoading, success, setSuccess}) => {

  const timer = React.useRef();

  useEffect(() => {
    setSuccess(false);
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer.current);
    };
  }, [setLoading, setSuccess]);

    const buttonClassname = clsx({
      [classes.buttonSuccess]: success,
      [classes.dataLoading]: !success,
    });
    
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

}
const LoadingSpinner = ({ classes }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  let props = {
    loading,
    setLoading,
    success,
    setSuccess,
    classes
  }
  return (
    <LoadingSpinnerUX {...props}/>
  );
};

export default LoadingSpinner;
