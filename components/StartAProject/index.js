import React from "react";
import NavBar from "../global/NavBar";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

import InputBase from "@material-ui/core/InputBase";

import Progress from "./Progress";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";

const useStyles = makeStyles(theme => ({
  margin: {
    height: "100%",
    width: "100%",
    border: "none",
    outline: "none",
    position: "absolute",
    top: 0,
    left: 0,
    padding: 0,
    margin: 0,
  },
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    padding: 0,
    height: "100%",
    border: "none",
    outline: "none",
    margin: 0,
    "label + &": {
      marginTop: 3,
      height: "100%",
      border: "none",
      outline: "none",
      padding: 0,
      margin: 0,
    },
  },
  input: {
    borderRadius: 4,
    border: "none",
    outline: "none",
    position: "relative",
    padding: 14,
    margin: 0,
    marginTop: -3,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    // padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      border: "none",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

export default function Indx() {
  const [step, setStep] = React.useState(1);

  return (
    <>
      <NavBar direction="down" title="Agriculture" />
      <Progress step={step} setStep={setStep} />

      <Slide
        direction="right"
        in={step === 1}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <div>{step === 1 && <One setStep={setStep} />}</div>
      </Slide>

      <Slide
        direction="right"
        in={step === 2}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <div>{step === 2 && <Two setStep={setStep} />}</div>
      </Slide>

      <Slide
        direction="right"
        in={step === 3}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <div>{step === 3 && <Three setStep={setStep} />}</div>
      </Slide>

      <Slide
        direction="right"
        in={step === 4}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <div>{step === 4 && <Four setStep={setStep} />}</div>
      </Slide>

      <Slide
        direction="right"
        in={step === 5}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <div>{step === 5 && <Five setStep={setStep} />}</div>
      </Slide>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body::-webkit-scrollbar {
          display: none;
          background-color: #00008000;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        body {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          text-rendering: optimizeLegibility;
        }
      `}</style>
    </>
  );
}
