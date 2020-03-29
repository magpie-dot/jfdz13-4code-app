import React, {Component} from "react";
import AnimalCard from './AnimalCard';
import Filters from './Filters';
import style  from './OurAnimals.module.css'


class OurAnimals extends Component {
    constructor(props) {
    super(props);
    this.state = {
        animals: [],
        filter: {
            type: 'all',
            name: '',
            sex:'all',
            goodForKids:'all',
            remove: ' '
        },
       
        error: null,
    }
};

    componentDidMount() {
        fetch('animals.json')
            .then(response => response.json())
            .then(response => this.setState({
                ...this.state,
                animals: response,
            }))
            .catch(error => this.setState(
                ...this.state,
                error,
            ))
    }

    onTypeFilterChanged = type => {
        this.setState({
            ...this.state,
            filter: {
                ...this.state.filter,
                type,
            }
        })
    };

    onNameFilterChanged = name => {
        this.setState({
            ...this.state,
            filter: {
                ...this.state.filter,
                name,
            }
        })
    };
     onSexFilterChanged = sex => {
        this.setState({
            ...this.state,
            filter: {
                ...this.state.filter,
                sex,
            }
        })
    };
    onGoodForKidsFilterChanged = goodForKids => {
        this.setState({
        ...this.state,
        filter: {
            ...this.state.filter,
            goodForKids,
        }
    })
};
removeAllFilters = remove => {
    this.setState ({
        filter: {
            type: 'all',
            name: '',
            sex:'all',
            goodForKids:'all',
        }
    })
}
    
    getAnimals = () => {
        return this.state.animals.filter(animal => {
            return animal.data.name.toLowerCase().includes(this.state.filter.name.toLowerCase())
              && (this.state.filter.type === 'all' || animal.data.type === this.state.filter.type)
                && (this.state.filter.sex==='all' || animal.data.sex === this.state.filter.sex)
                && (this.state.filter.goodForKids === 'all' || animal.goodForKids === this.state.filter.goodForKids)
        })
    };

    render() {
        return (
            <div className = {style.animalsList}>
                <Filters
                 onTypeFilterChanged={this.onTypeFilterChanged} 
                 onNameFilterChanged={this.onNameFilterChanged} 
                 onSexFilterChanged = {this.onSexFilterChanged}
                 onGoodForKidsFilterChanged = {this.onGoodForKidsFilterChanged}
                 removeAllFilters = {this.removeAllFilters}
                 />
                {this.getAnimals().map(({id, data, descriptions}) => <AnimalCard key={id} data={data} descriptions = {descriptions}/>)}
            </div>
        )
    }
}

export default OurAnimals;

