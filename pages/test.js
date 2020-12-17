import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <>
      <animated.div
        class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: [2, 2, 1] })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />

      <div className="article-container">
        <div className="article-img-holder"></div>
        <a className="article-title-link" href="#">
          Music that will wake you up on your way to work
        </a>
      </div>

      <div className="wrapper">
        <div className="parent" onclick="">
          <div className="child bg-one">
            <a href="#">Los Angeles</a>
          </div>
        </div>

        <div className="parent right" onclick="">
          <div className="child bg-two">
            <a href="#">London</a>
          </div>
        </div>

        <div className="parent" onclick="">
          <div className="child bg-three">
            <a href="#">New York</a>
          </div>
        </div>

        <div className="parent right" onclick="">
          <div className="child bg-four">
            <a href="#">Hollywood</a>
          </div>
        </div>

        <div className="parent" onclick="">
          <div className="child bg-five">
            <a href="#">Dubai</a>
          </div>
        </div>

        <div className="parent right" onclick="">
          <div className="child bg-six">
            <a href="#">San Francisco</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        html,
        body,
        #root {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: white;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
            helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
            sans-serif;
          background: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          cursor: default;
        }

        #root {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #f0f0f0;
        }

        .card {
          width: 45ch;
          height: 45ch;
          background: grey;
          border-radius: 5px;
          background-image: url(https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40);
          background-size: cover;
          background-position: center center;
          box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
          transition: box-shadow 0.5s;
          will-change: transform;
          border: 15px solid white;
        }

        .card:hover {
          box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
        }

        .article-container {
          width: 300px;
          height: 200px;
          border: 1px solid #000000;
          overflow: hidden;
          position: relative;
        }

        .article-img-holder {
          width: 100%;
          height: 100%;
          background: url(https://awik.io/demo/background-image-zoom/traffic2.jpg);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          transition: all 1s;
        }

        .article-img-holder:hover {
          transform: scale(1.2);
        }

        .article-title-link {
          color: #ffffff;
          text-shadow: 1px 1px 1px #000000;
          font-size: 20px;
          font-weight: bold;
          position: absolute;
          bottom: 0;
          padding: 10px;
          text-decoration: none;
        }
        .article-title-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default Card;
