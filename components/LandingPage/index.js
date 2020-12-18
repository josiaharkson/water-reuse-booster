import React from "react";
import Link from "next/link";
import Styles from "./home.header.module.css";
import Slide from "@material-ui/core/Slide";

export default function Indx() {
  return (
    <div id="root">
      <section id="section-one">
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <div className="text-one">WATER REUSE BOOSTER</div>
        </Slide>

        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1700}
        >
          <div className="text-two">
            Making reclaimed water affordable for everyone
          </div>
        </Slide>

        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2300}
        >
          <div className="buttonwrapper">
            <Link href="/home">
              <a className={Styles.button} style={{ background: "#3f9d2f" }}>
                <span>Start Now </span>
              </a>
            </Link>
          </div>
        </Slide>
      </section>
      <section id="section-two" />
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
          background: #f9fff8;
          align-items: center;
          justify-content: center;
          padding: 40px 80px;
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

        .text-one {
          color: #3f9d2f;
          font-size: 60px;
          line-height: 100%;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .text-two {
          color: #457ab1;
          text-align: left;
          font-weight: 700;
          width: 100%;
          font-size: 20px;
        }
        .buttonwrapper {
          margin-top: 100px;
        }
      `}</style>
    </div>
  );
}
