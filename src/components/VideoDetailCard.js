import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_CHANNEL_API } from "../utils/constants";
import ChannelDetailCard from "./ChannelDetailCard";
const formatDate = (isoDate) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", options);
};
const formatNumber = (number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(0) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(0) + 'K';
    } else {
      return number.toString();
    }
  };

const VideoDetailCard = ({ info }) => {
  const [channelDetails, setChannelDetails] = useState([]);
  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_API + info.snippet.channelId + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();
    setChannelDetails(json.items);
    console.log(json.items);
  };
  const formattedLikeCount = formatNumber(info.statistics.likeCount);
  const formattedDate = formatDate(info.snippet.publishedAt);
  return (
    <div>
      <h1 className="font-bold text-lg px-5 m-1 py-2">{info.snippet.title}</h1>
      <div className="m-4 flex">
        {channelDetails.map((channelDetail) => (
          <ChannelDetailCard key={channelDetail.id} info={channelDetail} />
        ))}
        <h1 className="my-2 mx-4 p-2 font-bold border border-black rounded-3xl text-white bg-black text-md">
          Subscribe
        </h1>
        <h1 className="my-2 ml-36 p-3 font-bold border border-gray-200 rounded-3xl text-black bg-gray-200 text-sm">
        <span className="mr-2">👍🏻</span>{formattedLikeCount}&nbsp;<span className="m-2">|</span>&nbsp;👎🏻
        </h1>
        <h1 className="my-2 mx-3 p-3 font-bold border border-gray-200 rounded-3xl text-black bg-gray-200 text-sm">
        <span className="mr-2">↪</span>Share
        </h1>
        <h1 className="my-2 mx-2 p-3 font-bold border border-gray-200 rounded-3xl text-black bg-gray-200 text-sm">
        <span className="mr-2">↓</span>Download
        </h1>
        <h1 className="my-2 mx-2 p-3 w-10 font-bold border border-gray-200 rounded-3xl text-black bg-gray-200 text-sm">
        ...
        </h1>
      </div>
      <div className="border border-black rounded-md w-[900] m-4 bg-gray-200">
        <div className="flex">
          <h3 className="m-2 py-1 font-bold">
            {info.statistics.viewCount} views
          </h3>
          <h3 className="m-2 py-1 font-bold">{formattedDate}</h3>
        </div>
        <h4 className="m-2 p-1 text-sm">{info.snippet.description}</h4>
      </div>
      <h3 className="m-4 pt-2 font-bold">{info.statistics.commentCount} Comments</h3>
    </div>
  );
};

export default VideoDetailCard;
