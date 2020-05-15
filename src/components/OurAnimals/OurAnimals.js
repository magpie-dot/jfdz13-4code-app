import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import Filters from "./Filters";
import style from "./OurAnimals.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import firebase from "../Firebase";
import { connect } from "react-redux";
import { fetchAnimals } from "../../state/animals";
import { updateUser, toggleFavourite, setUser, fetchUser } from "../../state/users";

class OurAnimals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        type: "all",
        name: "",
        sex: "all",
        goodForKids: "all",
        remove: " ",
        user: null,
      },
    };
  }

  onTypeFilterChanged = (type) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        type,
      },
    });
  };

  onNameFilterChanged = (name) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        name,
      },
    });
  };
  onSexFilterChanged = (sex) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        sex,
      },
    });
  };
  onGoodForKidsFilterChanged = (goodForKids) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        goodForKids,
      },
    });
  };
  removeAllFilters = (remove) => {
    this.setState({
      filter: {
        type: "all",
        name: "",
        sex: "all",
        goodForKids: "all",
      },
    });
  };

  getAnimals = (animals) => {
    return animals.filter((animal) => {
      return (
        animal.data.name
          .toLowerCase()
          .includes(this.state.filter.name.toLowerCase()) &&
        (this.state.filter.type === "all" ||
          animal.data.type === this.state.filter.type) &&
        (this.state.filter.sex === "all" ||
          animal.data.sex === this.state.filter.sex) &&
        (this.state.filter.goodForKids === "all" ||
          animal.goodForKids === this.state.filter.goodForKids)
      );
    });
  };

  handleOnClickFavourite = (animalId, favouriteAnimals, userData) => {
    this.props.toggleFavourite(animalId, favouriteAnimals, userData);
    this.props.updateUser(this.props.userData.id, this.props.userData);
  };

  componentDidMount() {
    const ref = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });

      this.props.fetchAnimals();
      this.props.setUser(user.uid);
      this.props.fetchUser(user.uid)
    });

    this.setState({ ref });
  }

  componentWillUnmount() {
    this.state.ref();
  }


  render() {
    const { animals, loading } = this.props;
    return (
      <>
        {loading && (
          <CircularProgress
            style={{ display: "flex", justifyContent: "center" }}
            thickness={5}
          />
        )}
        {!loading && (
          <div className={style.animalsList}>
            <Filters
              onTypeFilterChanged={this.onTypeFilterChanged}
              onNameFilterChanged={this.onNameFilterChanged}
              onSexFilterChanged={this.onSexFilterChanged}
              onGoodForKidsFilterChanged={this.onGoodForKidsFilterChanged}
              removeAllFilters={this.removeAllFilters}
            />
            {this.getAnimals(animals).map((animal, index) => (
              <AnimalCard
                key={index}
                animal={animal}
                onClickFavourite={this.handleOnClickFavourite}
              />
            ))}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  animals: state.animals.data,
  loading: state.animals.loading,
  error: state.animals.error,
  userData: state.users.userData,
  loggedUserId: state.users.loggedUser,
});

const mapDispatchToProps = {
  fetchAnimals,
  updateUser,
  toggleFavourite,
  setUser,
  fetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(OurAnimals);
