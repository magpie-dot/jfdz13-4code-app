import React from "react";
import { Paper, Grid, Avatar, Typography } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import styles from "./UserPanel.module.css";
import { CURIOSITY } from "./data/curiosity";

class UserPanel extends React.Component {
  render() {
    const randomId = Math.floor(Math.random() * 15) + 1;
    
    return (
      <>
        <Grid container spacing={3}>
          <Grid item item xs={12} sm={4}>
            <Paper elevation={3} className={styles.paper}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <div className={styles.avatarContainer}>
                  <Avatar
                    alt="avatar"
                    src="images/avatars/avatar1.png"
                    className={styles.avatar}
                    style={{ height: "150px", width: "150px" }}
                  />
                  <div className={styles.circle}></div>
                </div>
                <Typography variant="body1" style={{ textAlign: "center" }}>
                  <p>Witaj Anna!</p>
                  <p>Jesteś z nami 31 dni.</p>
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid item item sm={8} xs={12}>
            <Paper elevation={3} className={styles.paper}>
              <Grid container direction="column">
                <Grid item>
                  <div className={styles.flex}>
                    <EventIcon style={{ fontSize: 80, color: "#3c3d47" }} />
                    <Typography variant="body1">
                      <p>Brak zaplanowanych wydarzeń w najbliższym tygodniu</p>
                    </Typography>
                  </div>
                </Grid>
                <div className={styles.absolute}>
                  <WbIncandescentIcon
                    color="secondary"
                    style={{ fontSize: 100 }}
                  />
                  <Typography variant="body1">
                    <h3>Czy wiesz że...</h3>
                  </Typography>
                  <Typography variant="body2">
                    <p className={styles.curiosity}>
                      {CURIOSITY.filter(curio => {
                        return curio.id === randomId
                      }).map(curio => {
                        return curio.text;
                      })}
                    </p>
                  </Typography>
                </div>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={styles.paperLong}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={3}>
                  <img
                    className={styles.charityDonation}
                    src="images/love.svg"
                    alt="charity donation"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    <p>Przekazałeś już 350zł na naszą Fundację. Dziękujemy!</p>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item item xs={12}>
            <Paper elevation={3} className={styles.paperLong}>
              <Grid container>
                <Grid item>
                  <Typography variant="body1">
                    <p>Moja lista zwierzaków do adopcji:</p>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default UserPanel;
