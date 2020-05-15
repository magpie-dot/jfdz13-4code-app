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
import UserProvider from "../UserProvider"


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
        variant='outlined'
        style={{marginRight:10, borderColor:'white', color:'white', fontWeight:'bold', letterSpacing:'1px'}}
          onClick={handleSignOut}
        >
          Wyloguj się
        </Button>
      ) : (
          <Button variant="contained" color="secondary"
          style={{ fontWeight:'bold', letterSpacing:'1px'}}
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
