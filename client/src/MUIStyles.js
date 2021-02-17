import { green } from "@material-ui/core/colors";

const signupModalStyles = (theme, interactiveDrawer) => ({
  modalContainer: {
    zindex: 10000,
    position: "relative",
    height: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "2%",
    [theme.breakpoints.down("md")]: {
      top: 50,
      left: 0,
      right: 0,
    },
  },
  modalContent: {
    width: "40vw",
    backgroundColor: "rgb(60,60,60,.5)",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "80vw",
      height: "90vh",
    },
  },
  signupHeader: {
    display: "flex",
    justifyContent: "center",
  },
  signupForm: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      padding: "5px",
    },
  },
  signupInput: {
    filter: "saturate(300%)",
    margin: "20px",
  },
  signupInputChildren: {
    backgroundColor: "rgb(100,100,100)",
    color: "white",
  },
  visibilityIcon: {
    color: "grey",
    "&:hover": {
      color: "white",
      cursor: "pointer",
    },
  },
  cancelButton: {
    color: "grey",
    "&:hover": {
      color: "white",
      cursor: "pointer",
    },
  },
  nameLength: {
    position: "relative",
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    height: "50%",
    padding: "0",
    margin: "0",
    color: "white",
    fontSize: "10px",
  },
  nameLengthError: {
    position: "relative",
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    height: "50%",
    padding: "0",
    margin: "0",
    color: "red",
    fontSize: "10px",
  },
  serverErrorStyles: {
    color: "red",
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  signupContent: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "nowrap",
    padding: "20px 0 0 0",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
      padding: "100px 0 0 0",
      boxSizing: "border-box",
    },
  },
  signupToggleParent: {
    display: "flex",
    justifyContent: "center",
  },
  signupToggle: {
    width: "40px",
    color: "white",
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("md")]: {
      padding: "20px",
      color: theme.palette.primary.main,
    },
  },
});

const spinnerStyles = {
  root: {
    width: "600%",
    height: "100%",
  },
  spinner: {
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
    backgroundColor: "#26a69a",
  },
  fabProgress: {
    color: "#26a69a",
    position: "absolute",

    zIndex: 1,
  },
};

const icons = (theme) => ({
  circleOutlineIcon: {
    marginRight: "5px",
    color: "green",
    [theme.breakpoints.down("sm")]: {
      width: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  assignmentIcon: {
    marginRight: "2px",
    [theme.breakpoints.down("sm")]: {
      width: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
});
const savingStatuses = (theme) => ({
  savedWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  saved: {
    filter: "saturate(600%)",
    color: theme.palette.primary.main,
  },
  notSaved: {
    opacity: ".5",
    color: "red",
  },
});

export const TodoStyles = (theme, drawerWidth, interactiveDrawer) => {
  return {
    ...icons(theme),
    ...signupModalStyles(theme, interactiveDrawer),
    ...spinnerStyles,
    ...savingStatuses(theme),
    root: {
      display: "flex",
    },
    appName: {
      padding: "0 40px 0 0",
      [theme.breakpoints.down("md")]: {
        fontSize: 16,
      },
      [theme.breakpoints.down("xs")]: {
        textTransform: "uppercase",
        color: theme.palette.secondary.main,
        fontSize: 14,
      },
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
      backgroundColor: "rgb(40,40,40, 1) !important",
    },
    titleEditable: {
      color: "white",
      width: "100%",
    },
    contentEditable: {
      color: "white",
      width: "100%",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      [theme.breakpoints.down("md")]: {
        width: "150px",
      },
      [theme.breakpoints.down("xs")]: {
        width: interactiveDrawer,
      },
    },
    drawerPaper: {
      backgroundColor: "rgb(50,50,50, 1)",
      width: drawerWidth,
      color: "white",
      [theme.breakpoints.down("md")]: {
        width: "150px",
      },
      [theme.breakpoints.down("xs")]: {
        width: interactiveDrawer,
      },
    },
    drawerItem: {
      padding: " 10px 0px 10px 10px !important",
      overflow: "hidden",
    },
    itemText: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    crossout: {
      textDecoration: "line-through",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    signinForm: {
      display: "flex",
      [theme.breakpoints.down("xs")]: {
        margin: "0 auto",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    authInputs: {
      alignSelf: "center",
      color: "white",
      margin: "2px 5px 0 0",
      padding: "0 5px",
      [theme.breakpoints.down("xs")]: {
        margin: "0",
        padding: "0",
      },
    },
    wrapper: {
      color: "white",
      backgroundColor: "rgb(77, 79, 90, 1)",
      flexGrow: 1,
    },
    active: {
      backgroundColor: "rgba(255, 255, 255, .1)",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, .1)",
      },
    },
    noTasks: {
      filter: "saturate(600%)",
      display: "flex",
      height: "50%",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    itemStatus: {
      display: "flex",
      justifyContent: "center",
    },
    complete: {
      color: "lightgreen",
      filter: "saturate(4)",
      "&:hover": {
        cursor: "pointer",
      },
    },
    inComplete: {
      color: "darkred",
      filter: "saturate(10)",
      "&:hover": {
        cursor: "pointer",
      },
    },
    detailContent: {
      padding: "20px",
    },
  };
};
