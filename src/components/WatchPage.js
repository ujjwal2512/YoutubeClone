import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import VideoDetails from "./VideoDetails";
import WatchPageVideoContainer from "./WatchPageVideoContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const videoId=searchParams.get("v");
  return (
    <div className="flex p-4 ">
    <div className="flex flex-col m-12">
    <div className="px-5">
     <div className="w-[900px] h-[450px]">
      <iframe
       width="900"
       height="450"
      
        
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
     </div>
    </div>
    <VideoDetails info={videoId}/>
    <CommentsContainer info={videoId}/>
    </div>
    <WatchPageVideoContainer />
    </div>
  );
};

export default WatchPage;
