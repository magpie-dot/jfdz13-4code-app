import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "./SupportUs.module.css";

const Sponsors = () => {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid>
          <Typography variant="h5">
            <p>Przyjaciele i sponsorzy:</p>
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <img
              className={styles.sponsor}
              src="images/sponsors/sponsor1.png"
              alt="sponsor"
            />
          </Grid>
          <Grid item>
            <img
              className={styles.sponsor}
              src="images/sponsors/sponsor2.png"
              alt="sponsor"
            />
          </Grid>
          <Grid item>
            <img
              className={styles.sponsor}
              src="images/sponsors/sponsor3.png"
              alt="sponsor"
            />
          </Grid>
          <Grid item>
            <img
              className={styles.sponsor}
              src="images/sponsors/sponsor4.png"
              alt="sponsor"
            />
          </Grid>
          <Grid item>
            <img
              className={styles.sponsor}
              src="images/sponsors/sponsor5.png"
              alt="sponsor"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sponsors;
