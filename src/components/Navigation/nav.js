import React from "react";
import {AppBar, Toolbar, IconButton, Divider, Typography, Drawer, Hidden, Badge, Grid} from "@material-ui/core"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MenuIcon from '@material-ui/icons/Menu'

import NavSection from "./navSection.js";
import style from './Navigation.module.css';

const listItemsForAll = [{text:'Strona główna', page:''}, {text:'Nasze zwierzaki', page:'naszezwierzaki'}, {text:'Porady behawiorysty', page:'poradybehawiorysty'}, {text:'Wesprzyj nas', page:'wesprzyjnas'}];
const listItemsForUsers = [{text:'Panel użytkownika', page:'paneluzytkownika'}, {text:'Do adopcji', page:'doadopcji'}, {text:'Zostań wolontariuszem', page:'zostanwolontariuszem'}];

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
            <Typography variant="h6" noWrap>
            4 CODE FOR ANIMALS
          </Typography>
            {/* <Typography style={{marginLeft: 45}}variant="h5" noWrap>
              4CODE FOR ANIMALS
          </Typography> */}
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
            <div className={style.navSections}>
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
      <main className="main-container">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.
        {props.children}
      </main>
    </div>
  );
}


export default ResponsiveDrawer;
