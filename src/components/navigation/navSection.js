import React from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PetsIcon from '@material-ui/icons/Pets';
import style from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const NavSection = ({listItems, closeDrawer}) => (
    <div className={style.listItems}>
      <List>
        {listItems.map((item) => (
          <NavLink className={style.link} exact to={`/${item.page}`} onClick={closeDrawer}>
          <ListItem button key={item.text}>
            <ListItemIcon><PetsIcon style={{ fontSize: 30 }} className={style.petIcon}/></ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  export default NavSection