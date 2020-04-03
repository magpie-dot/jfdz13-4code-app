import React, { useState } from "react";
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
  Dialog,

} from "@material-ui/core";

import ShareIcon from "@material-ui/icons/Share";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { withStyles } from "@material-ui/core/styles";

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
  avatar: {
    backgroundColor: "#3cc1fa"
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

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function AnimalCard(props) {
  const classes = useStyles();
  const [like, setLike] = useState("#3c3d47");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.data.type === "pies" ? "P" : "K"}
          </Avatar>
        }
        title={props.data.name}
        subheader={props.data.age}
      />
      <CardMedia
        className={classes.media}
        image={props.data.imageUrl}
        title={props.data.name}
      />
      <CardContent>
        <Typography color="textSecondary" component="p">
          {props.descriptions.descriptionBasic}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ position: "absolute", bottom: 10 }}>
        <IconButton
          aria-label="add to favorites"
          style={{ color: like }}
          onClick={() => {
            setLike("#fda8c9");
            props.onAddToFavourite();
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{ color: " #3c3d47" }}>
          <ShareIcon />
        </IconButton>
        <Button
          variant="outlined"
          color="#3cc1fa"
          onClick={handleClickOpen}
          className={classes.openButton}
        >
          Więcej informacji
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            key={props.data.id}
          >
            {props.data.name}
            <br />
            {props.data.age}
            <div>
              <img
                src={props.data.imageUrl}
                style={{ width: "auto", maxWidth: 530, height: 350 }}
              />
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <Typography style={{ textAlign: "justify", padding: 15 }}>
              {props.descriptions.descriptionBasic}
              {props.descriptions.descriptionExtended}
            </Typography>
          </DialogContent>
        </Dialog>
      </CardActions>
    </Card>
  );
}
