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



const useStyles = makeStyles(theme => ({
  root: {
    width: 350,
    position: "relative",
    top: 60,
    minHeight: 420,
    marginBottom: 20,
    marginRight: 20,
    display: "inline-block",

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
  typography: {
    fontSize:"2rem"
  }
}));

export default function AnimalCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [like, setLike] = useState("#3c3d47");
  const [count, setCount] = useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader className = {classes.typography}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.data.type === "pies" ? "P" : "K"}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
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
            <p>counter:{count}</p>
        <IconButton
   
          aria-label="add to favorites"
          style={{ color: like }}
          onClick={() => {
            setLike("#fda8c9");
            setCount(count + 1);
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{ color: " #3c3d47" }}>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph></Typography>
          <Typography paragraph color = "">
            {props.descriptions.descriptionExtended}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

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
