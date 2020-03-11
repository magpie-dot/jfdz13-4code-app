import React, { Component } from 'react';


class MultiSelect extends Component  {
  constructor(props) {
    super(props);
    //this.state = {value: 'coconut'};
    this.state = {value: [' ']};

    this.handleChange = this.handleChange.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleChange(event) {
    //this.setState({value: event.option});
    this.setState({value: Array.from(event.target.selectedOptions, (item) => item.value)});
  }

  handleClicked(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <label>
          Wybierz zwierzę
          <select multiple={true} value={this.state.value} onChange={this.handleChange}>
            <option value="kot">Kot</option>
            <option value="pies">Pies</option>
          </select>
        </label>
  
    );
  }
}

  

export default MultiSelect;
