import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
const useStyles = makeStyles({
  root: {
    width: 345,
    display: "inline-block",
    margin: 30,
  },
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: "#f4f4f4",
    color: "gray",
  },
});

const projects = [
  {
    title: "Project #1024",
    id: "1",
    name: "Wastewater Reuse Plant Vila Seca, Tarragina",
    rf: "$2,600,000",
    fp: "50",
    posted: "2020-12-10",
    target: "2021-12-02",
    img: "/img/mp1.jpg",
  },

  {
    title: "Project #1032",
    id: "2",
    name: "Wastewater Reuse Plant Fombio, Italy",
    rf: "$1,100,000",
    fp: "90",
    posted: "2020-12-10",
    target: "2021-06-11",
    img: "/img/mp2.png",
  },

  {
    title: "Project #6124",
    id: "3",
    name: "Wastewater Reuse Plant Chauny, France",
    rf: "$1,750,000",
    fp: "10",
    posted: "2020-12-10",
    target: "2021-11-01",
    img: "/img/mp3.jpg",
  },
];

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="root">
      {projects.map(p => (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {p.id}
              </Avatar>
            }
            title={<b>{p.title}</b>}
            subheader={<b style={{ fontSize: 15 }}>{p.name}</b>}
          />

          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={p.img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <div className="list">
                <span> Required funding:</span>
                <span className="a"> {p.rf}</span>
              </div>
              <Divider />
              <div className="list">
                <span> Funding progress - </span>{" "}
                <span className="a" style={{ textAlign: "center" }}>
                  {" "}
                  {`${p.fp}%`}
                  <LinearProgress
                    variant="determinate"
                    value={parseInt(p.fp)}
                    style={{ marginTop: 2 }}
                  />
                </span>
              </div>
              <Divider />
              <div className="list">
                <span>Posted on: </span>
                <span className="a">{p.posted}</span>
              </div>
              <Divider />{" "}
              <div className="list">
                <span> Target Start Date:</span>
                <span className="a"> {p.target}</span>
              </div>
              <Divider />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Read More...
            </Button>
          </CardActions>
        </Card>
      ))}

      <style jsx>{`
        .root {
          display: block;
          width: 100%;
        }
        .list {
          font-family: "Assistant";
          font-size: 16px;
          padding: 5px 10px;
          display: flex;
        }
        .list span {
          flex-basis: 50%;
        }
        .list .a {
          font-weight: bold;

          margin-left: 20px;
          font-size: 15px;
        }
      `}</style>
    </div>
  );
}
