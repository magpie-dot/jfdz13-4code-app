import React from "react";
import { Menu, Button, IconButton, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavSection from "./NavSection.js";
import { NavLink } from "react-router-dom";
import firebase from "../Firebase";
import style from "./Navigation.module.css";
import UserProvider from "../UserProvider";

const listItemsForAll = [
  { text: "Nasze zwierzaki", page: "naszezwierzaki" },
  { text: "Jak nam pomóc?", page: "wesprzyjnas" },
];
const listItemsForUsers = [
  { text: "Panel użytkownika", page: "paneluzytkownika" },
  { text: "Zostań wolontariuszem", page: "zostanwolontariuszem" },
];

const Nav = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <div>
        <UserProvider>
          {(user) => {
            return (
              <>
                <nav>
                  <div>
                    <IconButton
                      color="inherit"
                      edge="start"
                      onClick={handleClick}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <NavSection
                        listItems={listItemsForAll}
                        handleClose={handleClose}
                      />
                      {user ? (
                        <NavSection
                          listItems={listItemsForUsers}
                          handleClose={handleClose}
                        />
                      ) : null}
                      {user ? (
                        <MenuItem onClick={handleClose}>
                          <NavLink
                            className="link"
                            exact
                            to={`/`}
                            onClick={handleSignOut}
                          >
                            {" "}
                            Wyloguj się
                          </NavLink>
                        </MenuItem>
                      ) : (
                        <MenuItem onClick={handleClose}>
                          <NavLink className="link" exact to={"/sign-in"}>
                            Zaloguj się
                          </NavLink>
                        </MenuItem>
                      )}
                    </Menu>
                  </div>
                </nav>
              </>
            );
          }}
        </UserProvider>
      </div>
    </>
  );
};

export default Nav;
