import React from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import style from './Navigation.module.css'
import {NavLink} from "react-router-dom";


const NavSection = ({listItems, closeDrawer}) => (
    <div className={style.listItems}>
      <List>
        {listItems.map((item, index) => (
          <NavLink activeClassName={style.active} key={index} className='link' exact to={`/${item.page}`} onClick={closeDrawer}>
          <ListItem button key={item.text} style={{paddingLeft: 70}}>
            <ListItemText primary={item.text} />
          </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  export default NavSection