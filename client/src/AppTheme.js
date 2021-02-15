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
      main: "#65eed6",
    },
    error: {
      main: red[900],
    },
    warning: {
      main: "#0066ff",
    },
  },
  typography: {
    fontSize: 16,
  },
});

export default theme;
