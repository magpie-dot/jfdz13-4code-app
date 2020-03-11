import React from "react";
import { CATS } from "./data/CATS";
import AnimalCard from "./AnimalCard";
import './AnimalCard.css';
import { Item } from "semantic-ui-react";
import Filter from "./MultiSelect";
import MultiSelect from "./MultiSelect";


const AnimalsCards = () => {

  return (
    <>
      <div>
        < MultiSelect />
        </div>
        <div>
          {CATS.map(item => (
        <AnimalCard key = {item.id} card= {item.descriptions}  />

          ))}
      </div>
    </>
  );
};

export default AnimalsCards;


  