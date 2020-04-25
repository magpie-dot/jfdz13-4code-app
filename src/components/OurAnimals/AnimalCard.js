import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
  Avatar,
  CardContent,
  CardActions,
  Button,
  Dialog
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { withStyles } from "@material-ui/core/styles";
import UserProvider from "../UserProvider";

const styles = theme => ({
  root2: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  openButton: {
    color: theme.palette.grey[500]
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    width: 350,
    position: "relative",
    top: 60,
    height: 470,
    marginBottom: 20,
    marginRight: 20,
    display: "inline-block"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    color: " #3c3d47",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },

  heart: {
    position: "relative",
    bottom: 10
  },
  avatar: {
    backgroundColor: "#3cc1fa",
    marginRight: 0
  },
  typography: {
    fontSize: "2rem"
  }
}));

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root2} {...other}>
      <Typography variant="h2">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

export default function AnimalCard(props) {
  const {
    isFavourite,
    animal,
    animal: {
      data: { type, name, age, imageUrl, id },
      descriptions: { descriptionBasic, descriptionExtended }
    }
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <UserProvider>
      {user => {
        return (
          <Card className={classes.root}>
            <CardHeader
              titleTypographyProps={{ variant: "h5" }}
              subheaderTypographyProps={{ variant: "h6" }}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {type === "pies" ? "P" : "K"}
                </Avatar>
              }
              title={name}
              subheader={age}
            />
            <CardMedia
              className={classes.media}
              image={imageUrl}
              title={name}
            />
            <CardContent>
              <Typography color="textSecondary" component="p">
                {descriptionBasic}
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              style={{ position: "absolute", bottom: 10, left: 35 }}
            >
              {user ? (
                <IconButton
                  aria-label="add to favorites"
                  style={{ color: isFavourite ? "rgb(234,76,137)" : "#3c3d47" }}
                  onClick={() => {
                    props.onAddToFavourite(animal, isFavourite);
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
              ) : null}
              {user ? 
                <Button
                  variant="outlined"
                  onClick={handleClickOpen}
                  className={classes.openButton}
                >
                  Więcej informacji
                </Button>
               : 
              ( <div className = {styles.buttonNonUser}>
                <Button
                  variant="outlined"
                  onClick={handleClickOpen}
                  className={classes.openButton}
                  // style = {{display: 'flex', width:'100%', justifyContent:'center'}}
                >
                  Więcej informacji
                </Button>
                </div>)
              }

              <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                  key={id}
                >
                  {name}
                  <br />
                  {age}
                  <div>
                    <img
                      src={imageUrl}
                      style={{ width: "auto", maxWidth: 530, height: 350 }}
                      alt="zdjęcie zwierzaka"
                    />
                  </div>
                </DialogTitle>
                <DialogContent dividers>
                  <Typography style={{ textAlign: "justify", padding: 15 }}>
                    {descriptionBasic}
                    {descriptionExtended}
                  </Typography>
                </DialogContent>
              </Dialog>
            </CardActions>
          </Card>
        );
      }}
    </UserProvider>
  );
}
