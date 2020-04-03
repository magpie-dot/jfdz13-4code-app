import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { StylesProvider } from '@material-ui/core';
import styles from './formStyle.css'




export class FormUserDetails  extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

        
    }
    

    render() {
        const { values, handleChange } = this.props;

       
        return (
            
            
                <Grid container spacing={3}>
                <Grid item item xs={6} sm={6}>
                <Paper elevation={3} className={styles.paper}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <div className={styles.form}>
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
                <TextField hintText="Wpisz email"
                label="Email"
                variant="outlined" 
                onChange={handleChange('email')}
                defaultValue={values.email}
                />
                <br/>
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
                <Button variant="contained" 
                        color="Primary"
                        onClick={this.continue}>
                    Zapisz
                </Button>
                </div>
                </Grid>
                </Paper>
                </Grid>
                    
           

                <Grid item xs={6}>
                    <div className={styles.picture}>
                        <img className={styles.dog} src='images/zdj2.jpg'></img>
                    </div>
                </Grid>
                </Grid>
               
                
            
        )
    }
}

export default FormUserDetails
