import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pie from "./Pie"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(2),
    height: 200,
    width: 1400,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    height: 400,
    width: 200,
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
          <Paper className={classes.paper1}>Ruszyła unikalna ogólnopolska wyszukiwarka zwierząt do adopcji!</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.pape2}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.pape3}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper4}>xs</Paper>
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