import React, {Component} from "react";
import Card from './Card';
import Filters from './Filters';

class OurAnimals extends Component {

    state = {
        animals: [],
        descriptionBasic: true,
        descriptionExtended: false,
        filter: {
            type: 'all',
            name: '',
            sex:'all',
           
        },
        error: null,
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
            filters: {
                ...this.state.filters,
                sex,
            }
        })
    };

    showMore = () => {
const descExt = ()=> {
    return animal.descriptions.descriptionExtended
}
        this.setState ({
            descriptionBasic: true,
            descriptionExtended: descExt,
        })
    }

    getAnimals = () => {
        return this.state.animals.filter(animal => {
            return animal.data.name.toLowerCase().includes(this.state.filter.name.toLowerCase())
                && (this.state.filter.type === 'all' || animal.data.type === this.state.filter.type)
                && (this.state.filters.sex==='all' || animal.data.sex === this.state.filters.sex)
                // && (this.state.descriptionExtended ===true || animal.descriptions.descriptionExtended ̣) 
        })
    };

    render() {
        return (
            <div>
                <Filters onTypeFilterChanged={this.onTypeFilterChanged} onNameFilterChanged={this.onNameFilterChanged} onSexFilterChanged = {this.onSexFilterChanged}/>
                {this.getAnimals().map(({id, data, descriptionBasic}) => <Card key={id} data={data} descriptions = {descriptionBasic} onClicked = {this.showMore}/>)}
            </div>
        )
    }
}

export default OurAnimals;

