import React from "react";
import { Paper, Grid, Typography, Card, CardContent } from "@material-ui/core";
import styles from "./UserPanel.module.css";
import { fetchAnimals } from "../../state/animals";

import { connect } from "react-redux";

class FavouriteAnimalPanel extends React.Component {
  componentDidMount() {
    this.props.fetchAnimals();
  }

  render() {
    const { userData, animals } = this.props;
    return (
      <Paper elevation={3} className={styles.paperLong}>
        <Grid container>
          <Grid item>
            <Typography variant="body1" style={{ margin: "15px 0" }}>
              Moja lista zwierzaków do adopcji:
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              {userData &&
                userData.favouriteAnimals &&
                animals
                  .filter((animal) =>
                    userData.favouriteAnimals.includes(animal.id)
                  )
                  .map((animal, key) => {
                    return (
                      <Grid item key={key}>
                        <Card className={styles.card}>
                          <img
                            className={styles.favouriteImage}
                            src={animal.data.imageUrl}
                            alt="zwierzak"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
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

const mapStateToProps = (state) => ({
  userData: state.users.userData,
  loggedUserId: state.users.loggedUser,
  animals: state.animals.data,
});

const mapDispatchToProps = {
  fetchAnimals,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteAnimalPanel);
