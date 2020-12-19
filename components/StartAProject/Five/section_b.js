import React from "react";
import { IconButton } from "@material-ui/core";
import Styles from "./index.module.css";
import GetAppIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function App() {
  return (
    <div id="root">
      <div className="instruction">
        Upload your project documentation to post it in Water Reuse
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
        <span> O&M agreement </span>
        <IconButton>
          <GetAppIcon />
        </IconButton>
      </div>

      {/* <div className="button">Submit for approval</div> */}
      <AlertDialog />
      <div className="last">
        You will be notified via email when project will be posted after
        documents check
      </div>

      <div className={Styles.last}>
        Not ready Yet? Register your interest here.
      </div>
      <style jsx>{`
        #root {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          margin-top: 70px;
          align-items: center;
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

function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ margin: 30 }}>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Submit for approval
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="h1">Project submitted successfully!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <b style={{ fontFamil: "Assistant" }}>
              Congratulations on taking the first step. Our team will review
              your application and you will be notified via email as soon as
              your project is approved and posed on the marketplace.
            </b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <style jsx global>{`
        #h1 {
          color: #3f9d2f;
          border-top: 10px solid #3f9d2f;
          width: 100%;
          font-family: "Assistant";
          text-align: left;
          padding-bottom: 10px;
          font-weight: 900;
        }
      `}</style>
    </div>
  );
}
