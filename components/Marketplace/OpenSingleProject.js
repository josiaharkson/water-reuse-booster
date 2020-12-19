import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import SecondComp from "./SecondComp";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  open,
  setOpen,
  singleProjectDetail,
}) {
  const { title, id, name, rf, fp, posted, target, img } = singleProjectDetail;
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            {singleProjectDetail && (
              <div className="_head">
                <div className="_name">{name}</div>
                <div className="_title">{title}</div>
              </div>
            )}

            <Button color="inherit" onClick={handleClose}>
              Continue
            </Button>
          </Toolbar>
        </AppBar>
        <SecondComp project={singleProjectDetail} />
      </Dialog>
      <style jsx>{`
        ._head {
          display: flex;
          width: 90%;
          flex-direction: column;
        }

        ._head ._title {
          font-family: "Assistant";
          font-weight: bold;
        }
        ._head ._name {
          font-size: 20px;
          font-family: "Assistant";
        }
      `}</style>
    </>
  );
}
