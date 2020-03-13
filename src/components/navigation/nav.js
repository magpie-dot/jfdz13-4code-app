import React from "react";
import { Divider, Drawer, Hidden } from "@material-ui/core";
import NavSection from "./navSection.js";
import style from "./Navigation.module.css";
import TopBar from "./topBar.js";

const listItemsForAll = [
  { text: "Strona główna", page: "" },
  { text: "Nasze zwierzaki", page: "naszezwierzaki" },
  { text: "Porady behawiorysty", page: "poradybehawiorysty" },
  { text: "Wesprzyj nas", page: "wesprzyjnas" }
];
const listItemsForUsers = [
  { text: "Panel użytkownika", page: "paneluzytkownika" },
  { text: "Do adopcji", page: "doadopcji" },
  { text: "Zostań wolontariuszem", page: "zostanwolontariuszem" }
];

function ResponsiveDrawer(props) {
  const { container } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <TopBar handleDrawerToggle={handleDrawerToggle} />

      <nav>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
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
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer variant="permanent" open>
            <div className={style.navSections}>
              <NavSection listItems={listItemsForAll} />
              <Divider />
              <NavSection listItems={listItemsForUsers} />
              <img className={style.logo} src="images/logo_grey.png" />
              <img className={style.logoText} src="images/name_grey.png" />
            </div>
          </Drawer>
        </Hidden>
      </nav>
      <main className="main-container small">{props.children}</main>
    </div>
  );
}

export default ResponsiveDrawer;
