import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import styles from "./UserPanel.module.css";

class FavouriteAnimalPanel extends React.Component {
  state = {
    favouriteAnimals: this.props.favouriteAnimals
  };

  render() {
    return (
      <Paper elevation={3} className={styles.paperLong}>
        <Grid container>
          <Grid item>
            <Typography variant="body1" style={{ margin: "15px 0" }}>
              Moja lista zwierzaków do adopcji:
            </Typography>
            <Grid container
             direction="row"
             justify="center"
             alignItems="center"
             spacing={3}
           >
            {this.state.favouriteAnimals.map(animal => {
              {console.log(animal.data.type)}
              return (
                <Grid item>
                <Card className={styles.card}>
                  <img className={styles.favouriteImage} src={animal.data.imageUrl} alt="zwierzak"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {animal.data.name}
                    </Typography>
                  </CardContent>
                </Card>
                </Grid>
              );
            })}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default FavouriteAnimalPanel;
