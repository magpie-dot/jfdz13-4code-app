import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import styles from "./UserPanel.module.css";

const CharityPanel = () => {
  return (
    <Paper elevation={3} className={styles.paperLong}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={3}>
          <img
            className={styles.charityDonation}
            src="images/love.svg"
            alt="charity donation"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Przekazałeś już 350zł na naszą Fundację. Dziękujemy!
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CharityPanel;
