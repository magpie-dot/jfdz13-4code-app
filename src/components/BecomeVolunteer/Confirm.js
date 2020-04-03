import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styles from "./formStyle.css";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    //TU PRZESYŁANIE DANYCH//
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        firstName,
        lastName,
        adress,
        postalCode,
        email,
        phoneNumber,
        bio,
        exp,
        help
      }
    } = this.props;
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
                <h2 id={styles.avatar}> Formularz rejestracji wolontariusza</h2>
                <List>
                  <ListItem>
                    <ListItemText primary="Imię" secondary={firstName} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Nazwisko" secondary={lastName} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Adres" secondary={adress} />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Kod pocztowy"
                      secondary={postalCode}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Adres email" secondary={email} />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Numer telefonu"
                      secondary={phoneNumber}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="O Tobie" secondary={bio} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Doświadczenie" secondary={exp} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Wsparcie" secondary={help} />
                  </ListItem>
                </List>
                <br></br>
                <br></br>
                <ButtonGroup>
                  <Button
                    variant="contained"
                    color="Secondary"
                    onClick={this.continue}
                  >
                    Zapisz
                  </Button>
                  <br></br>
                  <br></br>
                  <Button
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

export default Confirm;
