import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "./SupportUs.module.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

const SectionMaterialHelp = () => {
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item>
        <Typography variant="body2">
          <p className={styles.helpSection}>
            Zwierzęta przebywające w schronisku mają inne potrzeby żywieniowe
            niż koty i psy mieszkające w domach. Żyją w stresie, w dużym
            skupisku, w którym łatwiej przenoszą się choroby. Niektóre z nich są
            chore albo przechodzą rekonwalescencję po wypadkach. Musimy im dawać
            lepszej jakości karmę, ponieważ ta gorsza, najtańsza, im nie służy.
            Domowy pies może nie mieć po niej biegunki, schroniskowy będzie
            miał, bo żyje w gorszych warunkach.
          </p>

          <p className={styles.helpSection}>
            Dlatego jeśli chcecie pomóc, kupcie im dobrą karmę. Idźcie do sklepu
            zoologicznego, a nie do supermarketu, i wybierzcie coś z dużą
            zawartością mięsa. Nie martwcie się, że przynosicie dwie puszki
            zamiast 10-kilogramowego worka, który kupilibyście w tej samej
            cenie. Znamy ceny karm i docenimy to, że pomagacie mądrze.
          </p>
        </Typography>
      </Grid>
      <Grid item>
        <div className={styles.listItem}>
          <FavoriteIcon color="secondary" />
          <Typography variant="body2">
            <p>
              Karma mokra lub sucha dla psów dorosłych np. Royal Canin,
              Animonda, Brit, Bosch, Purina, Acana;
            </p>
          </Typography>
        </div>
        <div className={styles.listItem}>
          <FavoriteIcon color="secondary" />
          <Typography variant="body2">
            <p>
              Karma mokra lub sucha dla kociąt i kotów dorosłych np. Royal
              Canin, Bosch Sanabelle, Purina, Acana;
            </p>
          </Typography>
        </div>
        <div className={styles.listItem}>
          <FavoriteIcon color="secondary" />
          <Typography variant="body2">
            <p>
              Karmy bezzbożowe, karmy dla alergików i „wrażliwców”, karma dla
              rekonwalescentów, karma sucha dla psów i kotów z problemami
              żołądkowymi
            </p>
          </Typography>
        </div>
        <div className={styles.listItem}>
          <FavoriteIcon color="secondary" />
          <Typography variant="body2">
            <p>Obroże oraz smycze dla psów średnich i dużych;</p>
          </Typography>
        </div>
        <div className={styles.listItem}>
          <FavoriteIcon color="secondary" />
          <Typography variant="body2">
            <p>
              Wszystko, co służy pielęgnacji zwierząt: szczotki i grzebienie,
              maszynki do strzyżenia psów, cążki do obcinania pazurków.
            </p>
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default SectionMaterialHelp;
