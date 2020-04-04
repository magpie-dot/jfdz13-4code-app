import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import style from "./Pie.module.css";

import Carusel from "./Carusel";
import Carusel2 from "./Carusel2";
import Carusel3 from "./Carusel3";
import Pie from './Pie';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  paper1: {
    padding: theme.spacing(),
    height: 100,
    width: 1460,
    textAlign: 'left',
    marginTop: 20,
   
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
  
    height: 350,
    width: 475,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper3: {
    padding: theme.spacing(2),
    height: 350,
    width: 475,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper4: {
    padding: theme.spacing(2),
    height: 350,
    width: 475,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  paper5: {
    padding: theme.spacing(2),
    height: 300,
    width: 620,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  paper6: {
    padding: theme.spacing(2),
    height: 200,
    width: 800,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  
  description: {
    color: 'blue',
  },

 
}));

export default function Dashboard() {
  const classes = useStyles();

  return (

    
         
                 
    <div className={classes.root}>
     <div className={style.top}> <img  className={style.ilu} src="images/dogsy2.png" />
           <p style={{fontSize: 30, marginTop: 5,color: 'black', marginBottom: 1, fontFamily: "'Hind',sans-serif",textAlign: "center",}}>Ruszyła unikalna ogólnopolska wyszukiwarka zwierząt do adopcji! </p> 
              <p style={{fontSize: 20, color: 'grey', marginTop: 0, fontFamily: "'Hind',sans-serif",textAlign:"center", width: 1000,marginLeft: 40,}}>Adoptuj, nie kupuj! – Rozpoczynając poszukiwania przyjaciela, można określić kryteria, takie jak rozmiar, płeć, wiek oraz miejsce pobytu. Wyszukiwarka pokaże zwierzęta odpowiadające tym kryteriom. 
               </p>   
               </div>
      <Grid container spacing={2}>
      
       
        <Grid item >
          <Paper className={classes.paper2}>   <Carusel/>
              </Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper3}>   
                 
         
         <Carusel2/>
     </Paper>
        </Grid>
      

      
        <Grid item >
          <Paper className={classes.paper4}><Carusel3/></Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper5}><Pie/></Paper>
        </Grid>
        <Grid item >
          <Paper className={classes.paper6}><h3>Czy znacie bardziej uniwersalny, wygodny, a
           jednocześnie elegancki fason? Sukienka kopertowa nie wyklucza żadnej sylwetki, nie dyskryminuje ze względu na rozmiar, wielkość biustu, wzrost czy wiek. 
          Dopasowuje się do każdej kobiety i na każdej świetnie leży.</h3><p><img  className={style.logo} src="images/ilu.png" /></p></Paper>
        </Grid>
      </Grid>
    </div>
  );
}