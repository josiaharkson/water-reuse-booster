import React from "react";
import NavBar from "../global/NavBar";
import List from "./Lists";
import AppBar from "./AppBar";
import OpenSingleProject from "./OpenSingleProject";

import WRBMarketplaceContract from "./contracts/WRBMarketplace.json";
import ProjectContract from "./contracts/Project.json";
import getWeb3 from "./getWeb3";

const projects = [
  {
    title: "Project #1024",
    id: "1",
    name: "Wastewater Reuse Plant Vila Seca, Tarragona, Spain",
    rf: "$2,600,000",
    fp: "50",
    posted: "2020-12-10",
    target: "2021-12-02",
    img: "/img/mp1.jpg",
  },

  {
    title: "Project #1032",
    id: "2",
    name: "Wastewater Reuse Plant, Fombio, Italy",
    rf: "$1,100,000",
    fp: "90",
    posted: "2020-12-10",
    target: "2021-06-11",
    img: "/img/mp2.png",
  },

  {
    title: "Project #6124",
    id: "3",
    name: "Wastewater Reuse Plant, Chauny, France",
    rf: "$1,750,000",
    fp: "10",
    posted: "2020-12-10",
    target: "2021-11-01",
    img: "/img/mp3.jpg",
  },
];

export default function Indx() {
  const [state, setState] = React.useState({
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
  });

  const [hasMadeRequest, setHMR] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const [singleProjectDetail, setSingleProjectDetail] = React.useState({});

  const _click_OpenSingleProject = id => {
    setSingleProjectDetail(projects[parseInt(id) - 1]);
    setOpen(true);
  };

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

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      setState({ web3, accounts, contract: instance });
      setHMR(hasMadeRequest + 1);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  const runExample = async () => {
    const { accounts, contract } = state;

    /* // Stores a given value, 5 by default.
    await contract.methods.deployedProjects(0).call();
    // Get the value from the contract to prove it worked. */
    await contract.methods.createProject(100).send({ from: state.accounts[0] });

    const response = await contract.methods.deployedProjects(0).call();

    console.log({ response });

    // Update state with the result.
    setState({ storageValue: response });
  };

  // React.useEffect(() => {
  //   if (hasMadeRequest <= 2)
  //     if (state.web3 || state.accounts) {
  //       runExample();
  //     }
  // });

  // React.useEffect(() => {
  //   if (!state.web3 && !state.accounts && !state.contract) {
  //     _web3_Request();
  //   }
  // });
  return (
    <>
      <NavBar direction="down" title="Market Place" />
      <AppBar />
      <OpenSingleProject
        open={open}
        setOpen={setOpen}
        singleProjectDetail={singleProjectDetail}
      />
      <div id="root">
        <List
          projects={projects}
          _click_OpenSingleProject={_click_OpenSingleProject}
        />

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
        `}</style>
      </div>
    </>
  );
}
