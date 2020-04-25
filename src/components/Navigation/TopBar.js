import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Badge,
  Grid,
  Button
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/Menu";
import firebase from "../Firebase"; 
import Sign from "../Sign";
import UserProvider from "../UserProvider"
import {Link} from 'react-router-dom';


const TopBar = ({ handleDrawerToggle, favouriteAnimals }) => {
  const handleSignOut = () => {
    firebase.auth().signOut();
    window.location = "/";
  };
  const handleSignIn = () => {
    window.location = "/sign-in";
  };
  return (
    <UserProvider >
    {user => {
      return(
    <AppBar position="fixed">
      <Toolbar>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
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
            <IconButton aria-label="show 2 new notifications" color="inherit">
              <Badge badgeContent={favouriteAnimals.length} color="secondary">
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
        size="large"
        style={{marginRight:20}}
          onClick={handleSignOut}
        >
          Wyloguj się
        </Button>
      ) : (
          <Button variant="contained" color="secondary"
              onClick={handleSignIn}
              >
            Zaloguj się
          </Button>
          // <Link to="/sign-in">Zaloguj</Link>
      )}
        </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}}
</UserProvider >
)}

export default TopBar;
