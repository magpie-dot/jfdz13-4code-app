import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pie from "./Pie";
import ChartPiramid from "./ChartPiramid";
import style from "./Blog.module.css";
import Carusel from "./Carusel";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(4),
    height: 480,
    width: 405,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(4),
  
    height: 480,
    width: 660,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper3: {
    padding: theme.spacing(4),
    height: 560,
    width: 380,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper4: {
    padding: theme.spacing(4),
    height: 530,
    width: 1045,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  paper5: {
    padding: theme.spacing(2),
    height: 500,
    width: 380,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  description: {
    color: 'blue',
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper1}> <h2>Ostatnio trafili do naszej Fundacji. Pomóż im znaleźć ciepły dom!</h2>
         
              <Carusel/>
             
         
            
          
          
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper2}>
              <h2>Ruszyła unikalna ogólnopolska wyszukiwarka zwierząt do adopcji!</h2>
              <div className={style.description}>Adoptuj, nie kupuj! – to hasło słyszymy coraz częściej,
                 a posiadanie adoptowanego zwierzaka staje się częścią miejskiego 
                 lifestyle’u, świadczy o empatii, odpowiedzialności i świadomości 
                 problemów współczesnego świata. Tak jak bycie eko. </div>
                 <h3>Rozpoczynając poszukiwania przyjaciela, można określić kryteria, 
                   takie jak rozmiar, płeć, wiek oraz miejsce pobytu. Wyszukiwarka pokaże 
                   zwierzęta odpowiadające tym kryteriom. Każde zwierzę ma swój własny 
                   profil, z opisem i zdjęciami.

 Można też zdecydować, czy 
chcemy adoptować zwierzaka prosto ze 
schroniska czy też szukamy takiego, który 
przybywa w domu tymczasowym. Jeśli zależy nam na zwierzaku
 “sprawdzonym” w warunkach domowych, ta ostatnia opcja jest warta rozważenia.




</h3></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper3}><ChartPiramid/></Paper>
        </Grid>
      </Grid>

      
        <Grid item xs>
          <Paper className={classes.paper4}></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper5}><Pie/></Paper>
        </Grid>
      
    </div>
  );
}