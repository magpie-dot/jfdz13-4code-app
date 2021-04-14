import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Carusel from "./Carusel";
import Carusel2 from "./Carusel2";
import Carusel3 from "./Carusel3";
import Pie from "./Pie";
import style from "./HomePage.module.css";
import AlignList from "./AlignList";
import BasicTextFields from "./TextField";
import Box from "./Box"; 

export default function HomePage() {

  return (
    <div >
      <div className={style.top}>
        <img className={style.ilu} src="images/dogsy2.png" alt="psy na spacerze" />
        <p>
          Ruszyła unikalna ogólnopolska wyszukiwarka zwierząt do adopcji!
        </p>
        <p>
          Adoptuj, nie kupuj! – Rozpoczynając poszukiwania przyjaciela, można
          określić kryteria, takie jak rozmiar, płeć, wiek oraz miejsce pobytu.
          Wyszukiwarka pokaże zwierzęta odpowiadające tym kryteriom.
        </p>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper >
            <Carusel />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper >
            <Carusel2 />
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper >
            <Carusel3 />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper >
            
            <AlignList />
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper>
          <BasicTextFields/>
            <Pie/> 
            <Box/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
