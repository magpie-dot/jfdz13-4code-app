import React from 'react';
import theme from './theme.js';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';

import BecomeVolunteer from './components/BecomeVolunteer';
//import BehavioralAdvice from './components/BehavioralAdvice';
import Dashboard from './components/BehavioralAdvice/dashbord';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import OurAnimals from './components/OurAnimals';
import SupportUs from './components/SupportUs';
import ToAdoption from './components/ToAdoption';
import UserPanel from './components/UserPanel';
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <BrowserRouter>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
      <div>
        <Navigation>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/naszezwierzaki" component={OurAnimals} />
          <Route path="/poradybehawiorysty" component={Dashboard} />
          <Route path="/wesprzyjnas" component={SupportUs} />
          <Route path="/paneluzytkownika" component={UserPanel} />
          <Route path="/doadopcji" component={ToAdoption} />
          <Route path="/zostanwolontariuszem" component={BecomeVolunteer} />
        </Switch>
        </Navigation>
        
        </div>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
