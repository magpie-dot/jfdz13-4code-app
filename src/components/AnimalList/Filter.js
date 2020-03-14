import React, { Component } from 'react';
import { Input, Select, MenuItem } from '@material-ui/core';

class Filter extends Component {
    state = {
        type: 'all',
    };

    onNameFilterChanged = event => {
        this.props.onNameFilterChanged(event.target.value)
    };

    onTypeFilterChanged = event => {
        this.props.onTypeFilterChanged(event.target.value);
        this.setState({
            ...this.state,
            type: event.target.value,
        });
    };


    render() {
        const { type } = this.state;

        return (
            <>
                <div style={{marginTop: '50px'}}>
                    <Input onChange={this.onNameFilterChanged}/>
                </div>
                <div style={{padding: '20px'}}>
                    <Select onChange={this.onTypeFilterChanged} value={type}>
                        <MenuItem value='all'>wszystkie zwierzaki kasztaniaki</MenuItem>
                        <MenuItem value='pies'>pieski pani prezeski</MenuItem>
                        <MenuItem value='cat'>kotki psotki</MenuItem>
                    </Select>
                </div>
            </>
        )
    }
}

export default Filter;
