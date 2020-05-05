import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import firebase from 'firebase';
import {Redirect} from "react-router";
import {Link} from 'react-router-dom';
import UserProvider from "../UserProvider";
import { StylesContext } from '@material-ui/styles';
import style from "./Sign.module.css"


class Sign extends React.Component {
    state = {
        // nick: '',
        email: '',
        password: '',
        redirect: false
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleOnSubmit = (event) => {
        event.preventDefault();

        if (this.props.isSignUp) {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    this.setState({
                        redirect: true
                    })
                })
                .catch(function(error) {
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        } else {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    this.setState({
                        redirect: true
                    })
                })
                .catch(function(error) {
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        return (
            <UserProvider>
                {(user) => {
                    return user
                    ? <h2 style={{textAlign: "center", marginTop: 20}}>Jesteś już zalogowany!</h2>
                    : <Container component="main" maxWidth="xs" className = {style.formContainer}>
                            <div style={{marginTop: 230, textAlign: "center"}}>
                                <Typography component="h1" variant="h5">
                                {this.props.isSignUp ? 'Zarejestruj się' : 'Zaloguj się'}
                                </Typography>
                                <form noValidate onSubmit={this.handleOnSubmit}  style={{ marginTop: 40}}>
                                {/* <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Nick"
                                        name="nick"
                                        autoComplete="nick"
                                        autoFocus
                                        value={this.state.nick}
                                        onChange={this.handleOnChange}
                                    /> */}
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={this.state.email}
                                        onChange={this.handleOnChange}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={this.state.password}
                                        onChange={this.handleOnChange}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Zapamiętaj mnie"
                                    />
                                    <Button

                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={{fontWeight:'bold', letterSpacing:'1px', alignSelf:'center'}}
                                    >
                                  {this.props.isSignUp ? 'Zarejestruj' : 'Zaloguj'}
                                    </Button>
                                    <div className = {style.bottomLinks}>
                                    {
                                        this.props.isSignUp
                                            ? <Link to="/sign-in">Masz konto? Zaloguj się</Link>
                                            : <Link to="/sign-up">Nie masz konta? Zarejestruj się</Link>
                                            
                                    }
                                    </div>
                                </form>
                            </div>
                        </Container>;
                }}
            </UserProvider>
        );
    }
}

export default Sign;