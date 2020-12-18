import React from "react";
import Link from "next/link";
import Styles from "./home.header.module.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import InputBase from "@material-ui/core/InputBase";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowForward from "@material-ui/icons/ArrowForwardIos";

export default function Indx({ setStep }) {
  return (
    <>
      <div id="root">
        <section id="section-one">
          {" "}
          <div className="instruction">Proposed Cluster</div>
          <div
            style={{
              margin: "0 auto",
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img src="/img/map.jpg" width="400" />
            <div className="icon1">
              <LocationOnIcon style={{ fontSize: 50 }} />
            </div>
            <div className="icon2">
              <LocationOnIcon style={{ fontSize: 50 }} />
            </div>

            <div className="icon3">
              <LocationOnIcon style={{ fontSize: 50 }} />
            </div>
            <div className="icon4">
              <LocationOnIcon style={{ fontSize: 50 }} />
            </div>
          </div>
          <div>
            <div className="a">
              <div></div>
              <b>Vila Seca UWWTP</b>
            </div>
            <div className="b">
              <div></div>
              <b>Dow Chemical</b>
            </div>
            <div className="c">
              <div> </div>
              <b>Repsol Refinery</b>
            </div>
            <div className="d">
              <div></div> <b>Rludecanyes Irrigation district</b>
            </div>
          </div>
        </section>

        <section id="section-two">
          <div style={{ width: "100%", padding: "5px 30px", height: "100%" }}>
            <Paper
              style={{
                color: "black",
                background: "#fce9d4",
                width: "100%",
                height: "auto",
                padding: 14,
                textAlign: "center",
              }}
              elevation={10}
            >
              Vila Seca UWWTP (EDAR VILASECA)
              <br />
              TV-3146, 43481 Vila-seca, Tarragona
            </Paper>
            <div
              style={{
                color: "black",
                width: "100%",
                padding: "10px 20%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ArrowDownwardIcon style={{ fontSize: 30 }} />
              <ArrowDownwardIcon style={{ fontSize: 30 }} />
            </div>

            <div style={{ width: "100%", display: "flex" }}>
              <div
                style={{
                  background: "#e9f0d7",
                  color: "#419e31",
                  marginRight: 20,
                  padding: 10,
                  width: "50%",
                }}
              >
                <b>Reclaimed water for Irrigation - 5.000 m3/day</b>

                <div style={{ color: "black", paddingTop: 5 }}>
                  Communitat de Regants del Panta de Riudecanyes Carrer de
                  Vallroquetes,2, 43201 Reus, Tarragona
                </div>
              </div>
              <div
                style={{
                  background: "#f0d9d7",
                  color: "#f85043",
                  width: "50%",
                  padding: 10,
                }}
              >
                <b>
                  Reclaimed water for Industry (Cooling Towers) - 17.000 m3/day
                </b>

                <ol style={{ color: "black", marginLeft: 10, paddingTop: 5 }}>
                  <li>
                    Dow Chemical Iberica Autovia de Tarragona a Salou, s/n,
                    43006 Tarragona
                  </li>
                  <li>
                    Repsol, Tarragona Carrer Autovia de Salou, 38, 43006
                    Tarragona
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="buttons">
        <div className={Styles.button} onClick={() => setStep(3)}>
          I need help designing my project
        </div>

        <div className={Styles.button} onClick={() => setStep(5)}>
          I have a project
        </div>
      </div>
      <div className={Styles.last}>
        Not ready Yet? Register your interest here.
      </div>

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
          padding-left: 70px;
          flex-direction: column;
        }

        #section-two {
          display: flex;
          flex-basis: 70%;
          padding: 20px;
        }

        .text-one {
          color: #3f9d2f;
          font-size: 60px;
          line-height: 100%;
          font-weight: bold;
          margin-bottom: 50px;
        }

        .instruction {
          color: #3f9d2f;
          border-top: 6px solid #3f9d2f;
          font-size: 30px;
          font-weight: bold;
          width: 350px;
          margin: auto;
          margin-bottom: 30px;
        }

        .list_four {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        .list_four_main {
          width: 20%;
          text-align: center;
          font-weight: bold;
        }
        .list_four_arrow {
          width: 10%;
          text-align: center;
          margin-top: -50px;
        }
        .shift_up {
          margin-top: -50px;
        }

        .price_name {
          font-size: 17px;
          font-weight: bold;
          padding: 5px;
          font-style: italic;
        }
        .price_name > span {
          font-size: 19px;
          color: green;
        }

        .price_wrapper {
          margin: 30px 0;
          border-top: 3px solid #3f9d2f;
          width: 350px;
          margin-bottom: 10px;
        }

        img {
          position: relative;
        }

        .icon1 {
          position: absolute;
          top: 40px;
          z-index: 1000;
          color: red;
          margin: 50px;
          left: 20px;
        }
        .icon2 {
          position: absolute;
          top: 10px;
          z-index: 1000;
          color: blue;
          left: 10px;
        }
        .icon4 {
          color: green;
          position: absolute;
          top: 100px;
          z-index: 1000;
          right: 100px;
        }
        .icon3 {
          position: absolute;
          top: 50;
          z-index: 1000;
          color: orange;
          right: 40;
        }

        .a,
        .b,
        .c,
        .d {
          height: 30px;
          display: flex;
        }

        .a div {
          width: 20px;
          height: 20px;
          display: inline-block;
          margin-right: 5px;
          background: blue;
        }
        .b div {
          width: 20px;
          height: 20px;
          display: inline-block;
          margin-right: 5px;
          background: red;
        }
        .c div {
          width: 20px;
          height: 20px;
          display: inline-block;
          margin-right: 5px;
          background: orange;
        }
        .d div {
          width: 20px;
          height: 20px;
          display: inline-block;
          margin-right: 5px;
          background: green;
        }
      `}</style>
    </>
  );
}
