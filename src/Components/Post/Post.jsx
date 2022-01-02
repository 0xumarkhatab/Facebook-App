import {
  AccountCircleOutlined,
  ChatBubbleOutline,
  ExpandMore,
  NearMe,
  ThumbUpSharp,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function Post({ profileSrc, image, username, timestamp, message }) {
  const time =
    new Date(timestamp).toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }) +
    " " +
    new Date(timestamp).toLocaleTimeString();

  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__top__avatar" src={profileSrc} />
        <div className="post__top__info">
          <h3>{username}</h3>
          <p>{time}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      {image && <div className="post__image">{<img src={image} alt="" />}</div>}
      <div className="post__options">
        <div className="post__option">
          <ThumbUpSharp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline />

          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleOutlined />
          <ExpandMore />
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Post;
