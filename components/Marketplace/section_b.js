import React from "react";
import Link from "next/link";
import GetAppIcon from "@material-ui/icons/GetApp";
import { IconButton } from "@material-ui/core";

export default function App() {
  return (
    <div id="root">
      <div className="instruction">
        Download your project documentation to post it in Water Reuse
        BoosterMarketplace{" "}
      </div>

      <div className="item">
        <span> Technology design </span>
        <IconButton>
          <GetAppIcon />
        </IconButton>
      </div>

      <div className="item">
        <span> Drawings </span>
        <IconButton>
          <GetAppIcon />
        </IconButton>
      </div>

      <div className="item">
        <span> Site plan </span>{" "}
        <IconButton>
          <GetAppIcon />
        </IconButton>
      </div>

      <div className="item">
        <span> EPC agreement </span>
        <IconButton>
          <GetAppIcon />
        </IconButton>
      </div>

      <div className="item">
        <span> o&M agreement </span>
        <IconButton>
          <GetAppIcon />
        </IconButton>
      </div>

      <div className="button">Post project</div>

      <div className="last">
        You will be notified via email when project will be posted after
        documents check
      </div>
      <style jsx>{`
        #root {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .instruction {
          color: #3f9d2f;
          font-weight: bold;
          font-size: 20px;
          font-family: "Assistant";
          margin-bottom: 20px;
          padding: 0 30px;
          text-align: center;
        }

        .button {
          display: flex;
          width: 240px;
          line-height: 100%;
          text-decoration: none;
          padding: 13px 8px;
          font-family: "Assistant";
          text-align: center;
          color: #fff;
          font-family: "Assistant";
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: bold;
          margin: 20px auto;
          margin-top: 10px;
          border-radius: 15px;
          box-sizing: border-box;
          background: #3f9d2f;
        }
        .item {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 40%;
          font-weight: 900;
          border-bottom: 1px solid #e6cece;
          font-size: 16px;
        }
        .last {
          font-family: "Assistant";
          font-weight: 900;
        }
      `}</style>
    </div>
  );
}
