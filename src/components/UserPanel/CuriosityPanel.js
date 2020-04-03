import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import styles from "./UserPanel.module.css";
import { CURIOSITY } from "./data/curiosity";

class CuriosityPanel extends React.Component {
  render() {
    const randomId = Math.floor(Math.random() * 15) + 1;

    return (
      <Paper elevation={3} className={styles.paper}>
        <Grid container direction="column">
          <Grid item>
            <div className={styles.flex}>
              <EventIcon style={{ fontSize: 80, color: "#3c3d47" }} />
              <Typography variant="body1">
                Brak zaplanowanych wydarzeń w najbliższym tygodniu
              </Typography>
            </div>
          </Grid>
          <div className={styles.absolute}>
            <WbIncandescentIcon color="secondary" style={{ fontSize: 100 }} />
            <Typography variant="h5">
                <span className={styles.curiosityTitle}>Czy wiesz że...</span></Typography>
            <div className={styles.curiosity}>
              <Typography variant="body2">
                {CURIOSITY.filter(curio => {
                  return curio.id === randomId;
                }).map(curio => {
                  return curio.text;
                })}
              </Typography>
            </div>
          </div>
        </Grid>
      </Paper>
    );
  }
}

export default CuriosityPanel;
