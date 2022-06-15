import * as React from "react";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";

import classes from "./VideoDetails.module.css";

export default function VideoDetails({ open, handleClose, video }) {
  const link = "https://d13wsb297kr3hd.cloudfront.net/";
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
            <h1 className={classes.cardTitle}>{video.uploadDate}</h1>
            <div className={classes.videoPlayer}>
              <video width={600} height={400} crossOrigin="anonymous" controls>
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
              {/* <iframe
                src={
                  link +
                  "connect/ac-datamatics/ScreenRecordings/" +
                  video.contact_id +
                  ".webm"
                }
                width={600}
                height={400}
                allowFullScreen={true}
                title="Video"
              ></iframe> */}
            </div>
            <div className={classes.videoDescription}>
              <div>
                <h3>
                  {video.agentUsername} - {video.sentimentCustomer}
                </h3>
                <p>Description</p>
              </div>
            </div>
          </div>
        </Card>
      </Modal>
    </div>
  );
}
