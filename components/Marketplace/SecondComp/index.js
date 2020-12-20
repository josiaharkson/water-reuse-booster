import React from "react";

import Button from "@material-ui/core/Button";
import BorderLinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
const LinearProgress = withStyles(theme => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#3f9d2f",
  },
}))(BorderLinearProgress);

export default function Indx({ project, state, handleChange, invest }) {
  return (
    <>
      <div id="root">
        <section id="section-one">
          <div style={{ display: "flex" }}>
            <img width="300" src={project.img} alt="image" />
            <div className="_head">
              <div className="_title">{project.title}</div>
              <div className="_name">{project.name}</div>
              <div className="progress">
                <div className="_a">Funding Progress</div>
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    border: "1px solid #e8cfcf",
                    padding: "8px 6px",
                    borderRadius: 3,
                  }}
                >
                  <b
                    style={{
                      fontSize: 17,
                      float: "right",
                      marginTop: -8,
                      marginLeft: 6,
                    }}
                  >
                    {" "}
                    {project.fp}%
                  </b>
                  <LinearProgress
                    variant="determinate"
                    value={parseInt(project.fp)}
                  />
                </div>

                <div id="input-wrapper">
                  <div className="icon">
                    <AttachMoneyIcon style={{ fontSize: 35 }} />
                  </div>
                  <input
                    autoFocus
                    type="text"
                    placeholder="0.00"
                    value={state.amount}
                    style={{ fontSize: 30 }}
                    onChange={e => handleChange(e)}
                  />

                  <div className="empty" />
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => invest()}
                >
                  INVEST
                </Button>
              </div>
            </div>
          </div>

          <div className="_sl">
            <div>
              <b>Project type: </b>
              <span> Municipal effluent advanced treatment </span>
            </div>
            <div>
              <b>Estimated cost </b> <span>{project.rf}</span>
            </div>
            <div>
              <b>Target start date: </b> <span>{project.target}</span>
            </div>
            <div>
              <b>Posted on: </b> <span>{project.posted}</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 16 }}>
              <b>Project Summary</b>
            </div>
            Tarragona district of Catalonia is a water scarce area with
            intensive agriculture, industry and tourism. Ebro river currently is
            a major source for fresh water for all abovementioned sector however
            regular droughts in the region are limiting further growth of
            agricultural and industrial activities. New wastewater reuse plant
            aims to source local farmers and industrial plants with independent
            and secure source of reclaimed water needed to satisfy 60% of their
            operations.
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 20, marginTop: 10, textAlign: "center" }}>
              <b> Location of {project.title}</b>
            </div>

            <img
              width="80%"
              src="/icon/h.png"
              alt="pic"
              style={{ marginLeft: 50 }}
            />
          </div>
        </section>

        <section id="section-two">
          <div style={{ fontSize: 20, marginTop: 0, textAlign: "center" }}>
            <b> Outlook of {project.title}</b>
          </div>

          <div className="right_list">
            <div className="rl_left"> Project environmental impact: </div>
            <img width="40" src="/icon/a.png" alt="pic" />
            <div className="rl_right"> 15,000 m3 freshwater preserved</div>
          </div>

          <div className="right_list">
            <div className="rl_left"> Project social impact: </div>
            <img width="40" src="/icon/b.png" alt="pic" />
            <div className="rl_right"> 80,000 population affected</div>
          </div>

          <div className="right_list">
            <div className="rl_left"> Regulatory compliance: </div>
            <img width="40" src="/icon/c.png" alt="pic" />
            <div className="rl_right"> in compliance with EU 2020/741</div>
          </div>

          <div className="right_list">
            <div className="rl_left"> Blockchain smart contract: </div>
            <img width="40" src="/icon/d.png" alt="pic" />
            <div className="rl_right"> OK</div>
          </div>

          <div className="right_list">
            <div className="rl_left"> Estimated investment payback: </div>
            <img width="40" src="/icon/e.png" alt="pic" />
            <div className="rl_right"> 15 month</div>
          </div>

          <div className="right_list">
            <div className="rl_left"> Project partners: </div>
            <img src="/icon/f.png" width="280" alt="pic" />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 20, marginTop: 30, textAlign: "center" }}>
              <b> Treatment System of {project.title}</b>
            </div>
            <img
              width="80%"
              src="/icon/g.png"
              alt="pic"
              style={{ marginLeft: 50 }}
            />
          </div>
        </section>
      </div>

      <style jsx>{`
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

        .right_list {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #bac7c0;
          height: 45px;
        }
        .right_list .rl_left {
          font-size: 14px;
          font-weight: bold;
          font-family: "Assistant";
          flex-basis: 40%;
        }

        .right_list .rl_right {
          font-size: 14px;
          font-weight: bold;
          font-family: "Assistant";
          flex-basis: 40%;
        }

        ._head {
          padding-left: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        ._head ._title {
          font-family: "Assistant";
          font-size: 20px;
          text-decoration: underline;
          font-weight: bold;
          text-align: center;
        }
        ._head ._name {
          font-size: 25px;
          font-weight: bold;
          text-align: center;
          font-family: "Assistant";
        }

        .progress {
          display: flex;
          flex-direction: column;
          padding: 20px 0;
        }
        .progress ._a {
          font-family: "Assistant";
          font-size: 15px;
          font-weight: bold;
          color: #3f9d2f;
          width: 100%;
          text-align: center;
        }
        .buttons {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin: 10px;
        }
        #root {
          display: flex;
          flex: 1;
          width: 100%;
          height: 400px;
          font-family: "Assistant";
          justify-content: center;
          padding-top: 20px;
        }

        #section-one {
          display: flex;
          padding-left: 20px;
          flex-direction: column;
          flex-basis: 50%;
        }

        #section-two {
          display: flex;
          padding-left: 40px;
          flex-direction: column;
          flex-basis: 50%;
        }

        .text-one {
          color: #3f9d2f;
          font-size: 60px;
          line-height: 100%;
          font-weight: bold;
          margin-bottom: 50px;
        }

        img {
          position: relative;
        }

        ._sl {
          padding: 20px 0px;
        }
        ._sl > div {
          display: flex;
          font-size: 14px;
        }

        ._sl b {
          flex-basis: 20%;
        }
        ._sl span {
          flex-basis: 80%;
        }

        #input-wrapper {
          display: flex;
          position: relative;
          width: 100%;
          padding: 7px;
          margin: 0;
          margin-top: 12px;
          margin-bottom: 12px;
        }

        #input-wrapper .empty {
          position: absolute;
          border-radius: 8px;
          border: 1px solid #f1e4e4;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        #input-wrapper .icon {
          width: 30px;
          margin: 0 10px;
          color: gray;
        }

        #input-wrapper .password-icon {
          margin: 0 10px;
          color: gray;
          cursor: pointer;
        }

        #input-wrapper input {
          width: 100%;
          border: none;
          outline: none;
        }

        #input-wrapper input:focus + .empty {
          border: 2px solid #37a000;
        }

        #input-wrapper input:hover + .empty {
          border: 2px solid #37a000;
        }
      `}</style>
    </>
  );
}
