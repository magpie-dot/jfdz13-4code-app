// import React, { Component } from 'react';

// class MultiSelect extends Component  {
//   constructor(props) {
//     super(props);
//     //this.state = {value: 'coconut'};
//     this.state = {value: [' ']};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleClicked = this.handleClicked.bind(this);
//   }

//   handleChange(event) {
//     //this.setState({value: event.option});
//     this.setState({value: Array.from(event.target.selectedOptions, (item) => item.value)});
//   }

//   handleClicked(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//         <label>
//           Wybierz zwierzę
//           <select multiple={true} value={this.state.value} onChange={this.handleChange}>
//             <option value="kot">Kot</option>
//             <option value="pies">Pies</option>
//           </select>
//         </label>

//     );
//   }
// }

// export default MultiSelect;

import React, { Component } from "react";
import ActionButton from "./ActionButton";
import DogsCards from "./DogsCards";
import CatsCards from "./CatsCards";


const catsCategory = <CatsCards />
const dogsCategory = <DogsCards />

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseCategory: ' ',
    };
  }

  showCategory = () => {
    this.setState({
      chooseCategory: 'category',
        });
  };

  render() {
    return (
      <>
        <div className="categoty-buttons">
          <ActionButton
            onClick={this.showCategory}
            content={"psy"}
          ></ActionButton>
          <ActionButton
            onClick={this.showCategory}
            content={"koty"}
          ></ActionButton>
        </div>
        {(this.state.chooseCategory.category === 'catsCategory') && < CatsCards/>}
        {(this.state.chooseCategory.category === 'dogsCategory') && < DogsCards/>}
      </>
    );
  }
}

export default MultiSelect;
