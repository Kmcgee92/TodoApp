export const TodoStyles = (theme, drawerWidth) => ({
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
