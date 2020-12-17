import React from "react";
import clxs from "clsx";
import Link from "next/link";
import Slide from "@material-ui/core/Slide";

import Styles from "./css/navbar.module.css";
import HomeIcon from "@material-ui/icons/Home";

const NavBar = ({ direction, timeout }) => {
  return (
    <Slide
      direction={direction ? direction : "right"}
      in={true}
      mountOnEnter
      unmountOnExit
      timeout={timeout ? timeout : 1000}
    >
      <div className={Styles.root} style={{ userSelect: "none" }}>
        <a className={Styles.item}>Success Stories</a>
        <a className={Styles.item}>About water reuse</a>
        <a className={clxs(Styles.item, Styles.active)}>Home</a>
        <a className={Styles.item}>About us</a>
        <a className={Styles.item}>Contact us</a>
      </div>
    </Slide>
  );
};

export default NavBar;
