import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import style from "./Dashboard.module.css";
import Carusel from "./Carusel";
import Carusel2 from "./Carusel2";
import Carusel3 from "./Carusel3";
import Pie from "./Pie";
import AlignList from "./AlignList";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 20,
    marginRight: 20
  },
  paper1: {
    padding: theme.spacing(),
    height: 100,
    width: 1460,
    textAlign: "left",
    marginTop: 20,

    color: theme.palette.text.secondary
  },
  paper2: {
    padding: theme.spacing(2),

    height: 340,
    textAlign: "center",
    color: theme.palette.text.secondary
  },

  paper5: {
    padding: theme.spacing(3),
    height: 500,
    textAlign: "left",
    textColor: "black",
    fontSize: 19,
    fontFamily: "'Hind',sans-serif",
    color: theme.palette.text.secondary
  },
  paper6: {
    padding: theme.spacing(2),
    textColor: "grey",
    
 
  },

  description: {
    color: "blue"
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={style.top}>
        {" "}
        <img className={style.ilu} src="images/dogsy2.png" alt="psy na spacerze" />
        <p
          style={{
            fontSize: 30,
            marginTop: 5,
            color: "black",
            marginBottom: 1,
            fontFamily: "'Hind',sans-serif",
            textAlign: "center"
          }}
        >
          Ruszyła unikalna ogólnopolska wyszukiwarka zwierząt do adopcji!{" "}
        </p>
        <p
          style={{
            fontSize: 16,
            color: "grey",
            marginTop: 0,
            fontFamily: "roboto",
            textAlign: "left",
            width: 800,
            marginLeft: 170
          }}
        >
          Adoptuj, nie kupuj! – Rozpoczynając poszukiwania przyjaciela, można
          określić kryteria, takie jak rozmiar, płeć, wiek oraz miejsce pobytu.
          Wyszukiwarka pokaże zwierzęta odpowiadające tym kryteriom.
        </p>{" "}
      </div>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper className={classes.paper2}> <Carusel /> 
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper2}>
            <Carusel2 />
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper2}>
            <Carusel3 />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper5}>
           
            <AlignList />
          </Paper>
        </Grid>

        <Grid item xs={4}>
   
          <Paper className={style.paper6}>
         
            <Pie/> 
            <img className={style.down} src="images/womendogrb.png" alt="dziewczyna z psem" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
