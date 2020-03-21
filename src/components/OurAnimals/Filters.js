import React, { Component } from 'react';
import { Input, Select, MenuItem } from '@material-ui/core';

class Filters extends Component {
    state = {
        type: 'all',
        sex:'all',
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
        onSexFilterChanged = event=> {
        this.props.onSexFilterChanged(event.target.value);
        this.setState({
            ...this.state,
            sex: event.target.value,
            })
        }



    render() {
        const { type, sex  } = this.state;

        return (
            <>
                <div style={{marginTop: '50px'}}>
                    <Input onChange={this.onNameFilterChanged}/>
                </div>
                <div style={{padding: '20px'}}>
                    <Select onChange={this.onTypeFilterChanged} value={type}>
                        <MenuItem value='all'>wszystkie zwierzaki kasztaniaki</MenuItem>
                        <MenuItem value='pies'>Psy</MenuItem>
                        <MenuItem value='kot'>Koty</MenuItem>
                    </Select>
                </div>
                <div style={{marginTop: '50px'}}>
                <Input onChange={this.onSexFilterChanged}/> </div>
                <div style={{padding: '20px'}}>
                    <Select onChange={this.onSexFilterChanged} value={sex}>
                        <MenuItem value='all'>Wszystkie płcie</MenuItem>
                        <MenuItem value='female'>Ona</MenuItem>
                        <MenuItem value='male'>On</MenuItem>
                    </Select>
                </div> */}
            </>
        )
    }
}

export default Filters;

