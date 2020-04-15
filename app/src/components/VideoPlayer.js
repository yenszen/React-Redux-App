import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return (
      <div className="ui segment" style={{ height: "400px" }}>
        <div className="ui active dimmer">
          <div className="ui massive text loader">Please select a video</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <iframe style={{ width: "750px", height: "1000px" }} src={video.url} />
    </div>
  );
};

export default VideoPlayer;
