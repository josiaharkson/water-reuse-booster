import React from "react";
import NavBar from "../global/NavBar";
import Styles from "./index.module.css";
import SectionB from "./section_b";

export default function Indx() {
  return (
    <>
      <NavBar direction="down" title="Investors" />
      <div id="root">
        <section id="section-one">
          <h1>WATER REUSE BOOSTER</h1>
          <h5>Blockchain enabled marketplace</h5>

          <p>
            Water Reuse Boster cloud marketplace is a decentralized water
            funding platform that employs cloud, API, AI, blockchain to automate
            investment processes in water treatment sector.
          </p>

          <p>Benefits to water infrastructure investors and donors include:</p>

          <ul>
            <li>Lower transaction costs & faster cycle time</li>
            <li>
              New finance models (e.g. Co-Investing, Blended, Performance bonds)
            </li>
            <li>Better and more accurate decision making</li>
            <li>Impact ROI Accounting (for enviromental and social benefits</li>
            <li>Investment portfolio management</li>
          </ul>

          <h5>Why Blockchain?</h5>
          <p>
            Blockchain is a secure, transparent and distrubuted public ledger
            that records transactions between parties. The information can't be
            hidden or changed by the corrupt behaviour of governments,
            corporations or individuals.
          </p>

          <p>
            The real time data on waer quality can be used to amke better
            decisions in times of increasing water scarcity.
          </p>
        </section>

        <section id="section-two">
          <SectionB />
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
            padding: 30px 50px;
            display: flex;
            height: 100%;
            flex-direction: column;
            flex-basis: 50%;
          }
          #section-two {
            display: flex;
            flex-basis: 50%;
            height: 100%;
          }

          h1,
          h5 {
            color: #3f9d2f;
            width: 100%;
            font-family: "Assistant";
            text-align: center;
            font-weight: 900;
          }

          h1 {
            font-size: 34px;
            padding-bottom: 20px;
          }

          p,
          ul {
            list-style: none;
            font-weight: 900;
            font-family: "Assistant";
            font-size: 17px;
            padding-bottom: 20px;
          }

          li:before {
            content: "*"; /* FontAwesome Unicode */

            display: inline-block;
            margin-left: -1.3em; /* same as padding-left set on li */
            width: 1.3em; /* same as padding-left set on li */
          }
          h5 {
            font-size: 20px;
            padding-bottom: 20px;
          }
        `}</style>
      </div>
    </>
  );
}
