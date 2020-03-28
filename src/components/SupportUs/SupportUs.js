import React from "react";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import styles from "./SupportUs.module.css";
import NewSlider from "./Slider.js";
import Sponsors from "./Sponsors";

class SupportUs extends React.Component {
  render() {
    return (
      <div>
        <Paper elevation={3} style={{ paddingLeft: 50 }}>
          <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h6">
                <h3 className={styles.titleSection} style={{ marginBottom: 5 }}>Wsparcie finansowe</h3>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <p>
                  Możesz wspomóc finansowo nasze schronisko, wpłacając pieniądze
                  na konto:
                </p>
                <div className={styles.bank}>
                  <p style={{ fontWeight: 300, letterSpacing: "0.2rem"}}>
                    10 1020 4027 0000 1502 1262 6786
                  </p>
                  <p>tytuł wpłaty: Pomoc dla schroniska</p>
                </div>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <p>Lub skorzystać z naszego systemu szybkich płatności:</p>
              </Typography>
              <div className={styles.sliderContainer}>
                <NewSlider />
                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  style={{ fontWeight: 600, width: 200, alignSelf: "center" }}
                >
                  Wesprzyj nas
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h6">
                <h3 className={styles.titleSection} style={{ marginBottom: 5 }}>Pomoc rzeczowa</h3>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <p className={styles.helpSection}>
                  Zwierzęta przebywające w schronisku mają inne potrzeby
                  żywieniowe niż koty i psy mieszkające w domach. Żyją w
                  stresie, w dużym skupisku, w którym łatwiej przenoszą się
                  choroby. Niektóre z nich są chore albo przechodzą
                  rekonwalescencję po wypadkach. Musimy im dawać lepszej jakości
                  karmę, ponieważ ta gorsza, najtańsza, im nie służy. Domowy
                  pies może nie mieć po niej biegunki, schroniskowy będzie miał,
                  bo żyje w gorszych warunkach.
                </p>

                <p className={styles.helpSection} >Dlatego jeśli chcecie pomóc, kupcie im dobrą karmę. Idźcie do sklepu zoologicznego, a nie do supermarketu, i wybierzcie coś z dużą zawartością mięsa. Nie martwcie się, że przynosicie dwie puszki zamiast 10-kilogramowego worka, który kupilibyście w tej samej cenie. Znamy ceny karm i docenimy to, że pomagacie mądrze.</p>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={3} style={{ margin: "30px 0" }}>
          <Sponsors />
        </Paper>
      </div>
    );
  }
}
export default SupportUs;
