import React from "react";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { selectedVideo: null };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "1rem 0" }}>
        <h1>Match Highlights</h1>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoPlayer video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
