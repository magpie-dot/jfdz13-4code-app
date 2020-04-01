import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //TU PRZESYŁANIE DANYCH//
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
         return (
            <MuiThemeProvider>
                <React.Fragment>
                <h1>Dziękujemy za przesłanie danych</h1>
                <p>Potwierdzenie rejestracji zostanie przesłane na Twój ardes email.</p>
                
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success