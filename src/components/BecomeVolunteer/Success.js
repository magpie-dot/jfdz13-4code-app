import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "./formStyle.css";

export class Success extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item item xs={12}>
          <Paper elevation={3} className={styles.paper}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <div className={styles.success}>
                <br></br>
                <Typography variant="h5" align="center">
                  Dziękujemy za przesłanie danych
                </Typography>
                <Typography variant="body1" align="center">
                  Potwierdzenie rejestracji zostanie przesłane na Twój ardes
                  email.
                </Typography>
                <br></br>
              </div>
            
            
          <div className={styles.picture}>
            <img
              className={styles.dog}
              src="images/catOnCouch.png"             
              height="400"
              width="500"
            ></img>
          </div>
        </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Success;
