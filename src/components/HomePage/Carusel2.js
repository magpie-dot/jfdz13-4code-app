import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {NavLink} from 'react-router-dom'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Punio, lat 8',
    imgPath:
    "images/zd21.jpg" ,
     
  },
  {
    label: 'Royal, lat 3',
    imgPath:
     "images/zdj2.jpg" ,
     
  },
  {
    label: 'Misio, lat 11',
    imgPath:
    "images/zdj69.jpg" ,
  },
 
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    paddingLeft: theme.spacing(4),

  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 440,
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
 
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
               <NavLink className="link" exact to={"/naszezwierzaki"}>
              <img className={classes.img} src={step.imgPath} alt={step.label} />
              </NavLink>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
     
        
      
    </div>
  );
}

export default SwipeableTextMobileStepper;