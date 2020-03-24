import React, { Component } from "react";
import { Input, InputLabel, Select, MenuItem } from "@material-ui/core";
import style from "./OurAnimals.module.css";

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

  render() {
    const { type, sex, goodForKids } = this.state;

    return (
      <>
        <div className={style.multiselect}>
          {/* <div className={style.filter.type}> */}
          {/* //  style={{marginTop: '50px'}} */}
          <div className={style.filter}>
            Wyszukaj:
            <InputLabel onChange={this.onNameFilterChanged} />
            <InputLabel onChange={this.onSexFilterChanged} />
            <InputLabel onChange={this.onGoodForKidsFilterChanged} />
            {/*           
                //  style={{padding: '20px'}}
                 > */}
            <Select onChange={this.onTypeFilterChanged} value={type}>
              <MenuItem value="empty"></MenuItem>
              <MenuItem value="all">Wszystkie zwierzaki</MenuItem>
              <MenuItem value="pies">Psy</MenuItem>
              <MenuItem value="kot">Koty</MenuItem>
            </Select>
            {/* </div> */}
            {/* <div className={style.filter.sex}> */}
            {/* //  style={{marginTop: '50px'}}
                 > */}
            {/* //  style={{padding: '20px'}} */}
            <Select onChange={this.onSexFilterChanged} value={sex}>
              <MenuItem value="all">Płeć</MenuItem>
              <MenuItem value="female">Ona</MenuItem>
              <MenuItem value="male">On</MenuItem>
            </Select>
            {/* </div>
          <div className={style.filter.kids}> */}
            {/* //  style={{marginTop: '50px'}}
                 > */}
            {/* //  style={{padding: '20px'}} */}
            <Select
              onChange={this.onGoodForKidsFilterChanged}
              value={goodForKids}
            >
              <MenuItem value="all">Wszystkie</MenuItem>
              <MenuItem value="yes">Idealne do domu z dziećmi</MenuItem>
              <MenuItem value="no">Nie przepadają za dziećmi</MenuItem>
            </Select>
            {/* </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default Filters;
