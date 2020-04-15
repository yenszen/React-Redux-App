import React from "react";
import { connect } from "react-redux";
import { fetchVideos } from "../actions";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    return (
      <div>
        {this.props.videos ? (
          <div className="ui relaxed divided list">
            {this.props.videos.map(video => {
              return (
                <div key={video.title}>
                  <VideoItem
                    image={video.thumbnail}
                    title={video.title}
                    onVideoSelect={this.props.onVideoSelect}
                    video={video}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div>Fetching data</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { videos: state.videos };
};

export default connect(mapStateToProps, { fetchVideos })(VideoList);
