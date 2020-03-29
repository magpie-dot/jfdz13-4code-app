// import React, { Component, useState } from "react";
// import style from "./OurAnimals.module.css";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { typography } from "@material-ui/system";
// import Grid from "@material-ui/core/Grid";
// import { Button } from "@material-ui/core";
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import Dialog from '@material-ui/core/Dialog';
// import CloseIcon from '@material-ui/icons/Close';
// import { withStyles } from '@material-ui/core/styles';
// import AnimalCard from "./AnimalCard";


// const styles = (theme) => ({
//     root: {
//       margin: 0,
//       padding: theme.spacing(2),
//     },
//     closeButton: {
//       position: 'absolute',
//       right: theme.spacing(1),
//       top: theme.spacing(1),
//       color: theme.palette.grey[500],
//     },
//   });

//   const DialogTitle = withStyles(styles)((props) => {
//     const { children, classes, onClose, ...other } = props;
//     return (
//       <MuiDialogTitle disableTypography className={classes.root} {...other}>
//         <Typography variant="h6">{children}</Typography>
//         {onClose ? (
//           <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//             <CloseIcon />
//           </IconButton>
//         ) : null}
//       </MuiDialogTitle>
//     );
//   });
  
//   const DialogContent = withStyles((theme) => ({
//     root: {
//       padding: theme.spacing(2),
//     },
//   }))(MuiDialogContent);
  
//   const DialogActions = withStyles((theme) => ({
//     root: {
//       margin: 0,
//       padding: theme.spacing(1),
//     },
//   }))(MuiDialogActions);


// export default function BigAnimalCard() {

//  const [open, setOpen] = React.useState(false);

//  const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };    

//     return (
//         <div>
//         <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//           Modal title
//         </DialogTitle>
//         <DialogContent dividers>
//           <Typography gutterBottom>
//             {props.descriptions.descriptionExtended}
//           </Typography>
//           </DialogContent>
//       </Dialog>
//             <AnimalCard onClicked = {this.handleClickOpen} />
//         </div>
//     )
// }



