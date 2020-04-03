import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styles from "./formStyle.css";
import FormControl from "@material-ui/core/FormControl";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <Grid container spacing={3}>
        <Grid item item xs={6} sm={6}>
          <Paper elevation={3} className={styles.paper}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="strech"
            >
              <div className={styles.form}>
                <h2>Formularz Rejestracji wolontariusza</h2>
                <TextField
                  helperText="Podaj swoje imię"
                  label="Imię"
                  variant="outlined"
                  onChange={handleChange("firstName")}
                  defaultValue={values.firstName}
                  fullWidth="true"
                />

                <TextField
                  helperText="Podaj swoje nazwisko"
                  label="Nazwisko"
                  variant="outlined"
                  onChange={handleChange("lastName")}
                  defaultValue={values.lastName}
                  fullWidth="true"
                />

                <TextField
                  helperText="Podaj swój email"
                  label="Email"
                  variant="outlined"
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                  fullWidth="true"
                />

                <br />
                <TextField
                  helperText="Podaj swój adres"
                  label="Adres"
                  variant="outlined"
                  onChange={handleChange("adress")}
                  defaultValue={values.adress}
                  fullWidth="true"
                />
                <TextField
                  helperText="Podaj swój kod pocztowy"
                  label="Kod pocztowy"
                  variant="outlined"
                  onChange={handleChange("postalCode")}
                  defaultValue={values.postalCode}
                  fullWidth="true"
                />
                <TextField
                  helperText="Podaj swój numer telefonu"
                  label="Numer telefonu"
                  variant="outlined"
                  onChange={handleChange("phoneNumber")}
                  defaultValue={values.phoneNumber}
                  fullWidth="true"
                />
                <br></br>
                <br></br>
                <Button
                  variant="contained"
                  color="Primary"
                  onClick={this.continue}
                >
                  Zapisz
                </Button>
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

export default FormUserDetails;
