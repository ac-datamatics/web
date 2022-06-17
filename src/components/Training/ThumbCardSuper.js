import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import classes from "./ThumbCard.module.css";
import VideoDetails from "./VideoDetails";
import { useState } from "react";

const ThumbCardSuper = ({ video }) => {
  const [open, setOpen] = useState(false);
  const [isAssigned, setIsAssigned] = useState(video.is_assigned);
  const uploadDate = new Date(video.uploadDate);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleSelectAssigned = (event) => {
    setIsAssigned(event.target.value);

    const body = {
      agentUsername: video.agentUsername,
      callStartUTCDate: video.callStartUTCDate,
      updateKey: "is_assigned",
      updateValue: event.target.value,
    };

    fetch(
      "https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video",
      {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: { "content-type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((_data) => {
        console.debug(_data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Card className={classes.root} raised={true}>
        <div
          style={{
            backgroundColor: "#232f3e",
            display: "flex",
            justifyContent: "right",
            padding: "10px 10px 0px 0px",
          }}
        >
          <select
            value={isAssigned}
            onChange={handleSelectAssigned}
            className={classes.customSelect}
          >
            <option value="false">Not Assigned</option>
            <option value="true">Assigned</option>
          </select>
        </div>
        <CardActionArea onClick={handleModalOpen}>
          <CardContent className={classes.content}>
            <Typography
              className={classes.description}
              gutterBottom
              variant="h5"
              component="div"
            >
              {video.agentUsername}
            </Typography>
            <Typography
              className={classes.description}
              variant="body2"
              component="div"
            >
              {uploadDate.toLocaleString()}
            </Typography>
            <Typography
              className={classes.description}
              variant="body2"
              component="div"
            >
              Rating: {video.rating}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <VideoDetails
        open={open}
        handleClose={() => setOpen(false)}
        video={video}
      />
    </>
  );
};

export default ThumbCardSuper;
