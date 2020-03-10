import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ResponsiveDrawer from './components/Navigation/nav.js'
import { ThemeProvider } from '@material-ui/core';
import theme from './theme.js'
import OurAnimals from './pages/naszeZwierzaki'

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div>
        <ResponsiveDrawer>
          <Switch>
          <Route path="" component={OurAnimals} />
          <Route path="/naszezwierzaki" component={OurAnimals} />
          <Route path="/poradybehawiorysty" component={OurAnimals} />
          <Route path="/wesprzyjnas" component={OurAnimals} />
          <Route path="/paneluzytkownika" component={OurAnimals} />
          <Route path="/doadopcji" component={OurAnimals} />
          <Route path="/zostanwolontariuszem" component={OurAnimals} />
        </Switch>
        </ResponsiveDrawer>
        
      </div>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
