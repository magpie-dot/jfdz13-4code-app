import React from "react";
import { Divider, Drawer, Hidden } from "@material-ui/core";
import NavSection from "./NavSection.js";
import style from "./Navigation.module.css";
import TopBar from "./TopBar.js";

const listItemsForAll = [
  { text: "Strona główna", page: "" },
  { text: "Nasze zwierzaki", page: "naszezwierzaki" },
  { text: "Porady behawiorysty", page: "poradybehawiorysty" },
  { text: "Jak nam pomóc?", page: "wesprzyjnas" }
];
const listItemsForUsers = [
  { text: "Panel użytkownika", page: "paneluzytkownika" },
  { text: "Zostań wolontariuszem", page: "zostanwolontariuszem" }
];

function Navigation(props) {
  const { container } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <TopBar handleDrawerToggle={handleDrawerToggle} favouriteAnimals={props.favouriteAnimals}/>

      <nav>
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true 
            }}
          >
            <div className={style.navSections}>
              <NavSection
                closeDrawer={() => setMobileOpen(false)}
                listItems={listItemsForAll}
              />
              <Divider />
              <NavSection
                closeDrawer={() => setMobileOpen(false)}
                listItems={listItemsForUsers}
              />
            </div>
            <div className={style.logoContainer}>
              <img  className={style.logo} src="images/logo_grey.png" alt="logo"/>
              <img  className={style.logoText} src="images/name_grey.png" alt="nazwa"/>
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer variant="permanent" open>
            <div className={style.navSections}>
              <NavSection listItems={listItemsForAll} />
              <Divider />
              <NavSection listItems={listItemsForUsers} />
            </div>
            <div className={style.logoContainer}>
              <img  className={style.logo} src="images/logo_grey.png" alt="logo"/>
              <img  className={style.logoText} src="images/name_grey.png" alt="nazwa"/>
            </div>
          </Drawer>
        </Hidden>
      </nav>
      <main className="main-container small">{props.children}</main>
    </div>
  );
}

export default Navigation;
