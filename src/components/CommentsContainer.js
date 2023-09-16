import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_COMMENTS_API } from "../utils/constants";
import CommentCard from "./CommentCard";

const CommentsContainer = ({info}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
      getComments();
    }, []);
  
    const getComments= async () => {
      const data = await fetch(YOUTUBE_COMMENTS_API+info+"&key="+GOOGLE_API_KEY);
      const json = await data.json();
      setComments(json.items);
    };
  return (
    <div className="m-3 py-1 w-[900]">
      {comments.map((comment) => (
        <CommentCard key={comment.id} info={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
