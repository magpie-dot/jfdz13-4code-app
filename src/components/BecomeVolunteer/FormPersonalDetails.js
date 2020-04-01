import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <h1>Formularz Rejestracji wolontariusza</h1>
                <TextField hintText="Wpisz adres"
                label="Adres"
                variant="outlined" 
                onChange={handleChange('adress')}
                defaultValue={values.adress}
                />
                <TextField hintText="Wpisz kod pocztowy"
                label="Kod pocztowy"
                variant="outlined" 
                onChange={handleChange('postalCode')}
                defaultValue={values.postalCode}
                />
                <TextField hintText="Wpisz numer telefonu"
                label="Numer telefonu"
                variant="outlined" 
                onChange={handleChange('phoneNumber')}
                defaultValue={values.phoneNumber}
                />
                <br/>
                <Button variant="contained" 
                        color="Secondary"
                        onClick={this.continue}>
                    Zapisz
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

export default FormPersonalDetails
