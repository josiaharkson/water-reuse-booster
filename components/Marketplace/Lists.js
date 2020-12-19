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

export default function MediaCard({ projects, _click_OpenSingleProject }) {
  const classes = useStyles();

  return (
    <div className="root">
      {projects.map(p => (
        <Card className={classes.root} key={p.id}>
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
            <Button
              size="small"
              color="primary"
              onClick={() => _click_OpenSingleProject(p.id)}
            >
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
