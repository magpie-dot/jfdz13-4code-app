import React from "react";
import { CATS } from "./data/CATS";
import AnimalCard from "./AnimalCard";
import './AnimalCard.css';
import { Item } from "semantic-ui-react";
import Filter from "./MultiSelect";
import MultiSelect from "./MultiSelect";


const CatsCards = () => {

  return (
    <>
      <div>
        < MultiSelect />
        </div>
        <div>
          {CATS.map(cat => (
        <AnimalCard card= {cat}/>

          ))}
      </div>
    </>
  );
};

export default CatsCards;


  