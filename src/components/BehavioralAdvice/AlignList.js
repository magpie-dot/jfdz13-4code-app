import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import style from "./Pie.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
    height: '20%',
    
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start" style={{height:50, marginBottom: 35,}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="images/Kasia.png" />
        </ListItemAvatar>
        <ListItemText style={{fontSize: 13,}}
          primary="Pracują tam wspaniali ludzie, pełni pasji i zaangażowania pracę wypełnioną miłością do zwierzą."
          secondary={
            <React.Fragment>
              <Typography style={{fontSize: 15, color: '#EA4C89'}}
                component="span" 
              
                color="#FDA8C9"
              >
                Katarzyna Bęś-Laskowska

              </Typography>
   
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" style={{height:50, marginBottom: 35,}}>
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="images/Kasia.png" />
        </ListItemAvatar>
        <ListItemText style={{fontSize: 15,}}
          primary="Pomagają zwierzakom odzyskać nadzieję na lepszy los"
          secondary={
            <React.Fragment>
              <Typography style={{fontSize: 10,}}
                component="span"
                variant="body2"
              
                color="textPrimary"
              >
                Monika Zyznowska, piosenkarka
              </Typography>
             
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" style={{height:50, marginBottom: 35,}}>
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="images/Kasia.png" />
        </ListItemAvatar>
        <ListItemText style={{fontSize: 20,}}
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography style={{fontSize: 15,}}
                component="span"
                variant="body2"
           
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
         
            </React.Fragment>
          }
        />
         </ListItem>
            <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" style={{height:50, marginBottom: 35,}}>
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="images/Kasia.png" />
        </ListItemAvatar>
        <ListItemText style={{fontSize: 20,}}
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography style={{fontSize: 15,}}
                component="span"
                variant="body2"
           
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
         
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
