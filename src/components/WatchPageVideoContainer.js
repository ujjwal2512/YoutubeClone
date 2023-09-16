import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API_NEW } from "../utils/constants";
import { Link } from "react-router-dom";
import VideoCardNew from "./VideoCardNew";

const WatchPageVideoContainer = () => {
  const [videosNew, setVideosNew] = useState([]);
  useEffect(() => {
    getVideosNew();
  }, []);

  const getVideosNew = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API_NEW);
    const json = await data.json();
    //console.log(json.items);
    setVideosNew(json.items);
  };
  return (
    <div className="py-1">
      {videosNew.map((videoNew) => (
        <a href={"/watch?v="+videoNew.id}><VideoCardNew info={videoNew} /></a>
      ))}
    </div>
  );
};

export default WatchPageVideoContainer;
   