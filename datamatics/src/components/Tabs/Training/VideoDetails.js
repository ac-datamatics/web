import * as React from "react";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import ReactPlayer from "react-player";

import classes from "./VideoDetails.module.css";

export default function VideoDetails({ open, handleClose, video }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className={classes.card}>
          <div className={classes.cardContents}>
            <h1 className={classes.cardTitle}>{video.videoTopic}</h1>
            <div className={classes.videoPlayer}>
              <ReactPlayer
                url={video.videoUrl}
                playing={true}
                // height="100%"
                pip={true}
                controls={true}
                light={video.thumbnailUrl}
              />
            </div>
            <div className={classes.videoDescription}>
              <div>{video.supervisorName}</div>
            </div>
          </div>
        </Card>
      </Modal>
    </div>
  );
}
