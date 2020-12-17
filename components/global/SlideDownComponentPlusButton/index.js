import React from "react";
import Prototype from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";

function SlideDownComponent(props) {
  const [openX, setOpenX] = React.useState(false);

  // IF THE OPEN?SETOPEN CONTROLS ARE ASSIGNED FROM THE PARENT USE THE, else USE INTERNALL USESTATE
  const open = props.open && props.setOpen ? props.open : openX;
  const setOpen = props.open && props.setOpen ? props.setOpen : setOpenX;

  return (
    <>
      <StyledButton open={open} setOpen={setOpen} />
      <Slide direction="down" in={open} mountOnEnter unmountOnExit>
        <div id={"drop-down"}>{props.children}</div>
      </Slide>

      <style jsx>{`
        #drop-down {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 80vh;
          background-color: white;
          color: black;
        }
      `}</style>
    </>
  );
}

SlideDownComponent.propTypes = {
  open: Prototype.bool,
  setOpen: Prototype.func,
};

const StyledButton = ({ open, setOpen }) => {
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        onClick={() => setOpen(!open)}
        aria-label="close"
      >
        <div id="main">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </IconButton>
      <style jsx>{`
        #main {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 1.5rem;
          height: 1.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
        }

        #main:focus {
          outline: none;
        }

        .line {
          width: 2rem;
          height: 0.1rem;
          background: ${open ? "#0D0C1D" : "#EFFFFA"};
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }

        .line:first-child {
          transform: ${open ? "rotate(45deg)" : "rotate(0)"};
        }

        .line:nth-child(2) {
          opacity: ${open ? "0" : "1"};
          transform: ${open ? "translateX(20px)" : "translateX(0)"};
        }

        .line:nth-child(3) {
          transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
        }
      `}</style>
    </>
  );
};
export default SlideDownComponent;
