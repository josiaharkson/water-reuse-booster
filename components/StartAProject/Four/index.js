import React from "react";
import Styles from "./index.module.css";
import Tab from "./Tab";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Indx({ setStep }) {
  return (
    <>
      <div id="root">
        <Tab
          a={
            <section id="section-one">
              <h3>Engineering Companies / OEMs</h3>
              <div
                style={{
                  border: "1px solid #3f9d2f",
                  borderRadius: 5,
                  marginTop: 5,
                  padding: 20,
                  display: "flex",
                }}
              >
                <div>
                  {" "}
                  {companies_a1.map(x => (
                    <div className="company" key={x.img + Math.random()}>
                      <div className="img">
                        <img src={x.img} alt="logo" height="50" />
                      </div>
                      <div className="bio">
                        <div className="name">{x.name}</div>
                        <div className="address">{x.address} </div>
                        <div className="url">{x.url}/</div>
                        <div className="phone">{x.phone}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  {companies_a2.map(x => (
                    <div className="company" key={x.img + Math.random()}>
                      <div className="img">
                        <img src={x.img} alt="logo" height="50" />
                      </div>
                      <div className="bio">
                        <div className="name">{x.name}</div>
                        <div className="address">{x.address} </div>
                        <div className="url">{x.url}/</div>
                        <div className="phone">{x.phone}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          }
          b={
            <section id="section-two">
              <h3>Component manufacturers</h3>
              <div
                style={{
                  border: "1px solid #3f9d2f",
                  borderRadius: 5,
                  marginTop: 5,
                  padding: 20,
                  display: "flex",
                }}
              >
                <div>
                  {companies_b1.map(x => (
                    <div className="company" key={x.img + Math.random()}>
                      <div className="img">
                        <img src={x.img} alt="logo" height="50" />
                      </div>
                      <div className="bio">
                        <div className="name">{x.name}</div>
                        <div className="address">{x.address} </div>
                        <div className="url">{x.url}/</div>
                        <div className="phone">{x.phone}</div>
                      </div>
                    </div>
                  ))}
                </div>{" "}
                <div>
                  {companies_b2.map(x => (
                    <div className="company" key={x.img + Math.random()}>
                      <div className="img">
                        <img src={x.img} alt="logo" height="50" />
                      </div>
                      <div className="bio">
                        <div className="name">{x.name}</div>
                        <div className="address">{x.address} </div>
                        <div className="url">{x.url}/</div>
                        <div className="phone">{x.phone}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          }
        />
      </div>

      <AlertDialog setStep={setStep} />

      <a className={Styles.last} onClick={() => setStep(5)}>
        Maybe later - Skip for now!
      </a>
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
          padding: 20px 30px;
          padding-bottom: 0;
        }

        #section-one {
          padding: 5px 20px;
          display: flex;
          flex-direction: column;
        }
        #section-two {
          display: flex;
          padding: 5px 20px;
          flex-direction: column;
        }

        h3 {
          color: #3f9d2f;
          border-top: 4px solid #3f9d2f;
          width: 100%;
          font-family: "Assistant";
          text-align: left;
          padding-bottom: 10px;
          font-weight: 900;
        }

        .company {
          display: flex;
          margin: 0;
          font-family: "Assistant";
        }
        .company > .img {
          flex-basis: 30%;
        }
        .company > .bio {
          flex-basis: 70%;
          text-align: center;
          font-family: "Assistant";
          padding: 0 10px;
          font-size: 14px;
        }
        .company .name {
          font-size: 18px;
          text-decoration: underline;
          font-weight: bold;
        }

        .button {
          border: none;
          color: #ffffff;
          text-align: center;
          max-width: 350px;
          cursor: pointer;

          border-radius: 20px;
          padding: 5px 30px;

          margin: auto;
          margin-top: -10px;
          margin-bottom: 0;
          letter-spacing: 3;
          font-family: "Assistant";
          /* font-family: "Montserrat", Arial; */
          font-weight: 900;
          word-spacing: 4;
          font-size: 17px;
          background-color: #3f9d2f;
        }
      `}</style>
    </>
  );
}

const companies_a1 = [
  {
    img: "/logo/9.png",
    name: "Acciona Infraesructuras S A",
    address: "Pl. d'Europa, 9, 11, 08908 L'Hospitalet de Llobregat, Barcelona",
    url: "https://www.acciona-infrasetructuras.es/",
    phone: "+349389220100",
  },

  {
    img: "/logo/4.png",
    name: "SUEX",
    address: "Passeig de la Zona France, 48, 08038 Barcelona.",
    url: "https://www.suex.es/",
    phone: "+349154410122",
  },
  {
    img: "/logo/5.png",
    name: "Ecolab Hispano-Portuguesa, S.L",
    address: "d'Europa, 9, 11, 08908 L'Hospitalet de Liobregat, Barcelona",
    url: "https://www.ecolab.es/",
    phone: "+349355110100",
  },
];

const companies_a2 = [
  {
    img: "/logo/1.png",
    name: "Veolia Water Technologies",
    address: "Av. de la Via Augussta, 3 08174 Sant Cugat del Valles, Barcelona",
    url: "https://www.veoliawatertechnologies.es/",
    phone: "+349355110100",
  },
  {
    img: "/logo/3.png",
    name: "Aqualia Infraesturas ",
    address: "Calle de Fransisco Gervas, 4,2 planta, 28108 Alcobendas, Madrid",
    url: "https://www.aqualia.com/",
    phone: "+34999110147",
  },
];

const companies_b1 = [
  {
    img: "/logo/6.png",
    name: "Flunce",
    address: "dHaEshel St 1, Caesarea, Isreal",
    url: "https://www.fluence.com/",
    phone: "+349654110113",
  },
  {
    img: "/logo/7.png",
    name: "Toray Membrabe Spain, S.L",
    address: "Pol. Ind Can Verdalet, C/B Nave 6, 08490 Tordera, Barcelona",
    url: "https://www.toraywater.es/",
    phone: "+349355110100",
  },
  {
    img: "/logo/2.png",
    name: "Hydronautics",
    address: "d'Europa, 9, 11, 08908 L'Hospitalet de Liobregat, Barcelona",
    url: "https://www.hydronautics.es/",
    phone: "+349365180188",
  },
];

const companies_b2 = [
  {
    img: "/logo/8.png",
    name: "Alfa Laval Iberia S.A",
    address: "Calle de Fransisco Gervas, 4,2 planta, 28108 Alcobendas, Madrid",
    url: "https://www.alfavelves.com/",
    phone: "+349579110140",
  },
  {
    img: "/logo/10.png",
    name: "DuPont Water Solutions",
    address: "Carrer Autovia de Salou, S?N, 43006, Tarragona,",
    url: "https://www.dupont.es/water",
    phone: "+343355117705",
  },
];

function AlertDialog({ setStep }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ margin: 30 }}>
      <div className="button" onClick={() => handleClickOpen()}>
        Send quotes request
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="h1">Quotes requested!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <b style={{ fontFamily: "Assistant" }}>
              {" "}
              Quote information will be added to your project when received.
              Please click on 'Continue' to finalise building your project.
            </b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setStep(5)} color="primary">
            Continue
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
