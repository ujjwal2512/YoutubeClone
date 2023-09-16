import React, { useEffect, useState } from 'react';
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_DETAIL } from '../utils/constants';
import VideoDetailCard from './VideoDetailCard';

const VideoDetails = ({info}) => {
    const [videoDetails, setVideoDetails] = useState([]);
    useEffect(() => {
      getVideoDetails();
    },[]);
  
    const getVideoDetails= async () => {
      const data = await fetch(YOUTUBE_VIDEO_DETAIL+info+"&key="+GOOGLE_API_KEY);
      const json = await data.json();
      console.log(json.items);
      setVideoDetails(json.items);
    };
  return (
    <div>
        {videoDetails.map((videoDetail) => (
             <VideoDetailCard key={videoDetail.id} info={videoDetail} />
      ))}
    </div>
  )
}

export default VideoDetails;