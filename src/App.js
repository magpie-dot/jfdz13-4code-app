import React from 'react';
import './App.css';
import ResponsiveDrawer from './components/Navigation/nav.js'
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import theme from './theme.js'


function App() {
  return (
    <ThemeProvider theme={theme}>
    <ResponsiveDrawer/>
    </ThemeProvider>
  );
}

export default App;
