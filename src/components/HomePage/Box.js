import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import style from "./HomePage.module.css";

function Box() {
  return (
    <>
      <CardDeck className={style.box}>
        <Card className={style.boxBorder}>
          <Card.Body>
            <Card.Title> Miłość w liczbach </Card.Title>

            <Card.Text>
              Wspieranie adopcji było naszym priorytetem od momentu stworzenia 4
              Code for Animals.Sukces portalu sprawił, że w pierwszym kwartale
              2020 roku dom znalazło 2500 psów i kotów oraz staliśmy się ważnym
              partnerem dla instytucji wspierających adopcję bezdomnych
              zwierząt.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
}

export default Box;
