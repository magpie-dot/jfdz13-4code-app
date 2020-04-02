import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pie from "./Pie"
import ChartPiramid from "./ChartPiramid"
import style from "./Blog.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(2),
    height: 300,
    width: 440,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    height: 300,
    width: 980,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper5: {
    padding: theme.spacing(2),
    height: 800,
    width: 580,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper1}> 
          <div className={style.logoContainer}>
              <img  className={style.log} src="images/zd33.jpg" />
             
         
            </div>
          
          
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper2}>
              <div><h2>Ruszyła unikalna ogólnopolska wyszukiwarka zwierząt do adopcji!</h2>
              <h3>Adoptuj, nie kupuj! – to hasło słyszymy coraz częściej,
                 a posiadanie adoptowanego zwierzaka staje się częścią miejskiego 
                 lifestyle’u, świadczy o empatii, odpowiedzialności i świadomości 
                 problemów współczesnego świata. Tak jak bycie eko. </h3>
                 <h4>Rozpoczynając poszukiwania przyjaciela, można określić kryteria, 
                   takie jak rozmiar, płeć, wiek oraz miejsce pobytu. Wyszukiwarka pokaże 
                   zwierzęta odpowiadające tym kryteriom. Każde zwierzę ma swój własny 
                   profil, z opisem i zdjęciami.

Można też zdecydować, czy 
chcemy adoptować zwierzaka prosto ze 
schroniska czy też szukamy takiego, który 
przybywa w domu tymczasowym. Jeśli zależy nam na zwierzaku
 “sprawdzonym” w warunkach domowych, ta ostatnia opcja jest warta rozważenia.




</h4></div></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper3}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper4}><ChartPiramid/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Pie/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}