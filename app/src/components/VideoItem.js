import React from "react";
import "./Video.css";

const VideoItem = ({ image, title, onVideoSelect, video }) => {
  // console.log(onVideoSelect);
  return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
      <img src={image} alt="video thumbnail" />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
