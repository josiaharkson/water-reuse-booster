import React from "react";
import Link from "next/link";
import Styles from "./home.header.module.css";
import NavBar from "../global/NavBar";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

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

export default function Indx({ setStep }) {
  const classes = useStyles();
  const [country, setCountry] = React.useState("Select");
  const [state, setState] = React.useState("Select");
  const [city, setCity] = React.useState("Select");
  const [company, setCompany] = React.useState("Select");

  return (
    <>
      <div id="root">
        <section id="section-one">
          <div className="text-one">WATER REUSE BOOSTER</div>
          <p>
            Water Reuse Booster will help you to find potential partners for
            your wastewater reuse project based on the following criteria:
          </p>

          <ul>
            <li>Geographical proximity</li>
            <li>Water demand / supply balance</li>
            <li>
              Reclaimed water use (only irrigation and cooling towers supply are
              in scope)
            </li>
            <li>Optimal cost of potential technological solution.</li>
          </ul>
        </section>
        <section id="section-two">
          <div>
            <div className="instruction">Please select from below options</div>

            {/* <div className="row">
              <div className="title">
                <span>Country</span>
              </div>
              <div className="custom-select">
                <select>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                </select>
              </div>
            </div> */}

            <div className="row">
              <div className="title">
                <span>Country</span>
              </div>
              <div className="custom-select">
                <FormControl className={classes.margin}>
                  <InputLabel id="demo-customized-select-label"> </InputLabel>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    input={<BootstrapInput />}
                  >
                    <MenuItem value="Select">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={"Spain"}>Spain</MenuItem>
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Italy"}>Italy</MenuItem>
                    <MenuItem value={"Portugal"}>Portugal</MenuItem>
                    <MenuItem value={"Netherlands"}>Netherlands</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row">
              <div className="title">
                <span>Province</span>
              </div>
              <div className="custom-select">
                <FormControl className={classes.margin}>
                  <InputLabel id="demo-customized-select-label"> </InputLabel>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={state}
                    onChange={e => setState(e.target.value)}
                    input={<BootstrapInput />}
                  >
                    <MenuItem value="Select">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={"Barcelona"}>Barcelona</MenuItem>
                    <MenuItem value={"Valencia"}>Valencia</MenuItem>
                    <MenuItem value={"Madrid"}>Madrid</MenuItem>
                    <MenuItem value={"Alicante"}>Alicante</MenuItem>
                    <MenuItem value={"Murcia"}>Murcia</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row">
              <div className="title">
                <span>City</span>
              </div>
              <div className="custom-select">
                <FormControl className={classes.margin}>
                  <InputLabel id="demo-customized-select-label"> </InputLabel>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    input={<BootstrapInput />}
                  >
                    <MenuItem value="Select">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={"Tarragona"}>Tarragona</MenuItem>
                    <MenuItem value={"Terrassa"}>Terrassa</MenuItem>
                    <MenuItem value={"Vilanova"}>Vilanova</MenuItem>
                    <MenuItem value={"Reuc"}>Reuc</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row">
              <div className="title">
                <span>Company</span>
              </div>
              <div className="custom-select">
                <FormControl className={classes.margin}>
                  <InputLabel id="demo-customized-select-label"> </InputLabel>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    input={<BootstrapInput />}
                  >
                    <MenuItem value="Select">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={"Comunitat de Regants de Riudecanyes"}>
                      Comunitat de Regants de Riudecanyes
                    </MenuItem>
                    <MenuItem value={"Comunitat de Regants del Molinet"}>
                      Comunitat de Regants del Molinet
                    </MenuItem>
                    <MenuItem value={"Comunitat de regants de Foix"}>
                      Comunitat de regants de Foix
                    </MenuItem>
                    <MenuItem value={"Comunitat de Regants del Baix Priorat"}>
                      Comunitat de Regants del Baix Priorat
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <a className={Styles.button} onClick={() => setStep(2)}>
              Generate potential cluster{" "}
            </a>

            <a className={Styles.last}>
              You company is not listed? Contact us and we will add it!
            </a>
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
          }

          #section-one {
            display: flex;
            flex-direction: column;
            flex-basis: 45%;
            align-items: center;
            padding: 70px 80px;
          }

          #section-two {
            display: flex;
            flex-basis: 55%;
            color: white;
            background: url("/img/landing-page-right.jpg");
            background-origin: inherit;
            background-position: center;
            background-repeat: no-repeat;
            background-size: auto;
          }

          #section-two > div {
            flex: 1;
            background: rgba(255, 255, 255, 0.8);
            height: 100%;
            padding-left: 40px;
            padding-top: 100px;
            flex-direction: column;
            padding: 70px 80px;
          }
          .text-one {
            color: #3f9d2f;
            font-size: 60px;
            line-height: 100%;
            font-weight: bold;
            margin-bottom: 50px;
          }

          p,
          ul {
            list-style: none;
            font-weight: 900;
            font-family: "Assistant";
            font-size: 17px;
            padding-bottom: 20px;
          }
          li {
            margin: 10px 0;
          }
          li:before {
            content: "*"; /* FontAwesome Unicode */

            display: inline-block;
            margin-left: -1.3em; /* same as padding-left set on li */
            width: 1.3em; /* same as padding-left set on li */
          }
           {
            /* SECtion 2 */
          }
          .instruction {
            background: #d3f0d2;
            height: 72px;
            font-weight: 900;
            color: black;
            font-family: "Assistant";
            display: flex;
            align-items: center;
            font-size: 20px;
            justify-content: center;
            margin-bottom: 40px;
          }

          .row {
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
          }

          .row > .title {
            flex-basis: 40%;
            color: black;
            height: 100%;
            border: 1px solid rgba(213, 213, 213, 1);
            text-align: left;
            display: flex;
            border-radius: 4px;
            font-family: "Assistant";
            align-items: center;
            padding: 0 15px;
            font-size: 16px;
          }

          .row > .custom-select {
            flex-basis: 60%;
            position: relative;
            height: 100%;
            border: 1px solid rgba(213, 213, 213, 1);
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.9);
            padding: 0 15px;
            font-family: "Assistant";
            font-size: 16px;
          }

          select {
            outline: none;
            height: 100%;
            width: 100%;
            border: none;
          }

          select > option {
            color: red;
            width: 100% + 30px;
            height: 202px;
          }
        `}</style>
      </div>
    </>
  );
}
