import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import classes from "./ThumbCard.module.css";
import VideoDetails from "./VideoDetails";
import { useState } from "react";

const ThumbCard = ({ video }) => {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card className={classes.root} raised={true} onClick={handleModalOpen}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={video.thumbnailUrl}
            alt="Video Thumbnail"
            className={classes.media}
          />
          <CardContent className={classes.content}>
            <Typography
              className={classes.description}
              gutterBottom
              variant="h5"
              component="div"
            >
              {video.videoTopic}
            </Typography>
            <Typography
              className={classes.description}
              variant="body2"
              component="div"
            >
              {video.supervisorName}
            </Typography>
            <Typography
              className={classes.description}
              variant="body2"
              component="div"
            >
              {video.assignedDate}
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
