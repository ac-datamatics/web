const Home = ({ blobTest }) => {
  return (
    <div>
      <h1>Home Page!</h1>
      {blobTest && (
        <video
          src={URL.createObjectURL(blobTest)}
          controls
          autoPlay
          style={{ width: "700px", margin: "1em" }}
        />
      )}
    </div>
  );
};

export default Home;
