import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styles from "./formStyle.css";
import { spacing } from '@material-ui/system';


export class FormPersonalDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  

  

  render() {
    const theme = {
        spacing: 8,
      }
    const { values, handleChange } = this.props;
    return (
      <Grid container spacing={3}>
        <Grid item item xs={6} sm={6}>
          <Paper elevation={3} className={styles.paper}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <div id={styles.root}>
                <h2 mx="auto">Formularz rejestracji wolontariusza</h2>

                <TextField
                  label="Coś o Tobie"
                  variant="outlined"
                  onChange={handleChange("bio")}
                  defaultValue={values.bio}
                  fullWidth="true"
                  multiline="true"
                  rows="4"
                />
                <br></br>
                <br></br>
                <TextField 
                  label="Twoje doświadczenie ze zwierzętami"
                  variant="outlined"
                  onChange={handleChange("exp")}
                  defaultValue={values.exp}
                  fullWidth="true"
                  multiline="true"
                  rows="4"
                />
                <br></br>
                <br></br>
                <TextField
                  label="Jak chcesz pomóc?"
                  variant="outlined"
                  onChange={handleChange("help")}
                  defaultValue={values.help}
                  fullWidth="true"
                  fullWidth="true"
                  multiline="true"
                  rows="4"
                />
                <br></br>
                <br></br>
                <ButtonGroup p={2}>
                  <Button p={2}
                    variant="contained"
                    color="Secondary"
                    onClick={this.continue}
                  >
                    Zapisz
                  </Button>
                  <br></br>
                  <br></br>
                  <Button p={2}
                    variant="contained"
                    color="Primary"
                    onClick={this.back}
                  >
                    Wróć
                  </Button>
                </ButtonGroup>
              </div>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <div className={styles.picture}>
            <img
              className={styles.dog}
              src="images/picPlayfulCat.png"
              height="550"
              width="550"
            ></img>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default FormPersonalDetails;
