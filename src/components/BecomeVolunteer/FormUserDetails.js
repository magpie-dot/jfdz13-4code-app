import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styles from "./formStyle.css";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  constructor(props) {
    super(props);
    this.state = { helperText: "", error: false };
  }

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
              alignItems="center"
            >
              <div className={styles.form}>
                <h2>Formularz rejestracji wolontariusza</h2>
                <TextField
                  id={styles.text}
                  type="email"
                  label="Imię"
                  variant="outlined"
                  onChange={handleChange("firstName")}
                  defaultValue={values.firstName}
                  fullWidth="true"
                  input type="text"
                />
                <br></br>
                <br></br>
                <TextField
                  P={5}
                  label="Nazwisko"
                  variant="outlined"
                  onChange={handleChange("lastName")}
                  defaultValue={values.lastName}
                  fullWidth="true"
                  input type="text"
                />
                <br></br>
                <br></br>
                <TextField
                  label="Email"
                  variant="outlined"
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                  fullWidth="true"
                  input type="email"
                />
                <br></br>
                <br></br>

                <TextField
                  label="Adres"
                  variant="outlined"
                  onChange={handleChange("adress")}
                  defaultValue={values.adress}
                  fullWidth="true"
                />
                <br></br>
                <br></br>
                <TextField
                  label="Kod pocztowy"
                  variant="outlined"
                  onChange={handleChange("postalCode")}
                  defaultValue={values.postalCode}
                  fullWidth="true"
                />
                <br></br>
                <br></br>
                <TextField
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
