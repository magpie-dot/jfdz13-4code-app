import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#545870',
      contrastText: "white"
    },
    secondary: {
      main: '#f1cfcd',
    },
  },
  zIndex: {
      drawer: 1000,
  },
  typography: {
      body1: {
        fontSize: '1.2rem'
  }}
});

export default theme