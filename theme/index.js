import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#4e54c8",
    },
    secondary: {
      main: "#813071",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FFF",
    },
  },
});

export default theme;

// main:"#0e304c"
//    main: "#2b2d6e",
// main: "#0e304c",se = 19857b
