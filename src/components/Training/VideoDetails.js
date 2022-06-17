import * as React from "react";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";

import classes from "./VideoDetails.module.css";

export default function VideoDetails({ open, handleClose, video }) {
  const link = "https://d13wsb297kr3hd.cloudfront.net/";
  const uploadDate = new Date(video.uploadDate);
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
            {/* <h1 className={classes.cardTitle}>
              {video.agentUsername} - {video.rating}
            </h1> */}
            <div className={classes.videoPlayer}>
              <video
                width="100%"
                height="auto"
                crossOrigin="anonymous"
                controls
              >
                <source
                  src={
                    link +
                    "connect/ac-datamatics/ScreenRecordings/" +
                    video.contact_id +
                    ".webm"
                  }
                  type="video/webm"
                />
                <track
                  label="English"
                  kind="subtitles"
                  srcLang="en"
                  default
                  src={
                    link +
                    "connect/ac-datamatics/Captions/" +
                    video.contact_id +
                    ".vtt"
                  }
                />
              </video>
            </div>
            <div className={classes.videoDescription}>
              <div>
                <br />
                <h1>{video.agentUsername}</h1>
                <br />
                <h2>{uploadDate.toLocaleString()}</h2>
                <br />
                <h2>Rating: {video.rating}</h2>
              </div>
            </div>
          </div>
        </Card>
      </Modal>
    </div>
  );
}
