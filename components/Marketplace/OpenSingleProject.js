import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import GetAppIcon from "@material-ui/icons/CloudUpload";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import SecondComp from "./SecondComp";
import WRBMarketplaceContract from "./contracts/WRBMarketplace.json";
import ProjectContract from "./contracts/Project.json";
import getWeb3 from "./getWeb3";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  open,
  setOpen,
  singleProjectDetail,
}) {
  const { title, id, name, rf, fp, posted, target, img } = singleProjectDetail;
  const classes = useStyles();
  console.log(32323);

  const [state, setState] = React.useState({
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    amount: "",
  });

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    console.log({ rrr: e.target.value });
    setState({
      ...state,
      amount: e.target.value,
    });
  };

  const [hasMadeRequest, setHMR] = React.useState(1);

  const _web3_Request = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      console.log({ web3 });

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      console.log({ accounts });

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      console.log({ networkId });

      const deployedNetwork = WRBMarketplaceContract.networks[networkId];
      const instance = new web3.eth.Contract(
        WRBMarketplaceContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      await instance.methods.createProject(150).send({ from: accounts[0] });
      /* instance.options.address = "0x31F49ae38c8a2C97035532BeC9995A6d6508ee31";
       */
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      setState({ ...state, web3, accounts, contract: instance });
      setHMR(hasMadeRequest + 1);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  const invest = async () => {
    const { accounts, contract, web3, amount } = state;
    if (!amount.trim()) return alert("Invalid amount!");

    try {
      /*
      const web3 = await getWeb3();
      console.log({ web3 });
   */
      /* const networkId = await web3.eth.net.getId();
      console.log({ networkId }); */

      /* const deployedNetworkProject = ProjectContract.networks[networkId];
       */
      const response = await contract.methods.deployedProjects(0).call();

      const projectInstance = new state.web3.eth.Contract(
        ProjectContract.abi,
        response
      );

      await projectInstance.methods.invest().send({
        from: accounts[0],
        value: web3.utils.toWei(`${parseInt(amount) * 0.0015}`, "ether"),
      });

      /* const projectInstance = new web3.eth.Contract(ProjectContract.abi);
      projectInstance.options.address =
        "0x31F49ae38c8a2C97035532BeC9995A6d6508ee31";

      const res = await projectInstance.methods.invest().send({
        from: accounts[0],
        value: web3.utils.toWei(`${parseInt(amount) * 0.0015}`, "ether"),
      }); */

      console.log({ res });

      // if payment is sucessful the funtion below will open a dialog confirmation box, with success message
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    if (!state.web3 && !state.accounts && !state.contract) {
      _web3_Request();
    }
  });

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            {singleProjectDetail && (
              <div className="_head">
                <div className="_name">{name}</div>
                <div className="_title">{title}</div>
              </div>
            )}
            <Button color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>

        <SecondComp
          project={singleProjectDetail}
          state={state}
          setState={setState}
          handleChange={handleChange}
          invest={invest}
        />
      </Dialog>
      <style jsx>{`
        ._head {
          display: flex;
          width: 90%;
          flex-direction: column;
        }

        ._head ._title {
          font-family: "Assistant";
          font-weight: bold;
        }
        ._head ._name {
          font-size: 20px;
          font-family: "Assistant";
        }
      `}</style>
    </>
  );
}

function PaySuccessAlertDialog({ handleClose }) {
  return (
    <div style={{ zIndex: 100000 }}>
      <Dialog
        style={{ zIndex: 100000 }}
        open={true}
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="h1">Successfully!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <b style={{ fontFamil: "Assistant", fontSize: 25 }}>
              Congratulations lorem lorem lorem
            </b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} color="primary">
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
