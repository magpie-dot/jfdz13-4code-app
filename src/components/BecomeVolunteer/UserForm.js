import React, { Component } from "react";
import Form from "./FormUserDetails";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    username: "",
    surName: "",
    adress: "",
    postalCode: "",
    email: "",
    phone: "",
    bio: "",
    exp: "",
    help: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // prevStep = () => {
  //   const { step } = this.state;
  //   this.setState({
  //     step: step - 1
  //   });
  // };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      username,
    surName,
    adress,
    postalCode,
    email,
    phone,
    bio,
    exp,
    help,
    } = this.state;
    const values = {
      username,
    surName,
    adress,
    postalCode,
    email,
    phone,
    bio,
    exp,
    help,
    };

    switch (step) {
      case 1:
        return (
          <Form
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    
          
        case 2:
        return <Success />;
    }
  }
}

export default UserForm;
