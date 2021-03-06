import React from "react";
import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setCharity,updateUser } from "../../state/users";

const PrettoSlider = withStyles({
  root: {
    height: 30,
    marginTop: 20,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
  mark: {
    backgroundColor: "#ffffff",
    height: 15,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 0.8,
    backgroundColor: "currentColor",
  },
  markLabel: {
    color: "currentColor",
    marginTop: 7,
  },
})(Slider);

const marks = [
  {
    value: 10,
    label: "10",
  },
  {
    value: 25,
    label: "25",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 100,
    label: "100",
  },
];

class NewSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0",
    };
  }

  setCharity = () => {
    if (this.props.userData !== null) {
      this.props.setCharity(this.state.value, this.props.userData);
    }
  };

  setValue = (event, newValue) => {
    this.setState(
      {
        value: newValue,
      },
      () => {this.setCharity()
      setTimeout(() => {
        this.props.updateUser(this.props.userData.id, this.props.userData)
    },200)
  });
  };

  render() {
    return (
      <div>
        <PrettoSlider
          onChange={this.setValue}
          value={this.state.value}
          marks={marks}
          aria-label="pretto slider"
          min={0}
          step={null}
          max={100}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.users.userData,
  loggedUserId: state.users.loggedUser,
});

const mapDispatchToProps = {
  setCharity,
  updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSlider);
