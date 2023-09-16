import React from "react";

const CommentCard = ({ info }) => {
  return (
    <div className="flex m-1">
      <img className="rounded-full w-8 h-8" src={info.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
      <div className="flex flex-col">
      <h2 className="p-2 font-bold text-sm">@{info.snippet.topLevelComment.snippet.authorDisplayName}</h2>
      <h3 className="p-2 text-sm">{info.snippet.topLevelComment.snippet.textDisplay}</h3>
      <h3 className="text-sm p-2">👍🏻 {info.snippet.topLevelComment.snippet.likeCount}</h3>
      </div>
    </div>
  );
};

export default CommentCard;
