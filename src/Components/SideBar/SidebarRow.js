import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarRow.css";

function SidebarRow({ src, Icon, image, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {image && <img src={image} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
