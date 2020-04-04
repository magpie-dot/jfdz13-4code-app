import React, {Component} from "react";
import AnimalCard from "./AnimalCard";
import Filters from "./Filters";
import style from "./OurAnimals.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

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

    getAnimals = () => {
        return this.props.animals.filter(animal => {
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

    checkFavourite = animal => this.props.favouriteAnimals.some(favouriteAnimal => favouriteAnimal.id === animal.id);

    render() {
        return (
            <>
                {this.props.loading && <CircularProgress thickness={5}/>}
                {!this.props.loading &&
                <div className={style.animalsList}>
                    <Filters
                        onTypeFilterChanged={this.onTypeFilterChanged}
                        onNameFilterChanged={this.onNameFilterChanged}
                        onSexFilterChanged={this.onSexFilterChanged}
                        onGoodForKidsFilterChanged={this.onGoodForKidsFilterChanged}
                        removeAllFilters={this.removeAllFilters}
                    />
                    {this.getAnimals().map((animal, index) => (
                        <AnimalCard key={index} animal={animal}
                                    isFavourite={this.checkFavourite(animal)}
                                    onAddToFavourite={this.props.onAddToFavourite}/>
                    ))}
                </div>
                }

            </>
        );
    }
}

export default OurAnimals;