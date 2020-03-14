import React from "react";
import { Paper, Grid, Avatar, Typography } from "@material-ui/core";
import styles from "./UserPanel.module.css"

const UserPanel = () => {
  return (
    <div>
      <Paper elevation={3} className={styles.paper}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
            <div>
          <Avatar
            alt="avatar"
            src="images/avatars/avatar1.png"
            className={styles.avatar}
            style ={{height: "180px", width: "180px"}}
          />
          <div className={styles.circle}></div>
          </div>
          <Typography variant="body1" style={{textAlign: "center"}}>
              <p>Witaj Anna!</p>
              <p>Jesteś z nami już 31 dni.</p>
          </Typography>
        </Grid>
      </Paper>
      <Paper elevation={3} style={{marginTop: "20px"}} className="Paper">
          <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
            <Grid item xs={3}>
          <img className={styles.charityDonation} src="images/love.svg" alt="charity donation"/>
          </Grid>
          <Grid item xs={6}>
      <Typography variant="h5" style={{textAlign: "center"}}>
          <p>Przekazałeś już 350zł na naszą Fundację. Dziękujemy!</p>
      </Typography>
      </Grid>
      </Grid>
      </Paper>
    </div>
  );
};
export default UserPanel;
