import React from "react";
import "./Video.css";

const VideoItem = ({ image, title }) => {
  return (
    <div className="video-item">
      <img src={image} alt="video thumbnail" />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
