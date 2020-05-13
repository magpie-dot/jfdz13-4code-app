import React, {Component} from "react";
import AnimalCard from "./AnimalCard";
import Filters from "./Filters";
import style from "./OurAnimals.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import {connect} from 'react-redux';
import {fetchAnimals} from '../../state/animals'
import {updateUser, toggleFavourite} from '../../state/users'

class OurAnimals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                type: "all",
                name: "",
                sex: "all",
                goodForKids: "all",
                remove: " "
            },
        };
    }

    onTypeFilterChanged = type => {
        this.setState({
            ...this.state,
            filter: {
                ...this.state.filter,
                type
            }
        });
    };

    onNameFilterChanged = name => {
        this.setState({
            ...this.state,
            filter: {
                ...this.state.filter,
                name
            }
        });
    };
    onSexFilterChanged = sex => {
        this.setState({
            ...this.state,
            filter: {
                ...this.state.filter,
                sex
            }
        });
    };
    onGoodForKidsFilterChanged = goodForKids => {
        this.setState({
            ...this.state,
            filter: {
                ...this.state.filter,
                goodForKids
            }
        });
    };
    removeAllFilters = remove => {
        this.setState({
            filter: {
                type: "all",
                name: "",
                sex: "all",
                goodForKids: "all"
            }
        });
    };

    getAnimals = (animals) => {
        return animals.filter(animal => {
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

    handleOnClickFavourite = (animalId, favouriteAnimals) => {
        this.props.toggleFavourite(animalId, favouriteAnimals);
        this.props.updateUser(this.props.userData[0].id, this.props.userData[0])
    }

    checkFavourite = animal => this.props.favouriteAnimals.some(favouriteAnimal => favouriteAnimal.id === animal.id);

    componentDidMount() {
        this.props.fetchAnimals();
    }

    render() {
        const {animals, loading} = this.props
        return (
            <>
                {loading && <CircularProgress style={{ display:'flex', justifyContent:'center'}}thickness={5}/>}
                {!loading &&
                <div className={style.animalsList}>
                    <Filters
                        onTypeFilterChanged={this.onTypeFilterChanged}
                        onNameFilterChanged={this.onNameFilterChanged}
                        onSexFilterChanged={this.onSexFilterChanged}
                        onGoodForKidsFilterChanged={this.onGoodForKidsFilterChanged}
                        removeAllFilters={this.removeAllFilters}
                    />
                    {this.getAnimals(animals).map((animal, index) => (
                        <AnimalCard key={index} animal={animal}
                                    isFavourite={this.checkFavourite(animal)}
                                    onAddToFavourite={this.onHandleOnClickFavourite}/>
                    ))}
                </div>
                }

            </>
        );
    }
}

const mapStateToProps = (state) => ({
    animals: state.animals.data,
    loading: state.animals.loading,
    error: state.animals.error,
    userData: state.users.userData,
});

const mapDispatchToProps = {
    fetchAnimals,
    updateUser,
    toggleFavourite
};

export default connect(mapStateToProps, mapDispatchToProps)(OurAnimals);