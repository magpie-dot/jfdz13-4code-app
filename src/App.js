import React, {Component} from 'react';
import theme from './theme.js';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ThemeProvider} from '@material-ui/core';

import BecomeVolunteer from './components/BecomeVolunteer';
import HomePage from './components/HomePage';
// import Dashboard from './components/BehavioralAdvice/dashbord';
import BehavioralAdvice from './components/BehavioralAdvice';
import Navigation from './components/Navigation';
import OurAnimals from './components/OurAnimals';
import SupportUs from './components/SupportUs';
import ToAdoption from './components/ToAdoption';
import UserPanel from './components/UserPanel';
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends Component {

    state = {
        animals: [],
        error: null,
    };

    componentDidMount() {
        fetch('animals.json')
            .then(response => response.json())
            .then(response => this.setState({
                ...this.state,
                animals: response,
            }))
            .catch(error => this.setState(
                ...this.state,
                error,
            ))
    }

    getHomePageAnimals = animals => animals.slice(0,4);

    render() {
        const { animals } = this.state;

        return (
            <BrowserRouter>
                <CssBaseline/>
                <ThemeProvider theme={theme}>
                    <div>
                        <Navigation>
                            <Switch>
                                <Route exact path="/" component={() => <HomePage animals={this.getHomePageAnimals(animals)}/>}/>
                                <Route path="/naszezwierzaki" component={() => <OurAnimals animals={animals}/>}/>
                                <Route path="/poradybehawiorysty" component={BehavioralAdvice}/>
                                <Route path="/wesprzyjnas" component={SupportUs}/>
                                <Route path="/paneluzytkownika" component={UserPanel}/>
                                <Route path="/doadopcji" component={ToAdoption}/>
                                <Route path="/zostanwolontariuszem" component={BecomeVolunteer}/>
                            </Switch>
                        </Navigation>

                    </div>
                </ThemeProvider>
            </BrowserRouter>
        );
    }

}

export default App;
