import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function ValidationMessage(props) {
  if (!props.valid) {
    return(
      <div className='error-msg'>{props.message}</div>
    )
  }
  return null;
}

export class Form extends React.Component {
  state = {
    username: '', usernameValid: false,
    surname: '', surnameValid: false,
    email: '', emailValid: false,
    adress: '', adressValid: false,
    phone: '', phoneValid: false,
    formValid: false,
    errorMsg: {}
  }

  validateForm = () => {
    const {usernameValid, surnameValid, emailValid, adressValid, phoneValid} = this.state;
    this.setState({
      formValid: usernameValid && surnameValid && emailValid && adressValid && phoneValid
    })
  }

  updateUsername = (username) => {
    this.setState({username}, this.validateUsername)
  }

  validateUsername = () => {
    const {username} = this.state;
    let usernameValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (username.length < 3) {
      usernameValid = false;
      errorMsg.username = 'Uzupełnij pole'
    }

    this.setState({usernameValid, errorMsg}, this.validateForm)
  }

  updateSurname = (surname) => {
    this.setState({surname}, this.validateSurname)
  }

  validateSurname = () => {
    const {surname} = this.state;
    let surnameValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (surname.length < 3) {
      surnameValid = false;
      errorMsg.surname = 'Uzupełnij pole'
    }

    this.setState({surnameValid, errorMsg}, this.validateForm)
  }

  updateEmail = (email) => {
    this.setState({email}, this.validateEmail)
  }

  validateEmail = () => {
    const {email} = this.state;
    let emailValid = true;
    let errorMsg = {...this.state.errorMsg}

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      emailValid = false;
      errorMsg.email = 'Invalid email format'
    }

    this.setState({emailValid, errorMsg}, this.validateForm)
  }

  

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
        <Paper elevation={3} style={{ padding: 20}}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
        <div>
        <h1>
          Rejestracja Wolontariusza
        </h1>
        <br></br>
        <br></br>
          <form action='#' id='js-form'>
              <TextField
              variant="outlined"
                label="Imię"
                imput="text"
                id='username' 
                name='username' 
                className='form-field'
                fullWidth
                value={this.state.username} onChange={(e) => this.updateUsername(e.target.value)} />
                < ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username} />
            <br></br>
            <br></br>
           
              <TextField
              variant="outlined"
                label="Nazwisko"
                imput="text"
                id='surname' 
                name='surname' 
                className='form-field'
                fullWidth
                value={this.state.surname} onChange={(e) => this.updateSurname(e.target.value)} />
                 < ValidationMessage valid={this.state.surnameValid} message={this.state.errorMsg.surname} />
                <br></br>
            <br></br>
            <TextField
            variant="outlined"
                label="Email"
                imput="email"
                id='email' 
                name='Email' 
                className='form-field'
                fullWidth
                value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)}/>
              < ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
              <br></br>
              <br></br>
              <TextField
                  label="Adres"
                  variant="outlined"
                  label="Adres"
                  imput="Adress"
                  id='Adress' 
                  name='Adress' 
                  className='form-field'
                  fullWidth
                />
                <br></br>
                <br></br>
                <TextField
                  label="Kod pocztowy"
                  variant="outlined"
                  fullWidth
                />
                <br></br>
                <br></br>
                <TextField
                  label="Numer telefonu"
                  variant="outlined"
                  fullWidth
                  label="Telefon"
                  imput="phone"
                  id='phone' 
                  name='phone'
                />
                <br></br>
                <br></br>
              
            <div className='form-controls'>
              <Button className='button' color="secondary" type='submit' disabled={!this.state.formValid}>Sign Up</Button>
            </div>
          </form>
          </div>
      </Grid>
      </Paper>
      </Grid>
      
      <Grid item xs={6}>
        <div>
          <img src="images/picPlayfulCat.png" height="550" width="550" alt="kot"></img>
        </div>
      </Grid>
      </Grid>
    );
  }
}


export default Form;