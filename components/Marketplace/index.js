import React from "react";
import NavBar from "../global/NavBar";
import List from "./Lists";
import AppBar from "./AppBar";
import OpenSingleProject from "./OpenSingleProject";

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
  const [hasMadeRequest, setHMR] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const [singleProjectDetail, setSingleProjectDetail] = React.useState({});

  const _click_OpenSingleProject = id => {
    setSingleProjectDetail(projects[parseInt(id) - 1]);
    setOpen(true);
  };

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
