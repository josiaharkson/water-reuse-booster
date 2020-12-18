import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    background: "#3f9d2f9e",
  },

  backdropTransparent: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    background: "#1d435475",
  },
}));

export function FullBackdrop() {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={true} onClick={() => {}}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export function FullBackdropTransparent() {
  const classes = useStyles();

  return (
    <Backdrop
      className={classes.backdropTransparent}
      open={true}
      onClick={() => {}}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
