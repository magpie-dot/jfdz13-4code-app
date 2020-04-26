import React, { Component } from "react";
import {
  Paper,
  Grid,
  Avatar,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Input
} from "@material-ui/core";
import styles from "./UserPanel.module.css";
import placeholder from "../ee11528c2192ed4402d96c564d38d05f.svg";
import firebase from "firebase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


class ProfilePanel extends Component {
  state = {
    file: null,
    url: "",
    ref: null,
    user: null,
    open: false,
    avatarType: " "
  };

  componentDidMount() {
    const ref = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
      this.fetchAvatarUrl();
    });

    this.setState({ ref });
  }

  componentWillUnmount() {
    this.state.ref();
  }

  handleOnChange = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  handleOnClick = () => {
    firebase
      .storage()
      .ref(`avatars/${this.state.user.uid}`)
      .put(this.state.file)
      .then(() => {
        this.fetchAvatarUrl();
      });
  };
  handleOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleOnImageClick = event => {
    this.setState({
      avatarType: event.target.src.slice(-26)
    });
  };

  handleOnImageAdd = () => {
    if (this.state.avatarType) {
      localStorage.setItem("avatar", this.state.avatarType);
      // this.fetchAvatarUrl();
      //ZMIENIĆ Z REMOVE AVATAR BEZ LS
      firebase
      .storage()
      .ref(`avatars/${this.state.user.uid}`)
      .delete()
      .finally(() => {
        this.fetchAvatarUrl();
      });
    }
  };

  fetchAvatarUrl = () => {
    firebase
      .storage()
      .ref(`avatars/${this.state.user.uid}`)
      .getDownloadURL()
      .then(url => {
        this.setState({
          url
        });
      })
      .catch(()=>{
        const avatar = localStorage.getItem('avatar')
        if(avatar) {
          this.setState ({
            url: avatar
          })
        } else {
          this.setState ({
            url: ''
          })
        }
      })
  };

  removeAvatar = () => {
    firebase
      .storage()
      .ref(`avatars/${this.state.user.uid}`)
      .delete()
      .finally(() => {
        this.fetchAvatarUrl();
        localStorage.removeItem('avatar')
      });
  };

  render() {
    return (
      this.state.user && (
        <Paper elevation={3} className={styles.paper}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <div className={styles.avatarContainer}>
              <div className={styles.button}>
                {this.state.url ? (
                  <Button onClick={this.handleOpen}> Zmień zdjęcie</Button>
                ) : (
                  <Button onClick={this.handleOpen}> Dodaj zdjęcie</Button>
                )}
                <Dialog
                  open={this.state.open}
                  keepMounted
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>Dodaj zdjęcie</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                    <Input type="file" onChange={this.handleOnChange} />

                    <Button onClick={this.handleOnClick}>Dodaj</Button>
                  </DialogContent>
                  <DialogTitle>Wybierz avatar</DialogTitle>
                  <DialogContent className={styles.avatarsContainer}>
                    <img
                     onClick={this.handleOnImageClick}
                      src="images/avatars/avatar5.png"
                      className={styles.avatars}
                    />
                    <img
                      onClick={this.handleOnImageClick}
                      src="images/avatars/avatar6.png"
                      className={styles.avatars}
                    />
                    <img
                     onClick={this.handleOnImageClick}
                      src="images/avatars/avatar7.png"
                      className={styles.avatars}
                    />
                    <img
                     onClick={this.handleOnImageClick}
                      src="images/avatars/avatar8.png"
                      className={styles.avatars}
                    />
                    <img
                     onClick={this.handleOnImageClick}
                      src="images/avatars/avatar9.png"
                      className={styles.avatars}
                    />
                    <img
                     onClick={this.handleOnImageClick}
                      src="images/avatars/avatar10.png"
                      className={styles.avatars}
                    />
                    <Button onClick={this.handleOnImageAdd}>Dodaj</Button>
                  </DialogContent>
                  <div>
                    <DialogActions style={{ marginTop: "20px" }}>
                      <Button
                        onClick={this.removeAvatar}
                        style={{ color: "red" }}
                      >
                        Usuń zdjęcie
                      </Button>

                      <Button
                        onClick={this.handleClose}
                        style={{ color: "black" }}
                      >
                        Wyjdź
                      </Button>
                    </DialogActions>
                  </div>
                </Dialog>
              </div>
              <Avatar
                alt="avatar"
                src={this.state.url || placeholder}
                className={styles.avatar}
                style={{ height: "150px", width: "150px" }}
                // onChange={this.handleOnChange}
              />
            </div>
            <Typography
              variant="body1"
              style={{ textAlign: "center", margin: "20px 0" }}
            >
              <div>Witaj</div>
              {this.state.user.email}
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              Jesteś z nami 31 dni.
            </Typography>
          </Grid>
        </Paper>
      )
    );
  }
}

export default ProfilePanel;
