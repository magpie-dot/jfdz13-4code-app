import React from "react";
import { MenuItem } from "@material-ui/core";
import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const NavSection = ({ listItems, handleClose }) => (
  <div>
    {listItems.map((item, index) => (
      <MenuItem key={index} onClick={handleClose}>
        <NavLink className="link" exact to={`/${item.page}`}>
          {item.text}
        </NavLink>
      </MenuItem>
    ))}
  </div>
);

export default NavSection;
