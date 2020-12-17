import React from "react";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import RedditIcon from "@material-ui/icons/Reddit";

import Styles from "./index.module.css";
import SectionB from "./section_b";

export default function Indx() {
  return (
    <div id="root">
      <section id="section-one">
        <div>
          <div className="list">Home</div>
          <div className="list">News / Events</div>
          <div className="list">About Water Reuse</div>
          <div className="list">EU Regulations</div>
          <div className="list">Projects Database</div>
          <div className="list">Our Success Stories</div>
          <div className="list_sub_wrapper">
            <div className="list_sub">About us</div>
            <div className="list_sub">Members area</div>
            <div className="list_sub">Become a member</div>
          </div>

          <footer>
            <div className="footer_a">
              <div className="footer_title">Contact us</div>
              <div className="footer_sub footer_spacer">
                Water Reuse Booster LLC
              </div>
              <div className="footer_sub">Barcelona Spain</div>
              <div className="footer_sub email footer_spacer">
                halo@waterreusebooster.com
              </div>
              <div className="footer_sub">+34 910 00000000</div>
            </div>
            <div className="footer_b">
              <div className="footer_title">Follow us</div>
              <div className="social_icons">
                <GTranslateIcon />
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <RedditIcon />
              </div>
              <div className="footer_title footer_spacer">Newsletter</div>
              <div className="signup_wrapper">
                <div>Sign up</div>
                <input type="email" placeholder="example@mail.com" />
              </div>
            </div>
          </footer>
        </div>
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
          padding: 0;
          display: flex;
          height: 100%;
          flex-direction: column;
          flex-basis: 50%;
          background: url("/img/landing-page-right.jpg");
          background-origin: inherit;
          background-position: center;
          background-repeat: no-repeat;
          background-size: auto;
        }
        #section-two {
          display: flex;
          flex-basis: 50%;
          height: 100%;
          background: #f7fbfd;
        }

        #section-one > div {
          flex: 1;
          background: rgba(255, 255, 255, 0.8);
          height: 100%;
          padding-left: 40px;
          padding-top: 100px;
        }

        .list {
          font-size: 32px;
          font-weight: 900;
          font-family: "Assistant";
          cursor: pointer;
          word-spacing: 10px;
          width: 70%;
        }

        .list_sub_wrapper {
          margin-top: 30px;
          font-family: "Assistant";
        }

        .list_sub {
          width: 40%;
          font-size: 16px;
          cursor: pointer;
        }

        .list_sub:hover,
        .list:hover {
          letter-spacing: 1px;
          color: green;
        }

        footer {
          display: flex;
          height: auto;
          width: 100%;
          padding-top: 30px;
          font-family: "Assistant";
        }
        .footer_a {
          width: 100%;
          text-align: center;
        }
        .footer_b {
          width: 100%;
          text-align: center;
        }

        .footer_title {
          font-size: 25px;
          width: 100%;
          text-align: center;
        }

        .footer_sub {
          font-size: 16px;
        }

        .footer_spacer {
          padding-top: 20px;
        }

        .email {
          color: #5a80fb;
        }

        .social_icons {
          display: flex;
          color: #5a80fb;
          padding-top: 20px;
          justify-content: space-around;
        }

        .signup_wrapper {
          display: flex;
          width: 100%;
          flex-direction: row;
          height: 40px;
          border-radius: 17px;
          background: #edf1fe;
          margin-top: 10px;
        }
        .signup_wrapper > div {
          border-radius: 17px;
          background: #5a80fb;
          color: white;
          width: 30%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-family: "Assistant";
        }
        .signup_wrapper > input {
          width: 70%;
          background: #edf1fe;
          border-radius: 17px;
          border: none;
          padding: 0 10px;
        }

        .signup_wrapper > input:active {
          border: none;
          outline: none;
        }

        .signup_wrapper > input:focus {
          border: none;
          outline: none;
        }

         {
          /* section two */
        }
        .direction {
          text-decoration: underline;
          padding-top: 50px;
          text-align: center;
          width: 100%;
          color: black;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
