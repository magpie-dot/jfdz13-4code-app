import React from "react";
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  CircularProgress
} from "@material-ui/core";
import styles from "./SupportUs.module.css";
import NewSlider from "./Slider.js";

const SectionFinance = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Grid
        container
        item
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
        spacing={2}
        lg={6}
        xs={12}
      >
        <Grid item>
          <Typography variant="body2">
            <span className={styles.financeDescription}>
              Możesz wspomóc finansowo nasze schronisko, wpłacając pieniądze na
              konto:
            </span>
          </Typography>
          <div className={styles.bank}>
            <Typography variant="body2">
              <span
                className={styles.financeDescription}
                style={{ fontWeight: 300, letterSpacing: "0.2rem" }}
              >
                10 1020 4027 0000 1502 1262 6786
              </span>
            </Typography>
            <Typography variant="body2">
              <span className={styles.financeDescription}>
                tytuł wpłaty: Pomoc dla schroniska
              </span>
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            Lub skorzystać z naszego systemu szybkich płatności:
          </Typography>
          <div className={styles.sliderContainer}>
            <div className={styles.slider}>
              <NewSlider />
            </div>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              style={{ fontWeight: 600, width: 200, alignSelf: "center" }}
              onClick={handleClickOpen}
            >
              Wesprzyj nas
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Za chwilę zostaniesz przekierowany na stronę płatności.
                </DialogContentText>
                <CircularProgress style={{ marginLeft: 210 }} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Grid>
      </Grid>
      <Grid item>
        <img
          className={styles.financeBanner}
          src="images/podatek.png"
          alt="podatek"
        />
      </Grid>
    </Grid>
  );
};

export default SectionFinance;
