// styles
import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#26a69a",

      text: {
        primary: "#0066ff",
      },
    },
    secondary: {
      main: "#008000",
    },
    error: {
      main: red[900],
    },
    warning: {
      main: "#0066ff",
    },
    // success: {
    //   main: "",
    // },
  },
  typography: {
    fontSize: 16,
    color: "red",
  },
});

export default theme;
