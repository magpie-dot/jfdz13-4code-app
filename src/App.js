import React, { Component } from "react";
import theme from "./theme.js";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import BecomeVolunteer from "./components/BecomeVolunteer";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import OurAnimals from "./components/OurAnimals";
import SupportUs from "./components/SupportUs";
import UserPanel from "./components/UserPanel";
import Sign from "./components/Sign";
import CssBaseline from "@material-ui/core/CssBaseline";
  

class App extends Component {
  state = {
    loading: false,
    error: null,
    favouriteAnimals: []
  };

  // componentDidMount() {
  //   fetch("https://code-for-animals-90802.firebaseio.com/animals.json")
  //     .then(response => response.json())
  //     .then(objectAnimals => {
  //       const keys = Object.keys(objectAnimals);
  //       const arrayAnimals = keys.map(key => {
  //         return {
  //           id: key,
  //           ...objectAnimals[key]
  //         };
  //       });
  //       this.setState({
  //         ...this.state,
  //         animals: arrayAnimals,
  //         loading: false
  //       });
  //     })
  //     .catch(error => this.setState(...this.state, error));
  // }

  onAddToFavourite = (animal, isFavourite) => {
    const { favouriteAnimals } = this.state;
    this.setState({
      ...this.state,
      favouriteAnimals: isFavourite
        ? [
            ...favouriteAnimals.filter(
              favouriteAnimal => favouriteAnimal.id !== animal.id
            )
          ]
        : [...favouriteAnimals, animal]
    });
  };

  render() {
    const { loading, error, favouriteAnimals} = this.state;
    return (
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
                <div>
                  <Switch>
                    <Navigation favouriteAnimals={favouriteAnimals}>
                      <Route exact path="/" component={HomePage} />
                      <Route
                        path="/naszezwierzaki"
                        component={() => (
                          <OurAnimals
                            favouriteAnimals={favouriteAnimals}
                            loading={loading}
                            error={error}
                            onAddToFavourite={this.onAddToFavourite}
                          />
                        )}
                      />
                      <Route path="/wesprzyjnas" component={SupportUs} />
                        <Route
                          path="/paneluzytkownika"
                          component={() => (
                            <UserPanel
                              favouriteAnimals={favouriteAnimals}
                            />
                          )}
                        />
                        <Route
                          path="/zostanwolontariuszem"
                          component={BecomeVolunteer}
                        />
                      <Route path="/sign-up">
                        <Sign isSignUp />
                      </Route>
                      <Route path="/sign-in">
                        <Sign />
                      </Route>
                    </Navigation>
                  </Switch>
                </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
