import React from "react";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

const App = () => {
  return (
    <div className="ui container" style={{ margin: "1rem 0" }}>
      <h1>Match Highlights</h1>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoPlayer />
          </div>
          <div className="five wide column">
            <VideoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
