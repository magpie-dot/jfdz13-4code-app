import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import styles from "./UserPanel.module.css";

import { setUser } from "../../state/users";
import { connect } from "react-redux";

class CharityPanel extends React.Component {

componentDidMount(){
  this.props.setUser(this.props.loggedUserId)
}

  render() {
    const { userData } = this.props;

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
              Przekazałeś już { userData !== null ? userData.charity : "0"} zł na naszą Fundację.
              Dziękujemy!
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.users.userData,
  loggedUserId: state.users.loggedUser,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharityPanel);
