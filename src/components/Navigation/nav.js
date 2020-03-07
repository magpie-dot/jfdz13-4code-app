import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavSection from "./navSection.js";
import style from './Navigation.module.css';

const listItemsForAll = ['Strona główna', 'Nasze zwierzaki', 'Porady behawiorysty', 'Wesprzyj nas'];
const listItemsForUsers = ['Panel użytkownika', 'Do adopcji', 'Zostań wolontariuszem'];

function ResponsiveDrawer(props) {
  const { container } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <AppBar position="fixed" className>

        <Toolbar>
          <Hidden smUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography style={{marginLeft: 45}}variant="h5" noWrap>
              4CODE FOR ANIMALS
          </Typography>
            <div>
              <IconButton aria-label="show 2 new notifications" color="inherit">
                <Badge badgeContent={2} color="secondary">
                  <FavoriteIcon style={{ fontSize: 30 }} />
                </Badge>
              </IconButton>
              <IconButton
                color="inherit">
                <AccountCircleIcon style={{ fontSize: 34 }} />
              </IconButton>
            </div>
          </Grid>
        </Toolbar>

      </AppBar>
      <nav>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            <div>
              <NavSection listItems={listItemsForAll} />
              <Divider />
              <NavSection listItems={listItemsForUsers} />
            </div>
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            variant="permanent"
            open>
            <div className={style.navSections}>
              <NavSection listItems={listItemsForAll} />
              <Divider />
              <NavSection listItems={listItemsForUsers} />
            </div>
            <img className={style.image} src="images/pet2.png"/>
          </Drawer>
        </Hidden>
      </nav>

    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default ResponsiveDrawer;
