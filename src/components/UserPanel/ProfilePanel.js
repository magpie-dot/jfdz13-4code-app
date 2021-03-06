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
  Input,
  IconButton,
} from "@material-ui/core";
import styles from "./UserPanel.module.css";
import placeholder from "../ee11528c2192ed4402d96c564d38d05f.svg";
import firebase from "firebase";
import CloseIcon from "@material-ui/icons/Close";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { connect } from "react-redux";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import { setUser, fetchUser } from "../../state/users";
import UserAvatar from "./Avatars";

const images = [
  "images/avatars/avatar5.png",
  "images/avatars/avatar6.png",
  "images/avatars/avatar7.png",
  "images/avatars/avatar8.png",
  "images/avatars/avatar9.png",
  "images/avatars/avatar10.png",
];
class ProfilePanel extends Component {
  state = {
    file: null,
    url: "",
    ref: null,
    user: null,
    open: false,
    avatarType: " ",
    openFileWindow: false,
    activeAvatarId: null,
  };

  componentDidMount() {
    const ref = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
      this.fetchAvatarUrl();
      this.props.setUser(user.uid);
      this.props.fetchUser(user.uid);
    });

    this.setState({ ref });
  }

  componentWillUnmount() {
    this.state.ref();
  }

  handleOnChange = (event) => {
    this.setState({
      file: event.target.files[0],
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
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleOnImageClick = (event, id) => {
    this.setState({
      avatarType: event.target.src.slice(-27),
      activeAvatarId: id,
    });
  };

  handleOnImageAdd = () => {
    if (this.state.avatarType) {
      localStorage.setItem(
        "avatar" + this.state.user.uid,
        this.state.avatarType
      );
      firebase
        .storage()
        .ref(`avatars/${this.state.user.uid}`)
        .delete()
        .finally(() => {
          this.fetchAvatarUrl();
        });
    }
    this.setState({
      open: false,
    });
  };

  fetchAvatarUrl = () => {
    firebase
      .storage()
      .ref(`avatars/${this.state.user.uid}`)
      .getDownloadURL()
      .then((url) => {
        console.log("url: ", url);
        this.setState({
          url,
        });
      })
      .catch(() => {
        const avatar = localStorage.getItem("avatar" + this.state.user.uid);
        if (avatar) {
          this.setState({
            url: avatar,
          });
        } else {
          this.setState({
            url: "",
          });
        }
      });
  };

  removeAvatar = () => {
    firebase
      .storage()
      .ref(`avatars/${this.state.user.uid}`)
      .delete()
      .finally(() => {
        this.fetchAvatarUrl();
        localStorage.removeItem("avatar" + this.state.user.uid);
      });
  };

  showFileWindow = () => {
    this.setState({
      openFileWindow: true,
    });
  };

  closeFileWindow = () => {
    this.setState({
      openFileWindow: false,
      open: false,
    });
  };

  getTimeWithUs = (creationDate) => {
    const daysDifference = differenceInCalendarDays(
      new Date(Date.now()),
      new Date(creationDate)
    );
    switch (daysDifference) {
      case 0:
        return "Witaj w naszym gronie";
      case 1:
        return `Jesteś z nami ${daysDifference} dzień`;
      default:
        return `Jesteś z nami już ${daysDifference} dni`;
    }
  };



  render() {
    const { userData } = this.props;
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
                  fullWidth
                  open={this.state.open}
                  keepMounted
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>Wybierz avatar</DialogTitle>
                  <div className={styles.avatarsContainer}>
                    <DialogContent className={styles.avatarsImages}>
                      {images.map((image, index) => (
                        <UserAvatar
                          image={image}
                          id={index}
                          key={index}
                          activeAvatarId={this.state.activeAvatarId}
                          handleOnImageClick={this.handleOnImageClick}
                        />
                      ))}
                      <div className={styles.addButton}>
                        <Button onClick={this.handleOnImageAdd}>Dodaj</Button>
                      </div>
                    </DialogContent>
                  </div>
                  <div className={styles.dialogTop}>
                    <DialogTitle>
                      lub dodaj swoje zdjęcie
                      <IconButton onClick={this.showFileWindow}>
                        <AddCircleOutlineIcon
                          color="primary"
                          style={{ width: "40", height: "40" }}
                        ></AddCircleOutlineIcon>
                      </IconButton>
                    </DialogTitle>
                  </div>
                  <Dialog
                    open={this.state.openFileWindow}
                    keepMounted
                    onClose={this.handleClose}
                  >
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                      <Input type="file" onChange={this.handleOnChange} />

                      <Button onClick={this.handleOnClick}>Dodaj</Button>
                    </DialogContent>
                    <IconButton onClick={this.closeFileWindow}>
                      <CloseIcon />
                    </IconButton>
                  </Dialog>
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
              />
            </div>
            <Typography
              variant="body1"
              style={{ textAlign: "center", margin: "20px 0" }}
            >
              Witaj <span> {userData !== null ? userData.name : null}</span>
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              {this.getTimeWithUs(
                userData !== null ? userData.creationDate : null
              )}
            </Typography>
          </Grid>
        </Paper>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.users.userData,
  loggedUserId: state.users.loggedUser,
});

const mapDispatchToProps = {
  setUser,
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePanel);
