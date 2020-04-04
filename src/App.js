import React, {Component} from 'react';
import theme from './theme.js';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ThemeProvider} from '@material-ui/core';
import BecomeVolunteer from './components/BecomeVolunteer';
import BehavioralAdvice from './components/BehavioralAdvice';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import OurAnimals from './components/OurAnimals';
import SupportUs from './components/SupportUs';
import UserPanel from './components/UserPanel';
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends Component {
    state = {
        animals: [],
        loading: true,
        error: null,
        favouriteAnimals: [],

    };

    componentDidMount() {
        fetch("animals.json")
            .then(response => response.json())
            .then(response =>
                this.setState({
                    ...this.state,
                    animals: response,
                    loading: false
                })
            )
            .catch(error => this.setState(...this.state, error));
    }

    onAddToFavourite = (animal, isFavourite) => {
        const { favouriteAnimals } = this.state;
        this.setState({
            ...this.state,
            favouriteAnimals: isFavourite
                    ? [...favouriteAnimals.filter(favouriteAnimal => favouriteAnimal.id !== animal.id)]
                    : [...favouriteAnimals, animal],
        })
    };


    render() {
        const { animals, loading, error, favouriteAnimals } = this.state;

        return (
            <BrowserRouter>
                <CssBaseline/>
                <ThemeProvider theme={theme}>
                    <div>
                        <Navigation favouriteAnimals={favouriteAnimals}>
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                                <Route path="/naszezwierzaki" component={() => <OurAnimals animals={animals}
                                                                                           favouriteAnimals={favouriteAnimals}
                                                                                           loading={loading}
                                                                                           error={error}
                                                                                           onAddToFavourite={this.onAddToFavourite}/>}/>
                                <Route path="/poradybehawiorysty" component={BehavioralAdvice}/>
                                <Route path="/wesprzyjnas" component={SupportUs}/>
                                <Route path="/paneluzytkownika" component={UserPanel}/>
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
