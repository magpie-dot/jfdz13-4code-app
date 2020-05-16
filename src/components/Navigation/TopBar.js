import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Badge,
  Grid,
  Button,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/Menu";
import firebase from "../Firebase";
import UserProvider from "../UserProvider";
import { connect } from "react-redux";

class TopBar extends React.Component {
  state = {
    ref: null,
    user: null,
  };

  componentDidMount() {
    const ref = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });

    this.setState({ ref });
  }

  componentWillUnmount() {
    this.state.ref();
  }

  handleSignOut = () => {
    firebase.auth().signOut();
    window.location = "/";
  };

  handleSignIn = () => {
    window.location = "/sign-in";
  };

  render() {
    return (
      <UserProvider>
        {(user) => {
          return (
            <AppBar position="fixed">
              <Toolbar>
                <Hidden mdUp implementation="css">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={this.props.handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                </Hidden>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography
                    style={{ marginLeft: 40, color: "blueGrey" }}
                    variant="h6"
                    noWrap
                  >
                    4 CODE FOR ANIMALS
                  </Typography>
                  <div>
                    {user && (
                      <>
                        <IconButton
                          aria-label="show 2 new notifications"
                          color="inherit"
                        >
                          <Badge
                            badgeContent={
                              this.props.userData &&
                              this.props.userData.favouriteAnimals
                                ? this.props.userData.favouriteAnimals.length
                                : null
                            }
                            color="secondary"
                          >
                            <FavoriteIcon style={{ fontSize: 30 }} />
                          </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                          <AccountCircleIcon style={{ fontSize: 34 }} />
                        </IconButton>
                      </>
                    )}

                    {user ? (
                      <Button
                        variant="outlined"
                        style={{
                          marginRight: 10,
                          borderColor: "white",
                          color: "white",
                          fontWeight: "bold",
                          letterSpacing: "1px",
                        }}
                        onClick={this.handleSignOut}
                      >
                        Wyloguj się
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ fontWeight: "bold", letterSpacing: "1px" }}
                        onClick={this.handleSignIn}
                      >
                        Zaloguj się
                      </Button>
                    )}
                  </div>
                </Grid>
              </Toolbar>
            </AppBar>
          );
        }}
      </UserProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.users.userData,
  loggedUserId: state.users.loggedUser,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
