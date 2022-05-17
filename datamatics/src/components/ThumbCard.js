import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import classes from "./ThumbCard.module.css";

const ThumbCard = ({
  thumbnailUrl,
  supervisorName,
  videoTopic,
  assignedDate,
}) => {
  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={thumbnailUrl}
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
            {videoTopic}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            component="div"
          >
            {supervisorName}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            component="div"
          >
            {assignedDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ThumbCard;
