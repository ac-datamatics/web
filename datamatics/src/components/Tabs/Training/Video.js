const Video = ({}) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        ref={videoRef}
        url={video}
        width="100%"
        pip={true}
        controls={true}
        light={"/Images/logo.png"}
      />
    </div>
  );
};

export default Video;
