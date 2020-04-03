import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import styles from "./UserPanel.module.css";

const FavouriteAnimalPanel = () => {
  return (
    <Paper elevation={3} className={styles.paperLong}>
      <Grid container>
        <Grid item>
          <Typography variant="body1" style={{margin: "15px 0"}}>
            Moja lista zwierzaków do adopcji:
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FavouriteAnimalPanel
