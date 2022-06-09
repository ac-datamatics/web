import ThumbCard from "./ThumbCard";
import {useState, useEffect} from "react";
import classes from "./Training.module.css";

const Assigned = () => {
  useEffect(() => {
    fetch("https://2uxbgsvox5.execute-api.us-east-1.amazonaws.com/Datamatics/video", {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((_data) => {
        setData(_data.videos)
      })
      .catch((err) => console.error(err));
  }, []);

  const [data, setData] = useState([]);

  // const [query, setQuery] = useState("");
  // const filter = data.filter(post => {
  //   if (query === '') {
  //     //if query is empty
  //     return post;
  //   } else if (post.videoTopic.toLowerCase().includes(query.toLowerCase())) {
  //     //returns filtered array
  //     return post;
  //   }
  // });

  return (
    <div className={classes.thumbnailCard}>
      {data.map((video, key) => {
        return <ThumbCard video={video} key={key} />;
      })}
    </div>
  );
};

export default Assigned;
