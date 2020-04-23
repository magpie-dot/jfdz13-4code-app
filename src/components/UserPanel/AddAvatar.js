import React from 'react';
import PageWrapper from "./PageWrapper";
import placeholder from "../logo.svg"
import firebase from "firebase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

class Avatar extends React.Component {
    state = {
        file: null,
        url: '',
        ref: null,
        user: null
    };

    componentDidMount() {
        const ref = firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user });
            this.fetchAvatarUrl();
        });

        this.setState({ ref })
    }

    componentWillUnmount() {
        this.state.ref();
    }

    handleOnChange = (event) => {
        this.setState({
            file: event.target.files[0]
        })
    };

    handleOnClick = () => {
        firebase.storage().ref(`avatars/${this.state.user.uid}`)
            .put(this.state.file)
            .then(() => {
                this.fetchAvatarUrl();
            });
    };

    fetchAvatarUrl = () => {
        firebase.storage().ref(`avatars/${this.state.user.uid}`).getDownloadURL()
            .then(url => {
                this.setState({
                    url
                })
            })
    };

    render() {
        return this.state.user
            && <PageWrapper title="Profile">
                    {`Hello ${this.state.user.email}! Your personal id is: ${this.state.user.uid}`}
                    <div style={{marginTop: 20}}>
                        <img style={{width: 100}} src={this.state.url || placeholder} alt="avatar"/>
                        <input type="file" onChange={this.handleOnChange} />
                        <button onClick={this.handleOnClick}>Add avatar</button>
                    </div>
                </PageWrapper>
            }
}

export default Avatar;