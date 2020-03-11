import React from "react";
import { DOGS } from "./data/DOGS";
import AnimalCard from "./AnimalCard";
import './AnimalCard.css';
import { Item } from "semantic-ui-react";
import Filter from "./MultiSelect";
import MultiSelect from "./MultiSelect";


const DogsCards = () => {

  return (
    <>
      <div>
        < MultiSelect />
        </div>
        <div>
          {DOGS.map(dog => (
        <AnimalCard card= {dog}/>

          ))}
      </div>
    </>
  );
};

export default DogsCards;


  