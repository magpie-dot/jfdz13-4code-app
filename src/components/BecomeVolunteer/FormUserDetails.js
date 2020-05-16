import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

export class Form extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  state = {
    username: "",
    usernameValid: false,
    surname: "",
    surnameValid: false,
    email: "",
    emailValid: false,
    phone: "",
    phoneValid: false,
    formValid: false,
    bio: "",
    exp: "",
    help: "",
    errorMsg: {},
  };

  validateForm = () => {
    const { usernameValid, surnameValid, emailValid, phoneValid } = this.state;
    this.setState({
      formValid: usernameValid && surnameValid && emailValid && phoneValid,
    });
  };

  updateUsername = (username) => {
    this.setState({ username }, this.validateUsername);
  };

  validateUsername = () => {
    const { username } = this.state;
    let usernameValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (username.length < 3) {
      usernameValid = false;
      errorMsg.username = "Uzupełnij pole";
    }

    this.setState({ usernameValid, errorMsg }, this.validateForm);
  };

  updateSurname = (surname) => {
    this.setState({ surname }, this.validateSurname);
  };

  validateSurname = () => {
    const { surname } = this.state;
    let surnameValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (surname.length < 3) {
      surnameValid = false;
      errorMsg.surname = "Uzupełnij pole";
    }

    this.setState({ surnameValid, errorMsg }, this.validateForm);
  };

  updateEmail = (email) => {
    this.setState({ email }, this.validateEmail);
  };

  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMsg.email = "Wpisz poprawny email";
    }

    this.setState({ emailValid, errorMsg }, this.validateForm);
  };

  updatePhone = (phone) => {
    this.setState({ phone }, this.validatePhone);
  };

  validatePhone = () => {
    const { phone } = this.state;
    let phoneValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (phone.length < 9) {
      phoneValid = false;
      errorMsg.phone = "Uzupełnij numer telefonu";
    }

    this.setState({ phoneValid, errorMsg }, this.validateForm);
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <div>
                <h2>Formularz rejestracji wolontariusza</h2>
                <br></br>
                <br></br>
                <form action="#" id="js-form">
                  <TextField
                    variant="outlined"
                    label="Imię"
                    imput="text"
                    id="username"
                    name="username"
                    className="form-field"
                    required="true"
                    fullWidth
                    value={this.state.username}
                    onChange={(e) => this.updateUsername(e.target.value)}
                  />
                  <ValidationMessage
                    valid={this.state.usernameValid}
                    message={this.state.errorMsg.username}
                  />
                  <br></br>
                  <br></br>

                  <TextField
                    variant="outlined"
                    label="Nazwisko"
                    imput="text"
                    id="surname"
                    name="surname"
                    className="form-field"
                    required="true"
                    fullWidth
                    value={this.state.surname}
                    onChange={(e) => this.updateSurname(e.target.value)}
                  />
                  <ValidationMessage
                    valid={this.state.surnameValid}
                    message={this.state.errorMsg.surname}
                  />
                  <br></br>
                  <br></br>
                  <TextField
                    variant="outlined"
                    label="Email"
                    imput="email"
                    id="email"
                    name="Email"
                    className="form-field"
                    required="true"
                    fullWidth
                    value={this.state.email}
                    onChange={(e) => this.updateEmail(e.target.value)}
                  />
                  <ValidationMessage
                    valid={this.state.emailValid}
                    message={this.state.errorMsg.email}
                  />
                  <br></br>
                  <br></br>
                  <TextField
                    label="Adres"
                    variant="outlined"
                    imput="Adress"
                    id="Adress"
                    name="Adress"
                    className="form-field"
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
                    imput="phone"
                    id="phone"
                    name="phone"
                    required="true"
                    value={this.state.phone}
                    onChange={(e) => this.updatePhone(e.target.value)}
                  />
                  <ValidationMessage
                    valid={this.state.phoneValid}
                    message={this.state.errorMsg.phone}
                  />

                  <br></br>
                  <br></br>

                  <TextField
                    label="Coś o Tobie"
                    variant="outlined"
                    onChange={handleChange("bio")}
                    defaultValue={values.bio}
                    fullWidth
                    multiline
                    rows="4"
                  />
                  <br></br>
                  <br></br>
                  <TextField
                    label="Twoje doświadczenie ze zwierzętami"
                    variant="outlined"
                    onChange={handleChange("exp")}
                    defaultValue={values.exp}
                    fullWidth
                    multiline
                    rows="4"
                  />
                  <br></br>
                  <br></br>
                  <TextField
                    label="Jak chcesz pomóc?"
                    variant="outlined"
                    onChange={handleChange("help")}
                    defaultValue={values.help}
                    fullWidth
                    multiline
                    rows="4"
                  />

                  <br></br>
                  <br></br>

                  <div className="form-controls">
                    <Button
                      variant="contained"
                      className="button"
                      color="primary"
                      type="submit"
                      onClick={this.continue}
                      disabled={!this.state.formValid}
                    >
                      Sign Up
                    </Button>
                  </div>
                </form>
              </div>
            </Grid>
          </Paper>
        </Grid>

        <Grid item>
          <div>
            <img
              src="images/picPlayfulCat.png"
              alt="kot"
              height="550"
              width="550"
            ></img>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Form;
