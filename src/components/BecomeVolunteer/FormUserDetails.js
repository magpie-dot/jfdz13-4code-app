import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
        <Grid item xs={6} sm={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <div>
                <h2>Formularz rejestracji wolontariusza</h2>
                <TextField
                  label="Imię"
                  variant="outlined"
                  onChange={handleChange("firstName")}
                  defaultValue={values.firstName}
                  fullWidth
                  type="text"
                />
                <br></br>
                <br></br>
                <TextField
                  label="Nazwisko"
                  variant="outlined"
                  onChange={handleChange("lastName")}
                  defaultValue={values.lastName}
                  fullWidth
                  type="text"
                />
                <br></br>
                <br></br>
                <TextField
                  label="Email"
                  variant="outlined"
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                  fullWidth
                  type="email"
                />
                <br></br>
                <br></br>

                <TextField
                  label="Adres"
                  variant="outlined"
                  onChange={handleChange("adress")}
                  defaultValue={values.adress}
                  fullWidth
                />
                <br></br>
                <br></br>
                <TextField
                  label="Kod pocztowy"
                  variant="outlined"
                  onChange={handleChange("postalCode")}
                  defaultValue={values.postalCode}
                  fullWidth
                />
                <br></br>
                <br></br>
                <TextField
                  label="Numer telefonu"
                  variant="outlined"
                  onChange={handleChange("phoneNumber")}
                  defaultValue={values.phoneNumber}
                  fullWidth
                />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20
                  }}
                >
                  <br></br>
                  <br></br>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.continue}
                  >
                    Zapisz
                  </Button>
                </div>
              </div>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <div>
            <img src="images/picPlayfulCat.png" height="550" width="550" alt="kot"></img>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default FormUserDetails;