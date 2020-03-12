import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ResponsiveDrawer from './components/Navigation/nav.js'
import { ThemeProvider } from '@material-ui/core';
import theme from './theme.js'
import OurAnimals from './pages/naszeZwierzaki'
import BecomeVolunteer from './pages/zostanWolontariuszem';
import ToAdoption from './pages/doAdopcji';
import UserPanel from './pages/panelUzytkownika';
import BehavioralAdvice from './pages/poradyBehawiorysty';
import SupportUs from './pages/wesprzyjNas';
import HomePage from './pages/stronaGlowna';

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
