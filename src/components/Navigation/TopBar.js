import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Badge,
  Grid
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/Menu";


const TopBar = ({ handleDrawerToggle, favouriteAnimals }) => {
  return (
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
          <Typography style={{marginLeft: 40, color: 'blueGrey'}} variant="h6" noWrap>
            4 CODE FOR ANIMALS
          </Typography>
          <div>
            <IconButton aria-label="show 2 new notifications" color="inherit">
              <Badge badgeContent={favouriteAnimals} color="secondary">
                <FavoriteIcon style={{ fontSize: 30 }} />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon style={{ fontSize: 34 }} />
            </IconButton>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
