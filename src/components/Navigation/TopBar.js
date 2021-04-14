import React from "react";
import Nav from "./Nav";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Grid,
  Button,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import firebase from "../Firebase";
import UserProvider from "../UserProvider";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class TopBar extends React.Component {
  state = {
    ref: null,
    user: null,
    open: false,
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
      <>
        <UserProvider>
          {(user) => {
            return (
              <AppBar position="fixed">
                <Toolbar>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <NavLink className="link" exact to={`/`}>
                      <img src="images/logo-test.png" />
                    </NavLink>
                    <div>
                      {user && (
                        <>
                          <IconButton
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
                        <Nav />
                    </div>
                  </Grid>
                </Toolbar>
              </AppBar>
            );
          }}
        </UserProvider>
        <main className="main-container small">{this.props.children}</main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.users.userData,
  loggedUserId: state.users.loggedUser,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
