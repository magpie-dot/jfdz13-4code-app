import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(60, 193, 250)",
      contrastText: "#fff"
    },
    secondary: {
      main: "rgb(234,76,137)",
    },
    action: {
      hover: "rgb(234,76,137)",
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
      
    },
    body3: {
      fontSize: "10px"
    }
  }
});

export default theme;
