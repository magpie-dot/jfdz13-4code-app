import React, { Component } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  FormControl
} from "@material-ui/core";
import styles from "./OurAnimals.module.css";



class Filters extends Component {
  state = {
    type: "all",
    sex: "all",
    goodForKids: "all"
  };

  onNameFilterChanged = event => {
    this.props.onNameFilterChanged(event.target.value);
  };

  onTypeFilterChanged = event => {
    this.props.onTypeFilterChanged(event.target.value);
    this.setState({
      ...this.state,
      type: event.target.value
    });
  };
  onSexFilterChanged = event => {
    this.props.onSexFilterChanged(event.target.value);
    this.setState({
      ...this.state,
      sex: event.target.value
    });
  };

  onGoodForKidsFilterChanged = event => {
    this.props.onGoodForKidsFilterChanged(event.target.value);
    this.setState({
      ...this.state,
      goodForKids: event.target.value
    });
  };

  removeAllFilters = event => {
    this.props.removeAllFilters(event.target.value);
    this.setState({
      type: "all",
      sex: "all",
      goodForKids: "all"
    });
  };

  render() {
    const { type, sex, goodForKids } = this.state;

    return (
      <>
        <div className={styles.multiselect}>
          <div className={styles.header}>
            <Typography>Wyszukaj:</Typography>
            </div>
<div className = {styles.filter}>
<FormControl variant="outlined"
//  className={classes.formControl}
 >
<Select
className = {styles.select}
  // labelId="demo-simple-select-outlined-label"
  // id="demo-simple-select-outlined"
  value={type}
  onChange={this.onTypeFilterChanged}
  label="Wszystkie zwierzaki"
  // style = {{marginRight:70}}
>
  {/* <MenuItem value={"empty"}></MenuItem> */}
  <MenuItem value="all">Wszystkie zwierzaki</MenuItem>
  <MenuItem value="pies">Psy</MenuItem>
  <MenuItem value="kot">Koty</MenuItem>
</Select>
</FormControl>
<FormControl variant="outlined"
//  className={classes.formControl}
 >
<Select
className = {styles.select}
  // labelId="demo-simple-select-outlined-label"
  // id="demo-simple-select-outlined"
  value={sex}
  onChange={this.onSexFilterChanged}
  label="Wszystkie zwierzaki"
//  style = {{marginRight:70}} 
>
  {/* <MenuItem value={"empty"}></MenuItem> */}
  <MenuItem value="all">Płeć</MenuItem>
  <MenuItem value="female">Ona</MenuItem>
  <MenuItem value="male">On</MenuItem>
</Select>
</FormControl>
<FormControl variant="outlined"
//  className={classes.formControl}
 >
<Select
className = {styles.select}
  // labelId="demo-simple-select-outlined-label"
  // id="demo-simple-select-outlined"
  value={goodForKids}
  onChange={this.onGoodForKidsFilterChanged}
  label="Dodatkowe informacje"
  // style = {{ width:220}}
>
  {/* <MenuItem value={"empty"}></MenuItem> */}
  <MenuItem value="all">Dodatkowe informacje</MenuItem>
  <MenuItem value="yes">Idealne do domu z dziećmi</MenuItem>
  <MenuItem value="no">Nie przepadają za dziećmi</MenuItem>
</Select>
</FormControl>
  </div>
<div className = {styles.removeAllFiltersButton}>
            <Button variant="outlined" size="medium" onClick = {this.removeAllFilters}> Usuń filtry</Button>
        
          </div>
         </div>
      </>
    );
  }
}

export default Filters;
