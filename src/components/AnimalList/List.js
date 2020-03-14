import React, {Component} from "react";
import Card from './Card';
import Filter from './Filter';

class List extends Component {

    state = {
        animals: [],
        filter: {
            type: 'all',
            name: '',
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

    getAnimals = () => {
        return this.state.animals.filter(animal => {
            return animal.data.name.toLowerCase().includes(this.state.filter.name.toLowerCase())
                && (this.state.filter.type === 'all' || animal.data.type === this.state.filter.type)
        })
    };

    render() {
        return (
            <div>
                <Filter onTypeFilterChanged={this.onTypeFilterChanged} onNameFilterChanged={this.onNameFilterChanged}/>
                {this.getAnimals().map(({id, data}) => <Card key={id} data={data}/>)}
            </div>
        )
    }
}

export default List;
