import React from "react";
import Link from "next/link";
import Styles from "./home.header.module.css";
import NavBar from "../global/NavBar";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowForward from "@material-ui/icons/ArrowForwardIos";

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
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [age2, setAge2] = React.useState("");
  const [age3, setAge3] = React.useState("");
  const [age4, setAge4] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleChange2 = event => {
    setAge2(event.target.value);
  };

  const handleChange3 = event => {
    setAge3(event.target.value);
  };

  const handleChange4 = event => {
    setAge4(event.target.value);
  };

  return (
    <>
      <NavBar direction="down" title="Cluster" />
      <div id="root">
        <section id="section-one">
          <div style={{ width: "100%", padding: "5px 30px", height: "100%" }}>
            <div className="instruction">Proposed Cluster</div>
            <img src="/img/map.jpg" width="350" />

            <Paper
              style={{
                color: "black",
                background: "#fce9d4",
                width: 300,
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
                width: 280,
                padding: 10,
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
        <section id="section-two">
          <div style={{ width: "100%", padding: "5px 30px", height: "100%" }}>
            <div>
              <div className="instruction">Potential Solution </div>

              <div className="list_four">
                <div className="list_four_main shift_up">
                  Treated wastewater from Vila Seca UWWTP <br />
                  <b style={{ color: "orange" }}>27.000 m3/day</b>
                </div>
                <div className="list_four_arrow">
                  <ArrowForward />
                </div>

                <div className="list_four_main">
                  <div>MBR</div>
                  <img src="/img/k.png" width="100%" />
                  <ArrowDownwardIcon style={{ fontSize: 30 }} />
                  <div>
                    Reclaimed water for Tarragona Irrigation District <br />
                    <b style={{ color: "green" }}> 5.000 m3/day</b>
                  </div>
                </div>
                <div className="list_four_arrow">
                  <ArrowForward />
                </div>
                <div className="list_four_main">
                  <div>RO</div>
                  <img src="/img/t.jpg" width="100%" />
                  <ArrowDownwardIcon style={{ fontSize: 30 }} />
                  <div>Concentrate fro discharge</div>
                </div>
                <div className="list_four_arrow">
                  <ArrowForward />
                </div>
                <div className="list_four_main shift_up">
                  Reclaimed water for Dow Chemical and Repsol <br />
                  <b style={{ color: "red" }}> 19.000 m3/day</b>
                </div>
              </div>

              <div className="price_wrapper">
                <ul style={{ marginLeft: 20 }}>
                  <li>
                    {" "}
                    <div className="price_name">
                      Estimated CapEx - <span>$1.2M </span>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="price_name">
                      Estimated OpEx - <span>$0.2M/month</span>
                    </div>
                  </li>
                  <li>
                    <div className="price_name">
                      Estimated cost of water - <span>$1.2 per m3</span>
                    </div>
                  </li>
                </ul>
              </div>

              <Link href="/vendors">
                <a className={Styles.button} style={{ background: "#3f9d2f" }}>
                  Find who can build it for you
                </a>
              </Link>

              <div>
                In Water Reuse Booster we believe in free market and don't
                promote any particular suppliers. We will provide you with a
                list of OEMs available in your region who may be capable to
                build such wastewater reuse plant and you are free to choose any
                of them as well as others not listed in our platform.
              </div>
            </div>
          </div>
        </section>
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

          #root {
            display: flex;
            flex: 1;
            width: 100%;
            height: 100vh;
            font-family: "Assistant";
          }

          #section-one {
            display: flex;

            flex-basis: 40%;
            padding: 20px;
          }

          #section-two {
            display: flex;
            flex-basis: 60%;
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
            padding-bottom: 20px;
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
        `}</style>
      </div>
    </>
  );
}
