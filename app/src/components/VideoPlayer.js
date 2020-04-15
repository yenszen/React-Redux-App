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
      <div className="ui embed">
        <iframe src={video.url} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.title}</h4>
        <p>{video.competition.name}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
