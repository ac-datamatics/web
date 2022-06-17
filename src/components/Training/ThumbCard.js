import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { BsThreeDots } from "react-icons/bs";

import classes from "./ThumbCard.module.css";
import VideoDetails from "./VideoDetails";
import { useState } from "react";

const ThumbCard = ({ video }) => {
  const [open, setOpen] = useState(false);
  const uploadDate = new Date(video.uploadDate);

  const handleModalOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card className={classes.root} raised={true}>
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

export default ThumbCard;
