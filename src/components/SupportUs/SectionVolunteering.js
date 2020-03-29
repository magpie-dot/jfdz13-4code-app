import React from "react"
import { Grid, Typography, Button } from "@material-ui/core";
import styles from "./SupportUs.module.css";
import {NavLink} from "react-router-dom";

const SectionVolunteering = () => {
    return(
<Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Typography variant="body2">
                <p className={styles.helpSection}>
                  Wolonatriusze wyprowadzają psy na spacery, oswajają je, uczą,
                  czeszą, kąpią, biegają z nimi. Bawią się z
                  kotami, czeszą je, pielęgnują, oswajają. Wychowują w swoich
                  domach małe kociaki czy szczenięta. Biorą udział w zbiórkach
                  karmy i imprezach promujących adopcje.
                </p>

                <p className={styles.helpSection}>
                  Możesz się zgłosić bezpośrednio w biurze fundacji lub przez
                  formularz zgłoszeniowy po zalogowaniu na naszej stronie.
                  Osoby, które się głoszą, wypełniają test z wiedzy ogólnej o
                  psach i kotach i na tej podstawie decydujemy o przyjęciu
                  takiej osoby. Przed rozpoczęciem wolontariatu przeprowadzane
                  jest szkolenie.
                </p>
              </Typography>
              <Grid item>
              <NavLink className='link' exact to={'/zostanwolontariuszem'}>
              <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  style={{ fontWeight: 600, width: 250, marginBottom: 30}}
                >
                  Wypełnij formularz
                </Button>
                </NavLink>
                </Grid>
            </Grid>
          </Grid>
    );
}

export default SectionVolunteering