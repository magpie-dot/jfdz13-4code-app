import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",

    height: "20%",

    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem
        alignItems="flex-start"
        style={{ height: 50, marginBottom: 35}}
      >
        <ListItemAvatar>
          <Avatar alt="Kasia" src="images/Kasia.png" />
        </ListItemAvatar>
        <ListItemText
          style={{ fontSize: 13 }}
          primary="Pracują tam wspaniali ludzie, zaangażowani w pracę wypełnioną miłością do zwierząt."
          secondary={
            <React.Fragment>
              <Typography
                style={{ fontSize: 15, color: "#EA4C89" }}
                component="span"
                color="#FDA8C9"
              >
                Katarzyna Bęś-Laskowska, tenisistka
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem
        alignItems="flex-start"
        style={{ height: 50, marginBottom: 35 }}
      >
        <ListItemAvatar>
          <Avatar alt="Monika" src="images/Monika.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Super fundacja!Pomagają zwierzakom odzyskać nadzieję na lepszy los."
          secondary={
            <React.Fragment>
              <Typography
                style={{ fontSize: 15, color: "#EA4C89" }}
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
      <ListItem
        alignItems="flex-start"
        style={{ height: 50, marginBottom: 35 }}
      >
        <ListItemAvatar>
          <Avatar alt="Kamil" src="images/Kamil.png" />
        </ListItemAvatar>
        <ListItemText
          style={{ fontSize: 20 }}
          primary="Tak trzymać! Wasza misja jest ważna."
          secondary={
            <React.Fragment>
              <Typography
                style={{ fontSize: 15, color: "#EA4C89" }}
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Kamil Lubowidzki, strażak
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem
        alignItems="flex-start"
        style={{ height: 50, marginBottom: 35 }}
      >
        <ListItemAvatar>
          <Avatar alt="Aga" src="images/Aga.png" />
        </ListItemAvatar>
        <ListItemText
          style={{ fontSize: 20 }}
          primary="Niesamowici! Ratują zwierzaki i nie są obojętni na ich krzywdę. "
          secondary={
            <React.Fragment>
              <Typography
                style={{ fontSize: 15, color: "#EA4C89" }}
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Agnieszka Olesiejuk, siatkarka
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem
        alignItems="flex-start"
        style={{ height: 50, marginBottom: 35 }}
      >
        <ListItemAvatar>
          <Avatar alt="Paweł" src="images/Pawel.png" />
        </ListItemAvatar>
        <ListItemText
          style={{ fontSize: 20 }}
          primary="Wspaniała ekipa i projekt!!!"
          secondary={
            <React.Fragment>
              <Typography
                style={{ fontSize: 15, color: "#EA4C89" }}
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Paweł Racki, mentor
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
