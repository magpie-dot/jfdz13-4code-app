import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ResponsiveDrawer from './components/navigation/nav.js'
import { ThemeProvider } from '@material-ui/core';
import theme from './theme.js'
import OurAnimals from './components/OurAnimals/ourAnimals'
import BecomeVolunteer from './components/BecomeVolunteer/becomeVolunteer';
import ToAdoption from './components/ToAdoption/toAdoption';
import UserPanel from './components/UserPanel/userPanel';
import BehavioralAdvice from './components/BehavioralAdvice/behavioralAdvice';
import SupportUs from './components/SupportUs/supportUs';
import HomePage from './components/HomePage/homePage';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div>
        <ResponsiveDrawer>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/naszezwierzaki" component={OurAnimals} />
          <Route path="/poradybehawiorysty" component={BehavioralAdvice} />
          <Route path="/wesprzyjnas" component={SupportUs} />
          <Route path="/paneluzytkownika" component={UserPanel} />
          <Route path="/doadopcji" component={ToAdoption} />
          <Route path="/zostanwolontariuszem" component={BecomeVolunteer} />
        </Switch>
        </ResponsiveDrawer>
        
      </div>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
