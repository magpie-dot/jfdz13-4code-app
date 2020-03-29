import React, { Component, useState } from "react";
import style from "./OurAnimals.module.css";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { typography } from "@material-ui/system";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root2: {
    // margin: 0,
    // padding: theme.spacing(2),
    height:450,
    width:500
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  openButton: {
    // position: 'absolute',
    // right: theme.spacing(1),
    // top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    width: 350,
    position: "relative",
    top: 60,
    height: 470,
    marginBottom: 20,
    marginRight: 20,
    display: "inline-block",
//  position: "absolute"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
   
  },
  expand: {
    color: " #3c3d47",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#3cc1fa"
  },
  heart :{
    position: "relative",
  bottom: 10,
  },
  typography: {
    fontSize:"2rem"
  }
}));
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root2} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function AnimalCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [like, setLike] = useState("#3c3d47");
  const [open, setOpen] = React.useState(false);
 

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
      // className = {classes.typography}
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
      <CardActions disableSpacing>
        <IconButton

          aria-label="add to favorites"
          style={{ color: like }}
          onClick={() => {
            setLike("#fda8c9");
          }}
        >
          <FavoriteIcon className = {classes.heart}/>
        </IconButton>
        <IconButton aria-label="share" style={{ color: " #3c3d47" }}>
          <ShareIcon />
        </IconButton>
        <Button variant="outlined" color="#3cc1fa" onClick={handleClickOpen} className = {classes.openButton}>
       Więcej informacji
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} key= {props.data.id}>
        {props.data.name}
        {props.data.age}
        <div>
        <img src= {props.data.imageUrl} style = {{width:'auto',maxWidth:530, height:350}}/>
           </div>
        {props.descriptions.descriptionBasic}
     
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {props.descriptions.descriptionExtended}
          </Typography>
          </DialogContent>
      </Dialog>
      </CardActions>
    </Card>
  );
}


// const useStyles = makeStyles(theme => ({
//   root: {
//     width: 350,
//     position: "relative",
//     top: 60,
//     minHeight: 420,
//     marginBottom: 20,
//     marginRight: 20,
//     display: "inline-block",

//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9

//   },
//   expand: {
//     color: " #3c3d47",
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)"
//   },
//   avatar: {
//     backgroundColor: "#3cc1fa"
//   },
//   typography: {
//     fontSize:"2rem"
//   }
// }));

// export default function AnimalCard(props) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = useState(false);
//   const [like, setLike] = useState("#3c3d47");
//   const [count, setCount] = useState(0);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//       // className = {classes.typography}
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             {props.data.type === "pies" ? "P" : "K"}
//           </Avatar>
//         }
//         // action={
//         //   <IconButton aria-label="settings">
//         //     <MoreVertIcon />
//         //   </IconButton>
//         // }
//         title={props.data.name}
//         subheader={props.data.age}
//       />
//       <CardMedia
//         className={classes.media}
//         image={props.data.imageUrl}
//         title={props.data.name}
//       />
//       <CardContent>
//         <Typography color="textSecondary" component="p">
//           {props.descriptions.descriptionBasic}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//             <p>counter:{count}</p>
//         <IconButton

//           aria-label="add to favorites"
//           style={{ color: like }}
//           onClick={() => {
//             setLike("#fda8c9");
//             setCount(count + 1);
//           }}
//         >
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share" style={{ color: " #3c3d47" }}>
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph></Typography>
//           <Typography paragraph color = "">
//             {props.descriptions.descriptionExtended}
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

// class AnimalCard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       showExtended: false
//     };
//   }

//   onClicked = () => {
//     this.setState({
//       showExtended: (this.state.showExtended = true)
//     });
//   };

//   render() {
//     return (
//       <>
//         <div className="animal-card-basic">
//           <img className={style.images} src={this.props.data.imageUrl}></img>
//           <h1>{this.props.data.name}</h1>
//           <p>
//             {this.props.data.type} lat: {this.props.data.age}
//           </p>
//           <p>{this.props.descriptions.descriptionBasic}</p>
//         </div>
//         <button onClick={this.onClicked}>Pokaż więcej</button>
//         <div className="animal-card-extended">
//           {this.state.showExtended ? (
//             <p>
//               {this.props.descriptions.descriptionExtended}
//               <button onClick={this.onClicked}>Pokaż mniej</button>
//             </p>
//           ) : null}
//         </div>
//         {/* <div>
//           {this.state.showExtended ? (
//           <p>
//           {!this.props.descriptions.descriptionExtended}
//           </p>
//           )
//           : null }
//           } */}

//         {/* //     <p>{!this.props.descriptions.descriptionExtended}</p>
//         //   ) : null}  */}
// {/*
//         </div> */}
//       </>
//     )
//   }
// }

// export default AnimalCard;
