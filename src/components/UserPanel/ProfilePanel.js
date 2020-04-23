import React, {Component} from "react";
import { Paper, Grid, Avatar, Typography } from "@material-ui/core";
import styles from "./UserPanel.module.css";
import placeholder from "../Raspberry_Pi_Logo.svg"
import firebase from "firebase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
class ProfilePanel extends Component {
  state = {
    file: null,
    url: '',
    ref: null,
    user: null
};

componentDidMount() {
    const ref = firebase.auth().onAuthStateChanged((user) => {
        this.setState({ user });
        this.fetchAvatarUrl();
    });

    this.setState({ ref })
}

componentWillUnmount() {
    this.state.ref();
}

handleOnChange = (event) => {
    this.setState({
        file: event.target.files[0]
    })
};

handleOnClick = () => {
    firebase.storage().ref(`avatars/${this.state.user.uid}`)
        .put(this.state.file)
        .then(() => {
            this.fetchAvatarUrl();
        });
};

fetchAvatarUrl = () => {
    firebase.storage().ref(`avatars/${this.state.user.uid}`).getDownloadURL()
        .then(url => {
            this.setState({
                url
            })
        })
};



  render () {
  return this.state.user
  && <Paper elevation={3} className={styles.paper}>
      <Grid container direction="column" justify="center" alignItems="center">
        <div className={styles.avatarContainer}>
          <Avatar
            alt="avatar"
            src={this.state.url || <AccountCircleIcon />}
            className={styles.avatar}
            style={{ height: "150px", width: "150px" }}
            onChange={this.handleOnChange}
          />
          {/* <input type="file" onChange={this.handleOnChange} /> */}
           <button onClick={this.handleOnClick}>Dodaj zdjęcie</button>
          <div className={styles.circle}></div>
        </div>
        <Typography variant="body1" style={{ textAlign: "center", margin: "20px 0"}}>
          Witaj 
          {this.state.user.email}
          </Typography>
          <Typography variant="body1" style={{ textAlign: "center" }}>
          Jesteś z nami 31 dni.
        </Typography>
      </Grid>
    </Paper>
};
}

export default ProfilePanel;


// import React from "react";
// import { Paper, Grid, Avatar, Typography } from "@material-ui/core";
// import styles from "./UserPanel.module.css";

// const ProfilePanel = () => {
//   return (
//     <Paper elevation={3} className={styles.paper}>
//       <Grid container direction="column" justify="center" alignItems="center">
//         <div className={styles.avatarContainer}>
//           <Avatar
//             alt="avatar"
//             src="images/avatars/avatar1.png"
//             className={styles.avatar}
//             style={{ height: "150px", width: "150px" }}
//           />
//           <div className={styles.circle}></div>
//         </div>
//         <Typography variant="body1" style={{ textAlign: "center", margin: "20px 0"}}>
//           Witaj Anna
//           </Typography>
//           <Typography variant="body1" style={{ textAlign: "center" }}>
//           Jesteś z nami 31 dni.
//         </Typography>
//       </Grid>
//     </Paper>
//   );
// };

// export default ProfilePanel;
