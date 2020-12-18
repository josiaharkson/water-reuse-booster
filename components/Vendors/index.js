import React from "react";
import Link from "next/link";
import NavBar from "../global/NavBar";

export default function Indx() {
  return (
    <>
      <NavBar direction="down" title="Vendors" />
      <div id="root">
        <section id="section-one">
          <h2>Engineering Companies / OEMs</h2>
          <div
            style={{
              border: "1px solid #3f9d2f",
              borderRadius: 5,
              marginTop: 5,
              padding: 20,
            }}
          >
            {companies_a.map(x => (
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
        </section>

        <section id="section-two">
          <h2>Component manufacturers</h2>
          <div
            style={{
              border: "1px solid #3f9d2f",
              borderRadius: 5,
              marginTop: 5,
              padding: 20,
            }}
          >
            {companies_b.map(x => (
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
        </section>
      </div>
      <Link href="/marketplace">
        <div className="button">
          Already have your project design? <br />
          Post it in our marketplace!
        </div>
      </Link>
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
        }

        #section-one {
          padding: 30px 20px;
          display: flex;
          height: 100%;
          flex-direction: column;
          flex-basis: 50%;
        }
        #section-two {
          display: flex;
          flex-basis: 50%;
          height: 100%;
          padding: 30px 20px;
          flex-direction: column;
        }

        h2 {
          color: #3f9d2f;
          border-top: 6px solid #3f9d2f;
          width: 70%;
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

const companies_a = [
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

  {
    img: "/logo/6.png",
    name: "Flunce",
    address: "dHaEshel St 1, Caesarea, Isreal",
    url: "https://www.fluence.com/",
    phone: "+349654110113",
  },
  {
    img: "/logo/8.png",
    name: "Alfa Laval Iberia S.A",
    address: "Calle de Fransisco Gervas, 4,2 planta, 28108 Alcobendas, Madrid",
    url: "https://www.alfavelves.com/",
    phone: "+349579110140",
  },

  {
    img: "/logo/3.png",
    name: "Aqualia Infraesturas ",
    address: "Calle de Fransisco Gervas, 4,2 planta, 28108 Alcobendas, Madrid",
    url: "https://www.aqualia.com/",
    phone: "+34999110147",
  },
];
const companies_b = [
  {
    img: "/logo/1.png",
    name: "Veolia Water Technologies",
    address: "Av. de la Via Augussta, 3 08174 Sant Cugat del Valles, Barcelona",
    url: "https://www.veoliawatertechnologies.es/",
    phone: "+349355110100",
  },

  {
    img: "/logo/4.png",
    name: "SUEX",
    address: "Passeig de la Zona France, 48, 08038 Barcelona.",
    url: "https://www.suex.es/",
    phone: "+349154410122",
  },

  {
    img: "/logo/9.png",
    name: "Acciona Infraesructuras S A",
    address: "Pl. d'Europa, 9, 11, 08908 L'Hospitalet de Llobregat, Barcelona",
    url: "https://www.acciona-infrasetructuras.es/",
    phone: "+349389220100",
  },

  {
    img: "/logo/5.png",
    name: "Ecolab Hispano-Portuguesa, S.L",
    address: "d'Europa, 9, 11, 08908 L'Hospitalet de Liobregat, Barcelona",
    url: "https://www.ecolab.es/",
    phone: "+349355110100",
  },

  {
    img: "/logo/10.png",
    name: "DuPont Water Solutions",
    address: "Carrer Autovia de Salou, S?N, 43006, Tarragona,",
    url: "https://www.dupont.es/water",
    phone: "+343355117705",
  },
];
