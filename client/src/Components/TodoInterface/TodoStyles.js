import { orange, green } from "@material-ui/core/colors";
const signupModalStyles = {
  modalContainer: {
    zindex: 10000,
    position: "relative",
    top: 0,
    height: "60vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "1%",
  },
  modalContent: {
    width: "40vw",
    backgroundColor: "rgb(60,60,60,.5)",
    height: "100%",
  },
  signupHeader: {
    display: "flex",
    justifyContent: "center",
  },
  signupForm: {
    padding: "20px",
    display: "flex",
    flexDirection: "column"
  },
  signupInput: {
    margin: "20px",

    boxSizing: "border-box"
  },
  visibilityIcon: {
    color: "grey",
    "&:hover": {
      color: "white",
      cursor: "pointer"

    }
  },
  signupFooter: {

  },
};

const spinnerStyles = {
  root: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      cursor: "default",
      backgroundColor: green[500],
    },
  },
  dataLoading: {
    backgroundColor: "#E25822",
  },
  fabProgress: {
    color: "#E25822",
    position: "absolute",

    zIndex: 1,
  },
};

export const TodoStyles = (theme, drawerWidth) => ({
  ...signupModalStyles,
  ...spinnerStyles,
  root: {
    display: "flex",
  },
  appName: {
    padding: "0 40px 0 0",
  },
  divider: {
    backgroundColor: "grey",
  },
  icon: {
    color: "grey",
    "&:hover": {
      color: "white",
      cursor: "pointer",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexShrink: 1,
  },
  serverError: {
    color: "red",
    display: "flex",
    alignItems: "center",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "rgb(40,40,40, 1)",
  },
  inputs: {
    color: "white",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: "rgb(50,50,50, 1)",
    width: drawerWidth,
    color: "white",
  },
  drawerItem: {
    overflow: "hidden",
  },
  crossout: {
    textDecoration: "line-through",
  },
  signinForm: {
    display: "flex",
    flexWrap: "nowrap",
  },
  authInputs: {
    color: "white",
    margin: "2px 5px 0 0",
    padding: "0 5px",
  },
  signupContent: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "nowrap",
  },
  signupToggle: {
    color: "white",
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
      color: orange[900],
    },
  },
  content: {
    color: "white",
    backgroundColor: "rgb(77, 79, 90, 1)",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  active: {
    backgroundColor: "rgba(255, 255, 255, .1)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .1)",
    },
  },
});
