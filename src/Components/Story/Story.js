import React from "react";
import "./Story.css";
import Avatar from "@mui/material/Avatar";
function Story({ img, profileSrc, title }) {
  return (
    <div
      style={{
        backgroundImage: `url(${img}) `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat, repeat",
        backgroundOrigin: "content-box",
        backgroundPosition: "center",
      }}
      className="story"
    >
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
