import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(60, 193, 250)",
      contrastText: "#fff"
    },
    secondary: {
      main: "rgb(253, 168, 201)"
    },
    action: {
      active: "rgba(0, 0, 0, 0.01)",
      hover: "rgb(253, 168,201)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.04)",
      selectedOpacity: 0.38,
      disabled: "rgba(0, 0, 0, 0.24)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.24)",
      focusOpacity: 0.92,
      activatedOpacity: 0.92
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
      fontSize: "2rem"
      
    }

  }
});

export default theme;
