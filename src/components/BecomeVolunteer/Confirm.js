import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem, ListItemText } from '@material-ui/core';
// import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button';


export class Confirm extends Component {
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
        const { values: { firstName, lastName, adress, postalCode, email, phoneNumber } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <h1>Potwierdź dane</h1>
                <List>
                    <ListItem>
                    <ListItemText primary="Imię"
                    secondary={firstName} />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Nazwisko"
                    secondary={lastName} />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Adres"
                    secondary={adress} />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Kod pocztowy"
                    secondary={postalCode} />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Adres email"
                    secondary={email} />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Numer telefonu"
                    secondary={phoneNumber} />
                    </ListItem>
                </List>
                <Button variant="contained" 
                        color="Secondary"
                        onClick={this.continue}>
                    Potwierdź
                </Button><br/>
                <Button variant="contained" 
                        color="Primary"
                        onClick={this.back}>
                    Wróć
                </Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Confirm
