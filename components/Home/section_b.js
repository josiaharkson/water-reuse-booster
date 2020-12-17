import React from "react";
import Link from "next/link";

const images = [
  "/img/investor.jpg",
  "/img/urban.jpg",
  "/img/agric.jpg",
  "/img/industry.jpg",
];
export default function App() {
  return (
    <div id="root">
      <div className="direction">
        Select one of below options to try Water Reuse Booster
      </div>

      <div className="row_one">
        <div className="card">
          <Link href="/investor">
            <a>
              I'm <br /> Investor
            </a>
          </Link>

          <img src={images[0]} />
        </div>
        <div className="card">
          <Link href="">
            <a>
              I'm from
              <br /> Urban Wastewaer Plant
            </a>
          </Link>

          <img src={images[1]} />
        </div>
      </div>
      <div className="row_two">
        <div className="card">
          <Link href="/agriculture">
            <a>
              I'm from
              <br /> Agricultural Sector
            </a>
          </Link>
          <img src={images[2]} />
        </div>
        <div className="card">
          <Link href="">
            <a>
              I'm from
              <br /> Industry
            </a>
          </Link>
          <img src={images[3]} />
        </div>
      </div>

      <style jsx>{`
        #root {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .direction {
          text-decoration: underline;
          padding-top: 50px;
          text-align: center;
          width: 100%;
          color: black;
          cursor: pointer;
        }

        .row_one,
        .row_two {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .card {
          margin: 30px;
          height: 32ch;
          width: 32ch;
          box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
          transition: box-shadow 0.5s;
          overflow: hidden;
          position: relative;
          border-radius: 15px;
          border: 1px solid #3f9d2f;
        }

        .card img {
          width: 100%;
          height: 100%;
          opacity: 0.7;
        }

        .card a {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: #3f9d2fd1;
          text-align: center;
          padding: 5px 0;
          font-family: "Assistant";
          font-weight: bold;
          font-size: 16px;
          letter-spacing: 1px;
          color: #fff;
          z-index: 100;
          text-decoration: none;
          cursor: pointer;
        }

        .card:hover {
          box-shadow: 0px 20px 90px -10px rgba(0, 0, 0, 0.4);
        }

        .card:hover > img {
          animation: zoominoutsinglefeatured 1s forwards;
          animation-timing-function: linear;
        }

        @keyframes zoominoutsinglefeatured {
          0% {
            transform: scale(1, 1);
          }
          50% {
            transform: scale(1.1, 1.1);
          }
          100% {
            transform: scale(1.2, 1.2);
          }
        }
      `}</style>
    </div>
  );
}
