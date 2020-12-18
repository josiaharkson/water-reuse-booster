import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function HorizontalLabelPositionBelowStepper({ step, setStep }) {
  const classes = useStyles();
  return (
    <div className="root">
      <div
        onClick={() => setStep(1)}
        className={`${step >= 1 ? "step active" : "step"}`}
      >
        <span className="step_a"> STEP 1</span>
        <span className="step_b">SELECT LOCATION</span>
      </div>
      <div className="line">
        <LinearProgress
          className={classes.root}
          variant="determinate"
          color="primary"
          value={`${step > 1 ? 100 : 0}`}
        />
      </div>
      <div
        onClick={() => {
          if (step < 2) return;
          setStep(2);
        }}
        className={`${step >= 2 ? "step active" : "step"}`}
      >
        <span className="step_a"> STEP 2</span>
        <span className="step_b">MEET YOUR CLUSTER</span>
      </div>

      <div className="line">
        <LinearProgress
          className={classes.root}
          variant="determinate"
          color="primary"
          value={`${step > 2 ? 100 : 0}`}
        />
      </div>

      <div
        onClick={() => {
          if (step < 3) return;
          setStep(3);
        }}
        className={`${step >= 3 ? "step active" : "step"}`}
      >
        <span className="step_a"> STEP 3</span>
        <span className="step_b">PROJECT PROPOSAL</span>
      </div>

      <div className="line">
        <LinearProgress
          className={classes.root}
          variant="determinate"
          color="primary"
          value={`${step > 3 ? 100 : 0}`}
        />
      </div>
      <div
        onClick={() => {
          if (step < 4) return;
          setStep(4);
        }}
        className={`${step >= 4 ? "step active" : "step"}`}
      >
        <span className="step_a"> STEP 4</span>
        <span className="step_b">POTENTIAL PARTNERS</span>
      </div>

      <div className="line">
        <LinearProgress
          className={classes.root}
          variant="determinate"
          color="primary"
          value={`${step > 4 ? 100 : 0}`}
        />
      </div>
      <div
        onClick={() => {
          if (step < 5) return;
          setStep(5);
        }}
        className={`${step >= 5 ? "step active" : "step"}`}
      >
        <span className="step_a"> STEP 5</span>
        <span className="step_b">SUBMIT PROPOSAL</span>
      </div>
      <style jsx global>{`
        .root {
          width: 100%;
          display: flex;
          flex: 1;
          flex-direction: row;
          justify-content: center;
          margin: 5px;
        }
        .step {
          height: 40px;
          border-radius: 5px;
          padding: 0px;
          width: 15%;
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-family: "Assistant";
          font-weight: bold;
          line-height: 110%;
          background: #ededed;
          margin: 5px 0;
          opacity: 0.5;
          cursor: not-allowed;
        }
        .step:hover {
          opacity: 0.7;
        }
        .line {
          width: 3.75%;
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: center;
        }
        .active {
          background: #3f9d2f;
          color: white;
          opacity: 1;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
