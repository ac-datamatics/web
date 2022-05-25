const Video = ({}) => {
  let blobs = await fetch("https://screen-recorder-storage-1ffe6405125622-dev.s3.amazonaws.com/public/2022-4-26-499.webm").then((r) => r.blob());
  return (
    <div className="player-wrapper">
      {/* <ReactPlayer
        ref={"https://screen-recorder-storage-1ffe6405125622-dev.s3.amazonaws.com/public/2022-4-26-499.webm"}
        url={"https://screen-recorder-storage-1ffe6405125622-dev.s3.amazonaws.com/public/2022-4-26-499.webm"}
        width="100%"
        pip={true}
        controls={true}
        light={"/Images/logo.png"}
      />*/}
      <video
            src={URL.createObjectURL(blobs)}
            controls
            autoPlay
            ref={""}
            style={{ width: "700px", margin: "1em" }}
          />
      
    </div>
  );
};

export default Video;
