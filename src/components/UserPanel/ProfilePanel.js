import React from "react";
import { Paper, Grid, Avatar, Typography } from "@material-ui/core";
import styles from "./UserPanel.module.css";

const ProfilePanel = () => {
  return (
    <Paper elevation={3} className={styles.paper}>
      <Grid container direction="column" justify="center" alignItems="center">
        <div className={styles.avatarContainer}>
          <Avatar
            alt="avatar"
            src="images/avatars/avatar1.png"
            className={styles.avatar}
            style={{ height: "150px", width: "150px" }}
          />
          <div className={styles.circle}></div>
        </div>
        <Typography variant="body1" style={{ textAlign: "center", margin: "20px 0"}}>
          Witaj Anna
          </Typography>
          <Typography variant="body1" style={{ textAlign: "center" }}>
          Jesteś z nami 31 dni.
        </Typography>
      </Grid>
    </Paper>
  );
};

export default ProfilePanel;
