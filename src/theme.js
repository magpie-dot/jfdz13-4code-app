import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#807F89",
            contrastText: "#fff"
        },
        secondary: {
            main: "#81d7e4",
            contrastText: "#fff"
        },
        action: {
            hover: "#807f89",
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