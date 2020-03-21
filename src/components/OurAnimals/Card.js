import React from 'react';

const Card = ({ data: { type, name, age }, descriptions: {descriptionBasic, descriptionExtended}, onClicked }) => {

    return (
        <div>
            <h1>{name}</h1>
            <p>{type} lat: {age}</p>
            <p>{descriptionBasic}</p>
            <button>{onClicked}Pokaż więcej</button>
            <p>{descriptionExtended}</p>
        </div>
    )
};

export default Card;
















// import React from 'react';

// const Card = ({ data: { type, name, age} }) => {

//     return (
//         <div>
//             <h1>{name}</h1>
//             <p>{type} lat: {age}</p>
//             {/* <p>{descriptionBasic}</p>
//             <p>{descriptionExtended}</p> */}
//         </div>
//     )
// };

// export default Card;
