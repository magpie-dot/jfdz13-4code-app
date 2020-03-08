import { createMuiTheme, rgbToHex } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(60, 193,250)',
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