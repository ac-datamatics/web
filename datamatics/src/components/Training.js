import ReactPlayer from "react-player"
import { useRef } from "react";
import { ClassNames } from "@emotion/react";

import classes from "./Training.module.css"

const Training = () => {

  let videoRef = useRef();

  const listOfVideosPaths = ["/Videos/Rec1.mp4", "/Videos/Rec1.mp4", "/Videos/Rec1.mp4", "/Videos/Rec1.mp4", "/Videos/Rec1.mp4", "/Videos/Rec1.mp4", "/Videos/Rec1.mp4", "/Videos/Rec1.mp4", "/Videos/Rec1.mp4"]

  return (
    <div>
      <h1>Training Page!</h1>
      <div className={classes.container}>
        {listOfVideosPaths.map((video, key) => {
          return (
            <div className='player-wrapper' >
              <ReactPlayer
                ref={videoRef}
                url={video}
                width="100%"
                pip={true}
                controls={true}
                light={"/Images/logo.png"}

              />
            </ div>
          )
        })}
      </div>
    </div >
  )
};

export default Training;
