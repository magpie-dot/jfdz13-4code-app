import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails  extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <h1>Formularz Rejestracji wolontariusza</h1>
                <TextField hintText="Wpisz imię"
                label="Imię"
                variant="outlined" 
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
                />
                <br/>
                <TextField hintText="Wpisz nazwisko"
                label="Nazwisko"
                variant="outlined" 
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
                />
                <br/>
                <TextField hintText="Wpisz adres"
                label="Adres"
                variant="outlined" 
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
                />
                <TextField hintText="Wpisz kod pocztowy"
                label="Kod pocztowy"
                variant="outlined" 
                onChange={handleChange('postalCode')}
                defaultValue={values.postalCode}
                />
                <TextField hintText="Wpisz email"
                label="Email"
                variant="outlined" 
                onChange={handleChange('email')}
                defaultValue={values.email}
                />
                <TextField hintText="Wpisz numer telefonu"
                label="Numer telefonu"
                variant="outlined" 
                onChange={handleChange('phoneNumber')}
                defaultValue={values.phoneNumber}
                />
                <br/>
                <Button variant="contained" 
                        color="Primary"
                        onClick={this.continue}>
                    Zapisz
                </Button>
                    

            

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
