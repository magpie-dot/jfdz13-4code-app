import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(60, 193, 250)",
      contrastText: "#fff"
    },
    secondary: {
      main: "rgb(253, 168, 201)",
      contrastText: "#fff"
    },
    action: {
      hover: "rgb(253, 168,201)",

    }
  },
  zIndex: {
    drawer: 1000
  },
  typography: {
    fontFamily: "'Hind',sans-serif",

    body1: {
      fontSize: "1.2rem"
    },
    body2: {
      fontSize: "1.1rem"
    }

  }
});

export default theme;
