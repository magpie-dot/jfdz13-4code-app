import React from 'react';

const Card = ({ data: { type, name, age } }) => {

    return (
        <div>
            <h1>{name}</h1>
            <p>{type} lat: {age}</p>
        </div>
    )
};

export default Card;
