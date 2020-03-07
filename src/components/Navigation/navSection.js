import React from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PetsIcon from '@material-ui/icons/Pets';
import style from './Navigation.module.css'

const NavSection = ({listItems}) => (
    <div className={style.listItems}>
      <List>
        {listItems.map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><PetsIcon style={{ fontSize: 30 }} className={style.petIcon}/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  export default NavSection