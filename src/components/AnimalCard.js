import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';


const AnimalCard = ({card}) =>  {
return (
    <>
    <div className="animal-card">
      <div className="animal-card card">
        <img
          src={card.imageURL}
          alt=""class
        />
        <div>
          <h2>{card.data}</h2>
          <h3>{card.descriptionBasic}</h3>
          <button className = "animal-card-description-extended-button" >
            <p>Pokaż więcej</p>
          </button>
          <p className="animal-card-description-extended" style={{ fontSize: "14px" }}>
            {card.descriptionExtended}
          </p>
        </div>
      </div>
    </div>
    </>
)
}

export default AnimalCard;

